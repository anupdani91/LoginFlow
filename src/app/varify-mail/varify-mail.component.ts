import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecaptchaErrorParameters } from 'ng-recaptcha';

@Component({
  selector: 'app-varify-mail',
  templateUrl: './varify-mail.component.html',
  styleUrls: ['./varify-mail.component.css'],
})
export class VarifyMailComponent implements OnInit {
  composeMailForm: FormGroup;
  invalidCaptcha = true;
  constructor() {
    this.initializeComposeEmailForm();
  }

  ngOnInit(): void {}

  initializeComposeEmailForm() {
    this.composeMailForm = new FormGroup({
      to: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
    });
  }

  getToErrorMessage() {
    if (this.composeMailForm.controls.to.hasError('required')) {
      return 'Email required';
    }
    if (this.composeMailForm.controls.to.hasError('pattern')) {
      return 'Not a valid email address';
    }
    return '';
  }

  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.invalidCaptcha = false;
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

  onVerify() {
    alert('Email has been sent to you mail address!!!!');
    location.reload();
  }
}

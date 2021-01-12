import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validPassword = '12345678';
  isPasswordValid = true;
  showVerifyEmail = false;
  constructor() {
    this.initializeComposeEmailForm();
  }

  ngOnInit(): void {}

  initializeComposeEmailForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  getUsernameErrorMessage() {
    if (this.loginForm.controls.username.hasError('required')) {
      return 'Username required';
    }
    return '';
  }

  getPasswordErrorMessage() {
    if (this.loginForm.controls.password.hasError('required')) {
      return 'Password required';
    }
  }

  login() {
    this.isPasswordValid = true;
    if (this.loginForm.valid) {
      if (this.loginForm.controls.password.value !== this.validPassword) {
        this.isPasswordValid = false;
      }
    }
  }
}

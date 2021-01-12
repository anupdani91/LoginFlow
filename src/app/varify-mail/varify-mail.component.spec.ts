import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarifyMailComponent } from './varify-mail.component';

describe('ComposeMailComponent', () => {
  let component: VarifyMailComponent;
  let fixture: ComponentFixture<VarifyMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VarifyMailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarifyMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

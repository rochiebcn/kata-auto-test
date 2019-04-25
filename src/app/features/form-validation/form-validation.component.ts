import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class User {
  constructor(public email: string, public name: string, public option: string) {

  }
}

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})

export class FormValidationComponent implements OnInit {


  @Output() submitted = new EventEmitter<User>();
  public formGroup: FormGroup;

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(8)]);
  optionFormControl = new FormControl('', [
    Validators.nullValidator]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  options: string[] = ['One', 'Two', 'Three'];
  public isOk: boolean;


  constructor() {
    this.isOk = false;
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      emailFormControl : this.emailFormControl,
      nameFormControl : this.nameFormControl,
      optionFormControl : this.optionFormControl
    });
  }


  public submit() {
    if (this.formGroup.valid) {
      this.submitted.emit(
        new User(
          this.formGroup.value.emailFormControl,
          this.formGroup.value.nameFormControl,
          this.formGroup.value.optionFormControl)
      );
    }

  }

  public emitChange() {
    this.isOk = this.formGroup.valid;
  }
}

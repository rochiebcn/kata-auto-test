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
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {


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
    // this.formGroup.addControl();
    // this.formGroup.addControl();

    //
    // this.patientContactFormGroup = new FormGroup(
    //   nameFormControl);
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //     this.email.hasError('email') ? 'Not a valid email' :
  //       '';
  // }

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

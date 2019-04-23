import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {


  public formGroup: FormGroup;
  public nameFormControl = new FormControl('', [Validators.required, Validators.email]);
  // public email = new FormControl('', [Validators.required, Validators.email]);

  // @Output() isValidForm = new EventEmitter<boolean>();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  myControl =  new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  public isOk: boolean;


  constructor() {
    this.isOk = false;
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      emailFormControl : this.emailFormControl,
      nameFormControl : this.nameFormControl
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

  }

  public emitChange() {
    this.isOk = this.formGroup.valid;
  }
}

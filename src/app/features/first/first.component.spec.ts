import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent, User } from './first.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstComponent ],
      imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        MatButtonModule,
        MatAutocompleteModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be disabled at init', () => {
    // const comp = new FirstComponent();
    expect(component.isOk).toBe(false, 'false at start');
    // expect(component.isOk).toBeFalsy();
  });

  it('form invalid at start', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('email field is invalid if is not filled', () => {
    const emailFormControl = component.formGroup.controls.emailFormControl;
    expect(emailFormControl.valid).toBeFalsy();
    let errors: {};
    errors = emailFormControl.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email field is invalid if has a text that is not an email', () => {
    const emailValue = 'badEmail';
    component.emailFormControl.setValue(emailValue);
    const emailFormControl = component.formGroup.controls.emailFormControl;
    let errors: {};
    errors = emailFormControl.errors || {};
    expect(emailFormControl.valid).toBeFalsy();
    expect(errors['email']).toBeTruthy();
  });

  it('name field is invalid if has a length minor than 3 characters', () => {
    const nameValue = 'bu';
    component.nameFormControl.setValue(nameValue);
    const nameFormControl = component.formGroup.controls.nameFormControl;
    let errors: {};
    errors = nameFormControl.errors || {};
    expect(nameFormControl.valid).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();
  });

  it('name field is invalid if has a length major than 8 characters', () => {
    const nameValue = 'TenShinHan';
    component.nameFormControl.setValue(nameValue);
    const nameFormControl = component.formGroup.controls.nameFormControl;
    let errors: {};
    errors = nameFormControl.errors || {};
    expect(nameFormControl.valid).toBeFalsy();
    expect(errors['maxlength']).toBeTruthy();
  });

  it('name field is valid if has a length between 3 and 8 characters', () => {
    const nameValue = 'Son Goku';
    component.nameFormControl.setValue(nameValue);
    const nameFormControl = component.formGroup.controls.nameFormControl;
    let errors: {};
    errors = nameFormControl.errors || {};
    expect(nameFormControl.valid).toBeTruthy();
    expect(errors).toEqual({});
  });

  it('email field is valid if has a text that is an email', () => {
    const emailValue = 'goodEmail@ohyeah.com';
    component.emailFormControl.setValue(emailValue);
    const emailFormControl = component.formGroup.controls.emailFormControl;
    let errors: {};
    errors = emailFormControl.errors || {};
    expect(emailFormControl.valid).toBeTruthy();
    expect(errors).toEqual({});
  });

  it('option field is valid without value', () => {
    // const emailValue = 'goodEmail@ohyeah.com';
    // component.optionFormControl.setValue(emailValue);
    const optionFormControl = component.formGroup.controls.optionFormControl;
    let errors: {};
    errors = optionFormControl.errors || {};
    expect(optionFormControl.valid).toBeTruthy();
    expect(errors).toEqual({});
  });

  it('submit form emits a User', () => {
    expect(component.formGroup.valid).toBeFalsy();
    const goodEmail = 'goodEmail@ohyeah.com';
    component.formGroup.controls.emailFormControl.setValue(goodEmail);
    const name = 'Goku';
    component.formGroup.controls.nameFormControl.setValue(name);
    const optionValue = 'One';
    component.formGroup.controls.optionFormControl.setValue(optionValue);
    expect(component.formGroup.valid).toBeTruthy();

    let user: User;
    component.submitted.subscribe((value) => user = value);

    component.submit();

    expect(user.email).toBe(goodEmail);
    expect(user.name).toBe(name);
    expect(user.option).toBe(optionValue);

  });
});

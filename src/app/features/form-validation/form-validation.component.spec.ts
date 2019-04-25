import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationComponent, User } from './form-validation.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';

describe('FormValidationComponent', () => {
  let component: FormValidationComponent;
  let fixture: ComponentFixture<FormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationComponent ],
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
    fixture = TestBed.createComponent(FormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be disabled at init', () => {
    // const comp = new FormValidationComponent();
    expect(component.isOk).toBe(false, 'false at start');
  });

  it('form invalid at start', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('email field is invalid if is not filled', () => {

  });

  it('email field is invalid if has a text that is not an email', () => {

  });

  it('name field is invalid if has a length minor than 3 characters', () => {

  });

  it('name field is invalid if has a length major than 8 characters', () => {

  });

  it('name field is valid if has a length between 3 and 8 characters', () => {

  });

  it('email field is valid if has a text that is an email', () => {

  });

  it('option field is valid without value', () => {

  });

  it('submit form emits a User', () => {


  });
});

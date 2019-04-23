import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
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
    let emailFormControl = component.formGroup.controls.emailFormControl;
    expect(emailFormControl.valid).toBeFalsy();
    let errors = {};
    errors = emailFormControl.errors || {};
    expect(errors.required).toBeTruthy();
  });

  it('email field is invalid if has a text that is not an email', () => {
    const emailValue = 'badEmail';
    component.emailFormControl.setValue(emailValue);
    const emailFormControl = component.formGroup.controls.emailFormControl;
    let errors = {};
    errors = emailFormControl.errors || {};
    expect(emailFormControl.valid).toBeFalsy();
    expect(errors.pattern).toBeTruthy();
  });
});

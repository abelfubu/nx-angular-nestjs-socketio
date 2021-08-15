import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl, NgControl } from '@angular/forms';

import { FormFieldComponent } from './form-field.component';

describe('FormFieldComponent', () => {
  let component: FormFieldComponent;
  let fixture: ComponentFixture<FormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add class error if control is invalid and touched', () => {
    component.control = { invalid: true, touched: true } as NgControl;
    expect(component.error).toBeTruthy();
  });

  it('should not add class error if control is valid', () => {
    component.control = { invalid: false, touched: true } as NgControl;
    expect(component.error).toBeFalsy();
  });
});

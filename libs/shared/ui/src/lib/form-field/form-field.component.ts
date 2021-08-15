import { Component, ContentChild, HostBinding, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'tng-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  @ContentChild(NgControl) control?: NgControl;

  @HostBinding('class.error') get error() {
    return this.control?.invalid && this.control?.touched;
  }
}

@NgModule({
  declarations: [FormFieldComponent],
  exports: [FormFieldComponent],
})
export class FormFieldModule {}

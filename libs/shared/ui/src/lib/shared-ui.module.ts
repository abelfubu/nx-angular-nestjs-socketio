import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TngErrorModule } from './error/error.component';
import { FormFieldModule } from './form-field/form-field.component';
import { HeaderModule } from './header/header.component';

const MODULES = [HeaderModule, FormFieldModule, TngErrorModule];

@NgModule({
  imports: [CommonModule, MODULES],
  exports: [MODULES],
})
export class SharedUiModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { FormFieldModule } from '@socketio/shared/ui';
import { TngErrorModule } from 'libs/shared/ui/src/lib/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormFieldModule,
    TngErrorModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent],
  providers: [JwtHelperService],
})
export class ChatFeatureAuthModule {}

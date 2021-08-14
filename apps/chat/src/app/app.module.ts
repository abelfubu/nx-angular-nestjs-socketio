import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  ChatFeatureAuthModule,
  LoginComponent,
} from '@socketio/chat/feature-auth';
import { SharedUiModule } from '@socketio/shared/ui';
import { PrivateComponent } from './private.component';
import { RegisterComponent } from 'libs/chat/feature-auth/src/lib/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent, PrivateComponent],
  imports: [
    BrowserModule,
    ChatFeatureAuthModule,
    SharedUiModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

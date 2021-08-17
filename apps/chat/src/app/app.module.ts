import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  AuthInterceptor,
	ChatFeatureAuthModule,
  LoginComponent,
  RegisterComponent,
} from '@socketio/chat/feature-auth';
import { SharedUiModule } from '@socketio/shared/ui';
import { AppComponent } from './app.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@socketio/chat/feature-chat').then((m) => m.ChatFeatureChatModule),
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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}

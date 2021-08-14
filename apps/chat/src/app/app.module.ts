import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { ChatFeatureAuthModule, LoginComponent } from '@socketio/chat/feature-auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ChatFeatureAuthModule,
    RouterModule.forRoot([{ path: '', component: LoginComponent }], {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

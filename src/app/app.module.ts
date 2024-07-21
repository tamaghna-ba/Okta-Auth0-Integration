import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from "./app.component";
import { LoginButtonComponent } from "./login-button/login-button.component";
import { OktaWidgetComponent } from './okta-widget/okta-widget.component';

@NgModule({
  declarations: [AppComponent, LoginButtonComponent, OktaWidgetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: "<YOUR DOMAIN ID>",
      clientId: "<YOUR CLIENT ID>"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

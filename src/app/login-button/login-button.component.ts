import { Component } from '@angular/core';
import { OktaService } from "../services/okta.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  userSubscription: any = Subscription;

  constructor(public authService: OktaService) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}

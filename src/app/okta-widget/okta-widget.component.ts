import { Component } from '@angular/core';
import { OktaService } from "../services/okta.service";
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-okta-widget',
  templateUrl: './okta-widget.component.html',
  styleUrls: ['./okta-widget.component.css']
})
export class OktaWidgetComponent {

  user: User | null = null;

  constructor(private authService: OktaService) {
    this.authService.subscribeToUser(user => {
      this.user = user;
    });
  }
}

import { Injectable } from '@angular/core';
import { AuthService as OAuth } from '@auth0/auth0-angular';
import { Observable, Subscription } from 'rxjs';
import { User } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class OktaService {
  private userSubscription: Subscription | undefined;

  constructor(private auth: OAuth) {}

  // Method to log in
  login(): void {
    this.auth.loginWithPopup();
  }

  // Method to log out
  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  // Method to get user details
  getUser(): Observable<any | null> {
    return this.auth.user$;
  }

  // Method to subscribe to user details
  subscribeToUser(callback: (user: any | null) => void): void {
    this.userSubscription = this.auth.user$.subscribe(callback);
  }

  // Method to check authentication status
  isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
}

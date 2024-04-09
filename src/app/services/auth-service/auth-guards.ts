import { Injectable, Component } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate } from '@angular/router';
import { AuthService } from './auth-service';
import { LoginPageComponent } from '../../components/login/login-page/login-page.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuards
  implements CanActivate, CanDeactivate<LoginPageComponent>, CanActivateChild
{
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isloggedin()) {
      return true;
    } else {
      this.authService.redirectUrl = '/home';
      this.authService.redirectToLogin();
      return false;
    }
  }

  canDeactivate(component: LoginPageComponent): boolean {
    if (this.authService.isloggedin()) {
      return true;
    } else {
      return false;
    }
  }

  canActivateChild() {
    if (this.authService.isloggedin()) {
      return true;
    } else {
      this.authService.redirectToLogin();
      return false;
    }
  }
}

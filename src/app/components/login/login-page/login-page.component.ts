import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service/auth-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  onClickRegister(){
    this.router.navigateByUrl('/register');
  }
  invalidCredentialMsg!: string;
  username!: string;
  password!: string;
  retUrl: string = 'home';
  constructor(public authService: AuthService, private router: Router) {}

  onFormSubmit(loginForm: any) {
    this.username = loginForm.value.username;
    this.password = loginForm.value.password;
    if (this.authService.login(this.username, this.password)) {
      this.authService.redirectToPreviousUrl();
    } else {
      alert('Please enter valid username & password');
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'Library Management System';
  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  isloggedIn(){
    return this.authService.isloggedin();
  }
}

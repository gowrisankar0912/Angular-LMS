import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit{
  user: User = new User();
  constructor(private usersService: UserService, private router: Router){}
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

  saveUser() {
    this.usersService.addNewUser(this.user).subscribe(data => {
      console.log(data);
      this.goToUsersList();
    },
    error => console.log(error));
  }

  goToUsersList() {
    this.router.navigate(['userlist']);
  }

  
}

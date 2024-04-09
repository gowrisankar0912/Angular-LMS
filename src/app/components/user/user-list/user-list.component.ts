import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users!: User[];
  usersearch: string = "";
  constructor(private usersService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.usersService.getUsersList().subscribe(data =>{
      this.users = data;
      console.log(this.users);
    });
  }


  updateUser(userId: number) {
    this.router.navigate(['update-user', userId ]);
  }

  deleteUser(userId: number){
    this.usersService.deleteUser(userId).subscribe( data=> {
      this.getUsers();
    });
    this.router.navigateByUrl('userlist');
  }

}

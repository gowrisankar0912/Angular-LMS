import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  userId!: number;
  user: User = new User();
  
  constructor(private usersService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.usersService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    })
  }

  onSubmit() {
    this.usersService.updateUser(this.userId, this.user).subscribe( data =>{
        this.goToUsersList();
    },
    error => console.log(error));
    this.goToUsersList();
  }

  goToUsersList() {
    this.router.navigate(['userlist']);
  }

}

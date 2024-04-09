import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';


@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], userSearch: string): User[] {
    if (userSearch) {
      return users.filter(user => {
        return user.name.toLowerCase().includes(userSearch.toLowerCase())
        || user.username.toLowerCase().includes(userSearch.toLowerCase())
        || user.email.toLowerCase().includes(userSearch.toLowerCase())
      })
    }
    else {
      return users;
    }
  }
}
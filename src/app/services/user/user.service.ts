import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  resUsers!: User;
  private getUsers = "http://localhost:5174/api/User/GetUsers";
  private getUserbyId = "http://localhost:5174/api/User/GetUserById?id=";
  private addNewuser = "http://localhost:5174/api/User/AddUser";
  private updateuser = "http://localhost:5174/api/User/UpdateUser?id=";
  private deleteuser = "http://localhost:5174/api/User/DeleteUser?id=";
  constructor(private http: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.getUsers}`);
  }

  addNewUser(user: User): Observable<Object> {
    return this.http.post(`${this.addNewuser}`, user);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.getUserbyId}${userId}`);
  }

  updateUser(userId: number, user: User): Observable<Object> {
    return this.http.put(`${this.updateuser}${userId}`, user);
  }

  deleteUser(userId: number): Observable<Object> {
    return this.http.delete(`${this.deleteuser}${userId}`);
  }
}

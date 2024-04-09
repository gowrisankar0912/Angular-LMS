import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { DisplayBooksComponent } from './components/book/display-books/display-books.component';
import { IssueBookComponent } from './components/book/issue-book/issue-book.component';
import { UpdateBookComponent } from './components/book/update-book/update-book.component';
import { DisplayIssueDetailsComponent } from './components/book/display-issue-details/display-issue-details.component';
import { AuthGuards } from './services/auth-service/auth-guards';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./components/login/login/login.module').then((m)=>m.LoginModule)}, 
  { path: 'home', component: HomeComponent, canActivate: [AuthGuards]},
  { path: 'update-user/:id', component: UpdateUserComponent, canActivate: [AuthGuards] },
  { path: 'userlist', component: UserListComponent, canActivate: [AuthGuards] },
  { path: 'addbook', component: AddBookComponent, canActivate: [AuthGuards] },
  { path: 'displaybooks', component: DisplayBooksComponent, canActivate: [AuthGuards] },
  { path: 'issuebook', component: IssueBookComponent, canActivate: [AuthGuards] },
  { path: 'update-book/:isbn', component: UpdateBookComponent, canActivate: [AuthGuards] },
  { path: 'displayissuedetails', component: DisplayIssueDetailsComponent, canActivate: [AuthGuards] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

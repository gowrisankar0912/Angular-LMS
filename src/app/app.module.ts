import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/login/layout/layout.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { RegisterPageComponent } from './components/login/register-page/register-page.component';
import { DisplayBooksComponent } from './components/book/display-books/display-books.component';
import { IssueBookComponent } from './components/book/issue-book/issue-book.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UpdateBookComponent } from './components/book/update-book/update-book.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { LoginModule } from './components/login/login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { BookService } from './services/book/book.service';
import { DisplayIssueDetailsComponent } from './components/book/display-issue-details/display-issue-details.component';
import { IssueDetailsService } from './services/issued-services/issue-details.service';
import { AuthService } from './services/auth-service/auth-service';
import { BookSearchPipe } from './pipes/book-search.pipe';
import { UserSearchPipe } from './pipes/user-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DisplayBooksComponent,
    AddBookComponent,
    IssueBookComponent,
    UserListComponent,
    UpdateBookComponent,
    UpdateUserComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent,
    LayoutComponent,
    DisplayIssueDetailsComponent,
    BookSearchPipe,
    UserSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule ,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BookService,
    AuthService,
    UserService,
    IssueDetailsService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

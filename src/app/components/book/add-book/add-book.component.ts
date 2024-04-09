import { Component } from '@angular/core';
import { Book } from '../../../models/book';
import { Router } from '@angular/router';
import { BookService } from '../../../services/book/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  book: Book = new Book();
  constructor(private booksService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  saveBook() {
    this.booksService.addBook(this.book).subscribe(data => {
      console.log(data);
      this.goToBooksList();
    },
    error => console.log(error));
  }

  goToBooksList() {
    this.router.navigate(['displaybooks']);
  }

  onSubmit() {
    console.log(this.book);
    this.saveBook();
  }
}

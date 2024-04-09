import { Component } from '@angular/core';
import { Book } from '../../../models/book';
import { Router } from '@angular/router';
import { BookService } from '../../../services/book/book.service';
import { BookSearchPipe } from '../../../pipes/book-search.pipe';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrl: './display-books.component.css'
})
export class DisplayBooksComponent {
  books!: Book[];
  booksearch: string = '';
  search!: BookSearchPipe;
  constructor(private booksService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.booksService.getbooks().subscribe(data =>{
      this.books = data;
    });
  }

  updateBook(bookId: number) {
    this.router.navigate(['update-book', bookId ]);
  }

  deleteBook(bookId: number) {
    this.booksService.deletebook(bookId).subscribe( data=> {
      this.getBooks();
    });
    this.router.navigateByUrl('displaybooks');
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'bookSearch'
})
export class BookSearchPipe implements PipeTransform {

  transform(books: Book[], bookSearch: string): Book[] {
    if (bookSearch) {
      return books.filter(Book => {
        return Book.title.toLowerCase().includes(bookSearch.toLowerCase())
          || Book.author.toLowerCase().includes(bookSearch.toLowerCase())
          || Book.genre.toLowerCase().includes(bookSearch.toLowerCase())
      });

    }
    else {
      return books;
    }
  }

}
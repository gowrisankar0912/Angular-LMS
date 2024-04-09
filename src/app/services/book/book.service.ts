import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  resBooks!: Book;
  private getBooks = "http://localhost:5174/api/Book/GetBooks";
  private getBookById = "http://localhost:5174/api/Book/GetBookByISBN?isbn=";
  private addNewBook = "http://localhost:5174/api/Book/AddBook";
  private updateBook = "http://localhost:5174/api/Book/UpdateBook?isbn=";
  private deleteBook = "http://localhost:5174/api/Book/DeleteBook?isbn=";
  constructor(private http: HttpClient) { }

  getbooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.getBooks)
  }

  addBook(book: Book): Observable<Object> {
    return this.http.post(`${this.addNewBook}`, book);
  }

  getbookById(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.getBookById}${bookId}`);
  }

  updatebook(bookId: number, book: Book): Observable<any> {
    return this.http.put<any>(`${this.updateBook}${bookId}`, book);
  }

  deletebook(bookId: number): Observable<Object> {
    return this.http.delete(`${this.deleteBook}${bookId}`);
  }
}

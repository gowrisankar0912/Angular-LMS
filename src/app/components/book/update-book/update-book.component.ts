import { Component } from '@angular/core';
import { Book } from '../../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../services/book/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  isbn!: number;
  book: Book = new Book();

  constructor(private booksService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.params['isbn'];
    this.booksService.getbookById(this.isbn).subscribe(data => {
      this.book = data;
    })
  }

  onSubmit() {
    this.booksService.updatebook(this.isbn, this.book).subscribe( data =>{
        this.goToBooksList();
    },
    error => console.log(error));
    this.goToBooksList();
  }

  goToBooksList() {
    this.router.navigate(['displaybooks']);
  }
}

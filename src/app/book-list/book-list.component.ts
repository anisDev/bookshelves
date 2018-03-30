import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Book} from '../models/Book.model';
import {BooksService} from '../servives/books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSubscriprion: Subscription;
  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit() {
    this.bookSubscriprion = this.bookService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookService.getbooks();
    this.bookService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }
  onBookRemove(book: Book) {
    this.bookService.removebook(book);
  }
  onViewbook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }
  ngOnDestroy() {
    this.bookSubscriprion.unsubscribe();
  }

}

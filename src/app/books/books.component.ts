import { Component, EventEmitter, OnInit } from '@angular/core';
import { Book } from '../interfaces/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  shoppingCart: Book[] = [];
  isDisabled: boolean = false;
  inputName: string = '';
  isShowingBooks: boolean = false;

  constructor(private bookService: BooksService) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {}

  handleClick() {
    this.isShowingBooks = !this.isShowingBooks;
  }

  handleInput(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }

  addToShoppingCart(book: Book) {
    console.log(book);
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Book } from '../interfaces/Book';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input()
  book: Book = {} as Book;

  @Input()
  index: number = 0;

  @Output()
  bookEventEmitter = new EventEmitter<Book>();

  isBookInShoppingCart: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    console.log('ngOnInit is called after the Constructor completed');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is called when Component is removed from DOM');
  }

  addToShoppingCart() {
    this.isBookInShoppingCart = true;
    this.shoppingCartService.addToShoppingCart(this.book);
    this.bookEventEmitter.emit(this.book);
  }

  removeFromShoppingCart() {
    this.isBookInShoppingCart = false;
        this.shoppingCartService.removeFromShoppingCart(this.book);
  }
}

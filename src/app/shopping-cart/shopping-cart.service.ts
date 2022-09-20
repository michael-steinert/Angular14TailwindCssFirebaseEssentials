import { Injectable } from '@angular/core';
import { Book } from '../interfaces/Book';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingCart: Book[] = [];

  constructor() {}

  addToShoppingCart(book: Book) {
    this.shoppingCart.push(book);
  }

  removeFromShoppingCart(book: Book) {
    this.shoppingCart = this.shoppingCart.filter((b) => {
      return b != book;
    });
  }

  getShoppingCart() {
    return this.shoppingCart;
  }
}

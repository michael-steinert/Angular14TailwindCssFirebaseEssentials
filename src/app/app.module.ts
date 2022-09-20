import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [AppComponent, ShoppingCartComponent],
  imports: [BrowserModule, AppRoutingModule, BooksModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

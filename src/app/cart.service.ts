import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  // addToCart() method appends a product to an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }

  // getItems() method collects the items users add to the cart and returns each item with its associated quantity
  getItems() {
    return this.items;
  }

  // clearCart() method returns an empty array of items, which empties the cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}

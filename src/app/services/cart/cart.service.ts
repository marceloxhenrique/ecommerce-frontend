import { Injectable } from '@angular/core';
import CartProduct, { Colors } from '../../model/CartProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private listOfProducts = new BehaviorSubject<CartProduct[]>([]);
  listOfProducts$ = this.listOfProducts.asObservable();

  private total = new BehaviorSubject<{ subtotal: number; total: number }>({
    subtotal: 0,
    total: 0,
  });
  total$ = this.total.asObservable();

  quantityOfProductsInCart: number = 0;

  constructor() {}

  addProductToCart(product: CartProduct) {
    const productIndex = this.listOfProducts
      .getValue()
      .findIndex(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );

    if (productIndex != -1) {
      this.listOfProducts.getValue()[productIndex].updateQuantity();
    } else {
      const updateProducts = [
        ...this.listOfProducts.getValue(),
        new CartProduct(
          product.id,
          product.code,
          product.name,
          product.title,
          product.description,
          product.details,
          product.price,
          product.category,
          product.color,
          product.size,
          product.image,
          product.createdAt,
          product.updatedAt,
          product.discount
        ),
      ];
      this.listOfProducts.next(updateProducts);
    }
    this.calculateTotal();
  }

  removeProductFromListOfProduct(product: CartProduct): void {
    const productIndex = this.listOfProducts
      .getValue()
      .findIndex(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );
    this.listOfProducts.getValue().splice(productIndex, 1);
    this.listOfProducts.next(this.listOfProducts.getValue());
  }

  calculateDiscount(): number {
    let discount = 0;
    this.listOfProducts.getValue().map((product) => {
      if (product.discount) {
        discount += (product.price * product.quantity * product.discount) / 100;
      } else {
        discount += product.price * product.quantity;
      }
    });
    return discount;
  }

  calculateTotal(): void {
    const subtotal = this.listOfProducts.getValue().reduce((acc, product) => {
      return product.quantity * product.price + acc;
    }, 0);
    this.total.next({
      subtotal: subtotal,
      total: subtotal - this.calculateDiscount(),
    });
  }
}

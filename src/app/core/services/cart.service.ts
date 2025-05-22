import {Injectable} from '@angular/core';
import {ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey: string = 'cart-items';

  constructor() {
  }

  getCart(): ProductModel[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveCart(cart: ProductModel[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  addToCart(item: ProductModel) {
    // agarrar carito con productos
    const carrito: ProductModel[] = this.getCart();
    // ver si hay existente
    const index = carrito.findIndex(it => it.id === item.id);
    if (index >= 0) {
      carrito[index].quantity += 1;
    } else {
      /* agrega un item a la cola */
      carrito.push(item);
    }
    this.saveCart(carrito);
  }

  removeFromCart(productId: number) {
    const carrito: ProductModel[] = this.getCart();
    const carritoRenovado: ProductModel[] = carrito.filter(item => item.id !== productId);
    this.saveCart(carritoRenovado);
  }

  clearCart() {
    localStorage.removeItem(this.storageKey);
  }
}

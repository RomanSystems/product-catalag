import {Component, inject, OnInit} from '@angular/core';
import {ProductModel} from '../../../core/models/product.model';
import {CartStore} from '../../state/cart.store';
import {MatBadge} from '@angular/material/badge';
import {MatButton, MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
@Component({
  selector: 'app-cart',
  imports: [
    /*MatMiniFabButton,*/
    MatIcon,
    MatButton,
    /*MatBadge*/
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent{
  cartStore = inject(CartStore);

  /* Sincroniza o realiza un enlace con el estado inicial y global */
  get items() {
    return this.cartStore.items();
  }

  get totalPrdsinCart(){
    return this.cartStore.totalProdsInCart();
  }

  /* Sincroniza o realiza un enlace con el total */
  get totalUSD() {
    return this.cartStore.totalCartUSD();
  }

  addSampleProduct(product: ProductModel) {
    //const sample: ProductModel = { id: 1, title: 'Producto Demo', price: 50, quantity: 1 };
    this.cartStore.addProduct(product);
  }

  removeProduct(id: number) {
    this.cartStore.removeProduct(id);
  }

  clearCart() {
    this.cartStore.clearCart();
  }
}

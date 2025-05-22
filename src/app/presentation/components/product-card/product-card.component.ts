import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCard, MatCardContent, MatCardFooter} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {ProductModel} from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [MatSlideToggleModule, MatCard, MatIcon, MatButtonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() item!: ProductModel;

  @Output() addedToCart = new EventEmitter<ProductModel>();

  addToCart(item: ProductModel) {
    this.addedToCart.emit(item);
  }
}

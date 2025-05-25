import {Component, inject} from '@angular/core';
import {ProductModel} from '../../../core/models/product.model';
import {ProductRepository} from '../../../data/repositories/product.repository';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {ProductCardComponent} from '../product-card/product-card.component';
import {CartStore} from '../../state/cart.store';
import {MatAnchor} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-product-details',
  imports: [
    ProductCardComponent,
    MatAnchor,
    RouterLinkActive,
    RouterLink,
    MatAnchor,
    RouterLinkActive,
    MatAnchor,
    MatIcon,
    RouterLinkActive
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  route = inject(ActivatedRoute);
  cartStore = inject(CartStore);
  item!: ProductModel;
  id!: number;
  productService = inject(ProductRepository);
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.productService.getProduct(this.id);
    console.log(this.item);
  }
  cartItemAdd(item: ProductModel) {
    /*alert("Se agregó el el producto " + item.title + " al carrito de compras");*/
    this.cartStore.addProduct(item);
  }
}

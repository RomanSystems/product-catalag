import {ProductModel} from '../../core/models/product.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductRepository{
  localKey: string = "list-products";

  getProducts(): ProductModel[] {
    const data = localStorage.getItem(this.localKey);
    return data ? JSON.parse(data) : [];
  }

  saveProducts(cart: ProductModel[]) {
    localStorage.setItem(this.localKey, JSON.stringify(cart));
  }

  getProduct(id: number): ProductModel {
    const data = this.getProducts();
    let entre =  data.filter(product => product.id == id);
    console.log(entre);
    return entre[0];
  }
}

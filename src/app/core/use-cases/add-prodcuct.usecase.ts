import {ProductModel} from '../models/product.model';

export class AddProdcuctUseCase {
  execute(cart: ProductModel[], product: ProductModel): ProductModel[] {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      return cart.map(p =>
        p.id === product.id ? {...p, quantity: p.quantity + 1} : p
      );
    }
    return [...cart, {...product, quantity: product.quantity + 1}];
  }
}

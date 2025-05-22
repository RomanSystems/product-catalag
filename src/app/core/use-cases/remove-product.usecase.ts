import {ProductModel} from '../models/product.model';

export class RemoveProductUsecase {
  execute(cart: ProductModel[], productId: number): ProductModel[] {
    return cart.filter(item => item.id !== productId);
  }
}

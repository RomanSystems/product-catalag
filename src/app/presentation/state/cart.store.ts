import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {ProductModel} from '../../core/models/product.model';
import {AddProdcuctUseCase} from '../../core/use-cases/add-prodcuct.usecase';
import {LocaCartRepository} from '../../data/repositories/loca-cart.repository';
import {computed} from '@angular/core';
import {RemoveProductUsecase} from '../../core/use-cases/remove-product.usecase';

const repository = new LocaCartRepository();
const addUseCase = new AddProdcuctUseCase();
const removeUseCase = new RemoveProductUsecase();

const initialState = {
  items: repository.getCart()
}

export const CartStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),/*inciializa el carrito con los productos almacenados en el local storage */
  withComputed(({items}) => ({
    /* variables globales */
    /* cantidad de productos en carrito */
    totalProdsInCart: computed(() => items().length),
    /* cantidad total de cantidades carrito */
    totalCantProdsInCart: computed(() => items().reduce((sum, p) => sum + p.quantity, 0)),
    /* si el items se actualiza, esto crea una cadena de reacciones y afecta en los lugares que se usa items */
    totalCartUSD: computed(() => items().reduce((sum, p) => sum + p.price * p.quantity, 0)),
  })),
  withMethods(store => ({
    /* Son las funciones del servicio para usarlo desde fuera */
    addProduct(product: ProductModel) {
      const updatedCart = addUseCase.execute(store.items(), product);
      /*patchState(store, (state) => ( { items: { ...state.items, product } } ) );*/
      patchState(store, (_) => ({items: updatedCart}));
      repository.saveCart(updatedCart);
    },
    removeProduct(productId: number) {
      //const updatedCart = store.items().filter(p => p.id !== productId);
      const updatedCart = removeUseCase.execute(store.items(), productId);
      // modifica el estado
      /*patchState(store, (state) => ({items: updatedCart}));*/
      patchState(store, (_) => ({items: updatedCart}));
      // modifica en el localstorage
      repository.saveCart(updatedCart);
    },
    clearCart() {
      patchState(store, (_) => ({items: []}));
      repository.saveCart([]);
    },
  }))
);

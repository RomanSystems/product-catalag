import {Component, inject, ViewChild} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatNavList} from '@angular/material/list';
import {MatButton} from '@angular/material/button';
import {CartComponent} from './presentation/components/cart/cart.component';
import {MatIcon} from '@angular/material/icon';

import {CartStore} from './presentation/state/cart.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatNavList,
    MatSidenav,
    MatButton,
    MatSidenavContainer,
    CartComponent,
    MatIcon,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalog-product';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  items = [
    {name: 'Notificaciones', count: 3},
    {name: 'Mensajes', count: 5},
    {name: 'Tareas pendientes', count: 2}
  ];

  toggleSidenav() {
    this.sidenav.toggle();
  }

  /* En lugar del servicio usamos el store que es lo mismo */
  /*cartService = inject(CartService);*/
  cartStore = inject(CartStore);

  /* enlazamos nuestra variable con la variable global */
  get totalProdsInCart() {
    return this.cartStore.totalProdsInCart();
  }

  /* enlazamos nuestra variable con la variable global */
  get totalCantProdsInCart() {
    return this.cartStore.totalCantProdsInCart();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductListComponentComponent} from './product-list-component/product-list-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalog-product';
}

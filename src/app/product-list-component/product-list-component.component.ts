import {Component} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCard, MatCardContent, MatCardFooter} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-list-component',
  imports: [MatSlideToggleModule, MatCard, MatCardContent, MatIcon, MatButtonModule, MatCardFooter],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent {

}

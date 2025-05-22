
import { Routes } from '@angular/router';
import { ProductDetailsComponent} from './presentation/components/product-details/product-details.component';
import { ProductListComponent} from './presentation/components/product-list-component/product-list.component';

export const routes: Routes = [
    {
        path: '', component: ProductListComponent, title: 'Lista Productos'
    },
    {
        path: 'details/:id', component: ProductDetailsComponent, title: 'detalle producto'
    }
];

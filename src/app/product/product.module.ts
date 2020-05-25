import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module'; 
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductDetailComponent,
    ],
    imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
    ]
})

export class ProductMule {

}
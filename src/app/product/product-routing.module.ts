import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: ':id',
        component: ProductDetailComponent
    },
     // {
      //   path: 'products/:id',
      //   component: ProductDetailComponent
      // }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule {

}


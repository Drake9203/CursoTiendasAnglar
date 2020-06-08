import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { NavComponent } from "./components/nav/nav.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { FormProductComponent } from './components/form-product/form-product.component';


@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductListComponent, FormProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AdminModule {}

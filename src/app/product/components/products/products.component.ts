import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe( resp => {
     this.products = resp;
    })
  }

  clickProduct(id: number) {
    console.log(id, 'id');
  }

}

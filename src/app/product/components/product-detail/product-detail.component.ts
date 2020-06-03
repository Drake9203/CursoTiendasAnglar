import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "../../../core/services/products/products.service";
import { Product } from "../../product.model";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProductById(id).subscribe((resp) => {
      console.log(resp);
      this.product = resp;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: "30",
      image: "assets/images/mug.png",
      title: "Producto mas nuevo",
      price: 80000,
      description: "bla bla bla bla bla",
    };
    this.productsService.createProduct(newProduct).subscribe( resp => {
      console.log(resp);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      title: "Producto editado nuevo",
      price: 20,
      description: "editado",
    };

    this.productsService.updateProduct('30', updateProduct).subscribe( resp => {
      console.log(resp)
    });
  }

  deleteProduct() {
    const idProduct = "30";
    this.productsService.deletProduct(idProduct).subscribe( resp => {
      console.log(resp)
    })
  }
}

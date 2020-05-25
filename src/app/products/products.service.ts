import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  products: Product[] = [
    {
      id: "1",
      image: "assets/img/camiseta.png",
      title: "Camiseta",
      price: 8000,
      description: "Camiseta",
    },
    {
      id: "2",
      image: "assets/img/camiseta.png",
      title: "Hoodie",
      price: 8000,
      description: "Hoodie",
    },
    {
      id: "3",
      image: "assets/img/camiseta.png",
      title: "Mug",
      price: 8000,
      description: "Mug",
    },
    {
      id: "4",
      image: "assets/img/camiseta.png",
      title: "Pin",
      price: 8000,
      description: "Pin",
    },
    {
      id: "5",
      image: "assets/img/camiseta.png",
      title: "Stikers",
      price: 8000,
      description: "Stikers",
    },
  ];
  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.find((item) => id === item.id);
  }
}

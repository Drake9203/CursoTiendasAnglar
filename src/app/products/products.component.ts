import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/img/camiseta.png',
      title: 'Camiseta',
      price: 8000,
      description: 'Camiseta'
    },
    {
      id: '2',
      image: 'assets/img/camiseta.png',
      title: 'Hoodie',
      price: 8000,
      description: 'Hoodie'
    },
    {
      id: '3',
      image: 'assets/img/camiseta.png',
      title: 'Mug',
      price: 8000,
      description: 'Mug'
    },
    {
      id: '4',
      image: 'assets/img/camiseta.png',
      title: 'Pin',
      price: 8000,
      description: 'Pin'
    },
    {
      id: '5',
      image: 'assets/img/camiseta.png',
      title: 'Stikers',
      price: 8000,
      description: 'Stikers'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }



  clickProduct(id: number) {
    console.log(id, 'id');
  }

}

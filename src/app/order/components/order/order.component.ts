import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  product$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.product$ = this.cartService.cart$;
   }

  ngOnInit(): void {
  }

}

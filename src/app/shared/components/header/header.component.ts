import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;

  // constructor(
  //   private cartService: CartService,
  //   ) {
  //   this.cartService.cart$.subscribe( products => {
  //     this.total = products.length;
  //   });
  //  }

  constructor(
    private cartService: CartService,
    ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
   }

  ngOnInit(): void {
  }

}

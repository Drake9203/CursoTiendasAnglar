import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from "@angular/core";
import { Product } from "../../product.model";
import { CartService } from 'src/app/core/services/cart.service';


@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartService: CartService,
  ) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  addToCArt() {
    this.cartService.addCart(this.product);
  }
}

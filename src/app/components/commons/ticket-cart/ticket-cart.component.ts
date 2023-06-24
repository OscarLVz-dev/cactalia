import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'ticket-cart',
  templateUrl: './ticket-cart.component.html',
  styleUrls: ['./ticket-cart.component.scss']
})
export class TicketCartComponent {

  product: Product = {
    name: "Pin de ranita",
    description: "Hermoso pin de ranita bebe. 20x10 cm.",
    price: 40.00,
    photo: "assets/img/product.jpg",
    quantity: 1,
  };

  products: Product[] = [this.product, this.product, this.product, this.product, this.product, this.product];
}

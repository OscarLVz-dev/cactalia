import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'ticket-cart',
  templateUrl: './ticket-cart.component.html',
  styleUrls: ['./ticket-cart.component.scss']
})
export class TicketCartComponent {

  product: Product = { 
    name: "Piin de ranita", 
    description: "Hermoso pin de ranita bebe. 20x10 cm.",
    price: "$40.00", 
    photo: "https://drive.google.com/uc?id=1OqRmfxGxFBnG3sT3r9E9RFf0teq7lAWB&export=download" 
  };
}

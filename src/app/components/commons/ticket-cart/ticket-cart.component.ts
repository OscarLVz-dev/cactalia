import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { TicketCartService } from 'src/app/services/ticket-cart.service';

@Component({
  selector: 'ticket-cart',
  templateUrl: './ticket-cart.component.html',
  styleUrls: ['./ticket-cart.component.scss']
})
export class TicketCartComponent implements OnInit {

  products: Product[] = [];
  total: number = 0;

  constructor(
    private ticketService: TicketCartService,
  ) { }

  ngOnInit(): void {
    this.products = this.ticketService.getItems();
    this.total = this.ticketService.getTotal();
  }

  /**
   * Remove all cart items
   */
  removeAllItems() {
    this.ticketService.removeAllItems();
    this.products = this.ticketService.getItems();
    this.total = this.ticketService.getTotal();
  }

  /**
   * Remove item cart
   */
  removeItem(index:number) {
    this.ticketService.removeItem(index);
    this.products = this.ticketService.getItems();
    this.total = this.ticketService.getTotal();
  }

}

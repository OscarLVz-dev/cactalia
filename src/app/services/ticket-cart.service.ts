import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import iziToast from 'izitoast';

@Injectable({
  providedIn: 'root'
})
export class TicketCartService {

  public static cartStorageName:string ="cctla_crt";

  /**
   * Add item to cart
   */
  addItem(item:Product) {
    if (typeof (Storage) !== 'undefined') {
      let cart:Product[] = JSON.parse(localStorage.getItem(TicketCartService.cartStorageName));
      if (!cart) {
        let newCart:Product[] = [item];
        localStorage.setItem(TicketCartService.cartStorageName, JSON.stringify(newCart));
      } else {
        cart.push(item);
        localStorage.setItem(TicketCartService.cartStorageName, JSON.stringify(cart));
      }
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Navegador no compatible.',
      });
    }
  }

}

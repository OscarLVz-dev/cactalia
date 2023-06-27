import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import iziToast from 'izitoast';
import { Styles } from '../constants/Styles';

@Injectable({
  providedIn: 'root'
})
export class TicketCartService {

  public static cartStorageName: string = "cctla_crt";


  /**
   * Get cart items
   */
  getItems(): Product[] {
    if (typeof (Storage) !== 'undefined') {
      let cart: Product[] = JSON.parse(localStorage.getItem(TicketCartService.cartStorageName));
      if (!cart) {
        return [];
      } else {
        return cart;
      }
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Navegador no compatible.',
      });
      return [];
    }
  }

  /**
   * Add item to cart
   */
  addItem(item: Product) {
    if (typeof (Storage) !== 'undefined') {
      Styles.newElement=true;
      let cart: Product[] = JSON.parse(localStorage.getItem(TicketCartService.cartStorageName));
      if (!cart) {
        let newCart: Product[] = [item];
        localStorage.setItem(TicketCartService.cartStorageName, JSON.stringify(newCart));
      } else {
        cart.push(item);
        localStorage.setItem(TicketCartService.cartStorageName, JSON.stringify(cart));
      }
      setTimeout(() => {
        Styles.newElement=false;
      }, 900);
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Navegador no compatible.',
      });
    }
  }

  /**
   * Get total cart
   */
  getTotal(): number {
    let total = 0;
    if (typeof (Storage) !== 'undefined') {
      let cart: Product[] = JSON.parse(localStorage.getItem(TicketCartService.cartStorageName));
      if (cart) {
        cart.forEach(item => {
          total += item.price * item.quantity;
        });
      }
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Navegador no compatible.',
      });
    }
    return total;
  }

  /**
   * Remove a cart item
   */
  removeItem(index:number) {
    if (typeof (Storage) !== 'undefined') {
      let cart: Product[] = JSON.parse(localStorage.getItem(TicketCartService.cartStorageName));
      if (cart) {
        cart.splice(index,1);
        localStorage.setItem(TicketCartService.cartStorageName, JSON.stringify(cart));
      }
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Navegador no compatible.',
      });
    }
  }

  /**
   * Remove all cart items
   */
  removeAllItems() {
    if (typeof (Storage) !== 'undefined') {
      localStorage.removeItem(TicketCartService.cartStorageName);
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Navegador no compatible.',
      });
    }
  }

}

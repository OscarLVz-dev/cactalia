import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketCartService {

  constructor() { }

  /**
   * Add item to cart
   */
  addItem() {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem('Nombre', 'Miguel Antonio');
      // Código cuando Storage es compatible
    } else {
      // Código cuando Storage NO es compatible
    }
  }

}

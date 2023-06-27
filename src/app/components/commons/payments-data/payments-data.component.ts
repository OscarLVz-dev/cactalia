import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import iziToast from 'izitoast';
import { PayData } from 'src/app/constants/PayData';

@Component({
  selector: 'payments-data',
  templateUrl: './payments-data.component.html',
  styleUrls: ['./payments-data.component.scss']
})
export class PaymentsDataComponent {

  public PayDataEnum = PayData;

  constructor(private clipboard: Clipboard) { }

  /**
   * Copy text to clipboard
   * @param text text to copy
   */
  copyText(payData: PayData) {
    if (this.clipboard.copy(payData.value)) {
      iziToast.success({
        title: '¡Exito!',
        message: payData.displayName + ' copiada.',
      });
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Texto no copiado.',
      });
    }
  }

}

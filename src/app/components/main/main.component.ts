import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import iziToast from 'izitoast';
import { PayData } from 'src/app/constants/PayData';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

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
        message: payData.displayName+' copiada.',
      });
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Texto no copiado.',
      });
    }
  }

}

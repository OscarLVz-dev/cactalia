import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private clipboard: Clipboard) {}

  /**
   * Copy text to clipboard
   * @param text text to copy
   */
  copyText(text:string){
    if(this.clipboard.copy(text)){

    }
  }

}

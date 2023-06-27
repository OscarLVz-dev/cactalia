import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { TicketCartComponent } from './components/commons/ticket-cart/ticket-cart.component';
import { Styles } from './constants/Styles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cactalia';
  public StylesConstants = Styles;

  constructor(public dialog: MatDialog) {}

  openTicketCart(){
    const dialogRef = this.dialog.open(TicketCartComponent, {
      width: '90vw',
      maxWidth: '400px',
      panelClass: 'ticket-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      //After close ticket
    });    
  }
}

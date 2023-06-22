import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { TicketCartComponent } from './components/commons/ticket-cart/ticket-cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cactalia';

  constructor(public dialog: MatDialog) {}

  openTicketCart(){
    const dialogRef = this.dialog.open(TicketCartComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      //After close ticket
    });    
  }
}

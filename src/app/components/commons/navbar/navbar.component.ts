import { Component } from '@angular/core';
import { Catalog } from 'src/app/constants/Catalog';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public catalogs = Catalog;
  
}

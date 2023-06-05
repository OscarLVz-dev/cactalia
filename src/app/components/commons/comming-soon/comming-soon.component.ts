import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'comming-soon-component',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigateByUrl("/catalogos");
  }

}

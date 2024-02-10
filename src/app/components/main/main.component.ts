import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
    /*Swal.fire({
      imageUrl: "https://drive.google.com/uc?id=16FZOinOImnOyX8ytLiDiQqxQ9J_mXPq5",
      imageWidth: '100%',
      backdrop: `#f7efecb5`,
      showConfirmButton: false,
      timer: 15000,
      timerProgressBar: true,
    });*/
  }

}

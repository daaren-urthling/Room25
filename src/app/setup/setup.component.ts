import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'r25-setup',
  templateUrl: './setup.component.html',
  styles: [`

    .container {
      height : 100%;
    }

    .setup-screen {
        background-image: url('assets/key-room.jpg');
        background-repeat: no-repeat;
        background-size: 100%;
        height: 100%;
        width:100%;
    }

   .setup-panel {
        width:700px;
   }

  `]
})
export class SetupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigateByUrl('/login');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'r25-header',
  templateUrl: './header.component.html',
  styles: [`
    .centered {
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }

    .icon {
       padding: 0 14px;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

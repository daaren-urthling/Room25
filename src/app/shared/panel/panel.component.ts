import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'r25-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() title : string;
  
  constructor() { }

  ngOnInit() {
  }

}

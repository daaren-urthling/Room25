import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'r25-panel',
  template: `
    <div>
      <div class="r25-title-bar">{{title}}</div>
      <md-card r25-layout="column">
        <ng-content></ng-content>
      </md-card>
    </div>
  `,
  styles: [`
   `]
})
export class PanelComponent implements OnInit {
  @Input() title : string;
  constructor() { }

  ngOnInit() {
  }

}

import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector:'[r25-layout]'
})
export class R25LayoutDirective{
  @Input('r25-layout') layout:string;
  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get direction(){
       return (this.layout === 'column') ? 'column':'row';
  }
}
import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector:'[r25-flex]'
})
export class R25FlexDirective{
    @Input('r25-flex') flex:string = '';

    @HostBinding('style.flex')
    get style(){
        return `${this.flex === '' ? '0':this.flex}%`;
    }
}
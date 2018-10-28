import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSwap]'
})
export class SwapDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

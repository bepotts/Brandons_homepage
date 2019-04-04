/**
 * Class is used to swap BodyItems on when the route changes.
 */

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSwap]'
})
export class SwapDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

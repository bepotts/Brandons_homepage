/**
 * Class encapsulates Body Components and its data.
 */

import { Type } from '@angular/core';

export class BodyItem {
  constructor(public component: Type<any>, public data: any) {}
}

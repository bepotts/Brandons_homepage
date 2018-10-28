import { Component, Input } from '@angular/core';

import { BodyComponent} from '../body.component';

@Component({
  templateUrl: '../section-body-html/about.html'
})

export class AboutComponent implements BodyComponent {
  @Input() data: any;
}

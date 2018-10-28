import { Component, Input } from '@angular/core';

import { BodyComponent} from '../body.component';

@Component({
  templateUrl: '../section-body-html/home.html'
})

export class HomeComponent implements BodyComponent {
  @Input() data: any;
}

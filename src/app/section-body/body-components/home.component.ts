import { Component, Input } from '@angular/core';

import { BodyComponent} from '../utils/body.component';

@Component({
  templateUrl: '../section-body-html/home/home.html',
  styleUrls: ['../section-body-html/home/home.css'],
})

export class HomeComponent implements BodyComponent {
  @Input() data: any;
}

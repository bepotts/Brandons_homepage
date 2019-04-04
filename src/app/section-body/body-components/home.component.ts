/**
 * Class represents a component that shows HTML correlated with the home
 * page.
 */
import { Component, Input } from '@angular/core';

import { BodyComponent} from '../utils/body.component';

@Component({
  templateUrl: '../section-body-html/home/home.html',
  styleUrls: ['../section-body-html/home/home.css'],
})

export class HomeComponent implements BodyComponent {
  @Input() data: any;
}

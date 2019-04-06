/**
 * Class represents a components that shows HTML correlated with the About
 * page.
 */
import { Component, Input } from '@angular/core';

import { BodyComponent} from '../utils/body.component';

@Component({
  templateUrl: '../section-body-html/about/about.html',
  styleUrls: ['../section-body-html/about/about.css'],
})

export class AboutComponent implements BodyComponent {
  @Input() data: any;
}

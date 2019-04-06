/**
 * Class represents a components that shows HTML correlated with the project
 * page.
 */
import { Component, Input } from '@angular/core';

import { BodyComponent } from '../utils/body.component';

@Component({
  templateUrl: '../section-body-html/experience/experience.html',
  styleUrls: ['../section-body-html/experience/experience.css'],
})

export class ExperienceComponent implements BodyComponent {
  @Input() data: any;
}

import { Component, Input } from '@angular/core';

import { BodyComponent } from '../utils/body.component';

@Component({
  templateUrl: '../section-body-html/experience.html'
})

export class ExperienceComponent implements BodyComponent {
  @Input() data: any;
}

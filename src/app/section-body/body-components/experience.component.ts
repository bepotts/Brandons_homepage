import { Component, Input } from '@angular/core';

import { BodyComponent } from '../body.component';

@Component({
  templateUrl: '../section-body-html/experience.html'
})

export class ExperienceComponent implements BodyComponent {
  @Input() data: any;
}

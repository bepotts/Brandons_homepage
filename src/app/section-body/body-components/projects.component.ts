import { Component, Input } from '@angular/core';

import { BodyComponent} from '../utils/body.component';

@Component({
  templateUrl: '../section-body-html/projects.html'
})

export class ProjectsComponent implements BodyComponent {
  @Input() data: any;
}

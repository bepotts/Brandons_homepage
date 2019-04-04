/**
 * Class represents a component that shows HTML correlated with the project
 * page.
 */
import { Component, Input } from '@angular/core';

import { BodyComponent} from '../utils/body.component';

@Component({
  templateUrl: '../section-body-html/projects/projects.html',
  styleUrls: ['../section-body-html/projects/projects.css'],
})

export class ProjectsComponent implements BodyComponent {
  @Input() data: any;
}

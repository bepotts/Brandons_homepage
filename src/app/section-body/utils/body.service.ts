import { Injectable } from '@angular/core';
import {BodyItem} from './body-item';
import {AboutComponent} from '../body-components/about.component';
import {ExperienceComponent} from '../body-components/experience.component';
import {HomeComponent} from '../body-components/home.component';
import {ProjectsComponent} from '../body-components/projects.component';

@Injectable()
export class BodyService {
  getBody() {
    return [
      new BodyItem(HomeComponent, {}),
      new BodyItem(AboutComponent, {}),
      new BodyItem(ExperienceComponent, {}),
      new BodyItem(ProjectsComponent, {}),
    ];
  }
}

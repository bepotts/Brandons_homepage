/**
 * Class gathers the separate body components.
 */

import {Injectable} from '@angular/core';

import {BodyItem} from './body-item';
import {AboutComponent} from '../body-components/about.component';
import {ExperienceComponent} from '../body-components/experience.component';
import {HomeComponent} from '../body-components/home.component';
import {ProjectsComponent} from '../body-components/projects.component';

@Injectable()
export class BodyService {

  getBody() {
    const obj = {};
    obj[''] = new BodyItem(HomeComponent, {});
    obj['about'] = new BodyItem(AboutComponent, {});
    obj['experience'] = new BodyItem(ExperienceComponent, {});
    obj['projects'] = new BodyItem(ProjectsComponent, {});
    return obj;
  }
}

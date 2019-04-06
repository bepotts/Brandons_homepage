/***
 * Tests the Router for the application.
 */

import {NavbarComponent} from '../app/navbar/navbar.component';
import {TestBed} from '@angular/core/testing';
import {SectionBodyComponent} from '../app/section-body/section-body.component';
import {FooterComponent} from '../app/footer/footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../app/app-routing.module';
import {Router} from '@angular/router';
import {AppComponent} from '../app/app.component';

describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule(({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [NavbarComponent, SectionBodyComponent, FooterComponent]
    }));
  });

  router = TestBed.get(Router);
  location = TestBed.get(Location);

  fixture = TestBed.createComponent(AppComponent);
  router.initialNavigation();
});

import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {SwapDirective} from './utils/swap.directive';
import {BodyItem} from './utils/body-item';
import {BodyService} from './utils/body.service';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-section-body',
  templateUrl: './section-body.component.html',
  styleUrls: ['./section-body.component.css'],
  providers: [BodyService]
})
// TODO make sure to use dependency injection
export class SectionBodyComponent implements OnInit, OnDestroy {

  @Input() components: {};
  @ViewChild(SwapDirective) bodyHost: SwapDirective;
  currentURL: Observable<UrlSegment[]>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private bodyService: BodyService, route: ActivatedRoute) {
    this.components = bodyService.getBody();
    this.currentURL = route.url;
  }

  ngOnInit() {
    this.loadComponent();
    // this.components = this.bodyService.getBody();
  }

  ngOnDestroy() {
    // TODO This may or may not be needed
    // clearInterval(this.interval);
  }

  loadComponent() {

    let currentRoute: String;
    this.currentURL.subscribe(value => currentRoute = value.toString());

    const bodyItem = this.components[currentRoute];
    // TODO need to come up with a default view
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(bodyItem.component);
    const viewContainerRef = this.bodyHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = bodyItem.data;
  }

}

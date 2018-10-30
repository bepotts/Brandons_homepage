import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

// import {AboutComponent} from './body-components/about.component';
import {SwapDirective} from './utils/swap.directive';
import {BodyItem} from './utils/body-item';
import {BodyService} from './utils/body.service';

@Component({
  selector: 'app-section-body',
  templateUrl: './section-body.component.html',
  styleUrls: ['./section-body.component.css'],
  providers: [BodyService]
})
// TODO make sure to use dependency injection
export class SectionBodyComponent implements OnInit, OnDestroy {

  @Input() components: BodyItem[];
  @ViewChild(SwapDirective) bodyHost: SwapDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private bodyService: BodyService) {
    this.components = bodyService.getBody();
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
    console.log(`This is the body Items Array: ` + this.components);
    const bodyItem = this.components[0];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(bodyItem.component);
    const viewContainerRef = this.bodyHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = bodyItem.data;
  }

}

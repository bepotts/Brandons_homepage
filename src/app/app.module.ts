import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionBodyComponent } from './section-body/section-body.component';
import { FooterComponent } from './footer/footer.component';
import { SwapDirective } from './section-body/utils/swap.directive';
import { AboutComponent } from './section-body/body-components/about.component';
import { ExperienceComponent } from './section-body/body-components/experience.component';
import { HomeComponent } from './section-body/body-components/home.component';
import { ProjectsComponent } from './section-body/body-components/projects.component';
import { BodyService } from './section-body/utils/body.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionBodyComponent,
    FooterComponent,
    SwapDirective,
    AboutComponent,
    ExperienceComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  entryComponents: [
    AboutComponent,
    ExperienceComponent,
    HomeComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BodyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

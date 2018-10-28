import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionBodyComponent } from './section-body/section-body.component';
import { FooterComponent } from './footer/footer.component';
import { SwapDirective } from './section-body/swap.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionBodyComponent,
    FooterComponent,
    SwapDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

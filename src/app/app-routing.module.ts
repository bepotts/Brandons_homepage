import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SectionBodyComponent} from './section-body/section-body.component';


// Exporting so routes can be tested.
export const routes: Routes = [
  {path: '', component: SectionBodyComponent},
  {path: 'about', component: SectionBodyComponent},
  {path: 'experience', component: SectionBodyComponent},
  {path: 'projects', component: SectionBodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

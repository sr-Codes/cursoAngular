import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPagesComponent } from './landing-pages.component';

const routes: Routes = [
  { path: '', component: LandingPagesComponent, children: [
    { path: '', loadChildren: '../access/access.module#AccessModule' },
    { path: '', loadChildren: '../products/products.module#ProductsModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPagesRoutingModule { }

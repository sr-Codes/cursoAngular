import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPagesComponent } from './landing-pages.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
  { path: '', component: LandingPagesComponent, children: [
    { path: '', loadChildren: '../access/access.module#AccessModule' },
    { path: '', loadChildren: '../products/products.module#ProductsModule' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPagesRoutingModule { }

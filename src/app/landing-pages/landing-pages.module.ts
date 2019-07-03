import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPagesRoutingModule } from './landing-pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { LandingPagesComponent } from './landing-pages.component';

@NgModule({
  declarations: [HeaderComponent, LandingPagesComponent],
  imports: [
    CommonModule,
    LandingPagesRoutingModule
  ]
})
export class LandingPagesModule { }

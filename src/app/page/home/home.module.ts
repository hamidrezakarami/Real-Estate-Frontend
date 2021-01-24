import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [HomeComponent, HomeCardComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}

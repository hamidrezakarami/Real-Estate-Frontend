import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [HomeComponent, HomeCardComponent, HomeDetailComponent, SearchBarComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule,Ng5SliderModule],
})
export class HomeModule {}

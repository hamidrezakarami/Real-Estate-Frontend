import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { MaterialModule } from '../shared/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [MainPageComponent, ToolbarComponent, NavbarComponent],
  imports: [CommonModule, MainPageRoutingModule, MaterialModule],
})
export class MainPageModule {}

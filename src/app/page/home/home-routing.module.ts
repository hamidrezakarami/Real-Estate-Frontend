import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: HomeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

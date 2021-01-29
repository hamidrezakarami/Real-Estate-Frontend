import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../page/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../page/account/account.module').then((m) => m.AccountModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../page/contact/contact.module').then((m) => m.ContactModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}

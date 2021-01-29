import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  { path: 'creatacc', component: CreatAccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}

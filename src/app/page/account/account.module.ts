import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatAccountComponent } from './creat-account/creat-account.component';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreatAccountComponent, AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccountModule {}

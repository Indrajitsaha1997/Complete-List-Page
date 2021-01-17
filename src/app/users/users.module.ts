import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { GenericFilterPipe } from '../pipes/generic-filter.pipe';
import { NullReplacePipe } from '../pipes/null-replace.pipe';
@NgModule({
  declarations: [
    GenericFilterPipe, 
    NullReplacePipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    GenericFilterPipe, 
    NullReplacePipe
  ]
})
export class SharedModule { }

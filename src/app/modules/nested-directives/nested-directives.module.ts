import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedDirectivesRoutingModule } from './nested-directives-routing.module';
import { NestedDirectivesComponent } from './nested-directives.component';


@NgModule({
  declarations: [NestedDirectivesComponent],
  imports: [
    CommonModule,
    NestedDirectivesRoutingModule
  ]
})
export class NestedDirectivesModule { }

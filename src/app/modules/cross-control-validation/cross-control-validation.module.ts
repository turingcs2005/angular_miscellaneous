import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrossControlValidationRoutingModule } from './cross-control-validation-routing.module';
import { CrossControlValidationComponent } from './cross-control-validation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CrossControlValidationComponent],
  imports: [
    CommonModule,
    CrossControlValidationRoutingModule,
    SharedModule
  ]
})
export class CrossControlValidationModule { }

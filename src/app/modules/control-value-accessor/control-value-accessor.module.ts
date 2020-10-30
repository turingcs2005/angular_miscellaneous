import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlValueAccessorRoutingModule } from './control-value-accessor-routing.module';
import { ControlValueAccessorComponent } from './control-value-accessor.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ControlValueAccessorComponent, StarRatingComponent],
  imports: [
    CommonModule,
    ControlValueAccessorRoutingModule,
    SharedModule
  ]
})
export class ControlValueAccessorModule { }

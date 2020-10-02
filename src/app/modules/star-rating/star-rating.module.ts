import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRatingRoutingModule } from './star-rating-routing.module';
import { StarRatingComponent } from './star-rating.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [StarRatingComponent],
  imports: [
    CommonModule,
    StarRatingRoutingModule,
    SharedModule
  ]
})
export class StarRatingModule { }

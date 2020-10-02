import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarRatingComponent } from './star-rating.component';

const routes: Routes = [{ path: '', component: StarRatingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarRatingRoutingModule { }

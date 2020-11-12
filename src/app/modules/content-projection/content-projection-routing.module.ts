import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentProjectionComponent } from './content-projection.component';

const routes: Routes = [{ path: '', component: ContentProjectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentProjectionRoutingModule { }

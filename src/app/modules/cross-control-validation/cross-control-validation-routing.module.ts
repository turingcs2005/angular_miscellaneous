import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrossControlValidationComponent } from './cross-control-validation.component';

const routes: Routes = [{ path: '', component: CrossControlValidationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrossControlValidationRoutingModule { }

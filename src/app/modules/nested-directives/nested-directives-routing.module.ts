import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NestedDirectivesComponent } from './nested-directives.component';

const routes: Routes = [{ path: '', component: NestedDirectivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedDirectivesRoutingModule { }

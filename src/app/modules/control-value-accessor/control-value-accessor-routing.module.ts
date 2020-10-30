import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlValueAccessorComponent } from './control-value-accessor.component';

const routes: Routes = [{ path: '', component: ControlValueAccessorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlValueAccessorRoutingModule { }

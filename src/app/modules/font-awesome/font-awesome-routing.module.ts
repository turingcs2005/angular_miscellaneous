import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeComponent } from './font-awesome.component';

const routes: Routes = [{ path: '', component: FontAwesomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontAwesomeRoutingModule { }

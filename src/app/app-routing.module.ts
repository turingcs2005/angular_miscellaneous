import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'star-rating', loadChildren: () => import('./modules/star-rating/star-rating.module').then(m => m.StarRatingModule) },
  { path: 'shared-form', loadChildren: () => import('./modules/shared-form/shared-form.module').then(m => m.SharedFormModule) },
  { path: 'cross-control-validation', loadChildren: () => import('./modules/cross-control-validation/cross-control-validation.module').then(m => m.CrossControlValidationModule) },
  { path: 'control-value-accessor', loadChildren: () => import('./modules/control-value-accessor/control-value-accessor.module').then(m => m.ControlValueAccessorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

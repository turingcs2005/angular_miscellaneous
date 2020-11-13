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
  { path: 'control-value-accessor', loadChildren: () => import('./modules/control-value-accessor/control-value-accessor.module').then(m => m.ControlValueAccessorModule) },
  { path: 'content-projection', loadChildren: () => import('./modules/content-projection/content-projection.module').then(m => m.ContentProjectionModule) },
  { path: 'font-awesome', loadChildren: () => import('./modules/font-awesome/font-awesome.module').then(m => m.FontAwesomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

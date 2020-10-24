import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'star-rating', loadChildren: () => import('./modules/star-rating/star-rating.module').then(m => m.StarRatingModule) },
  { path: 'shared-form', loadChildren: () => import('./modules/shared-form/shared-form.module').then(m => m.SharedFormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

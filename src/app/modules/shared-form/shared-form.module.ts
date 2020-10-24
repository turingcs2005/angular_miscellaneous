import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedFormRoutingModule } from './shared-form-routing.module';
import { SharedFormComponent } from './shared-form.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [SharedFormComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedFormRoutingModule,
    SharedModule
  ]
})
export class SharedFormModule { }

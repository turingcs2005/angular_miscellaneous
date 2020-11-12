import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeRoutingModule } from './font-awesome-routing.module';
import { FontAwesomeComponent } from './font-awesome.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FontAwesomeComponent],
  imports: [
    CommonModule,
    FontAwesomeRoutingModule,
    SharedModule
  ]
})
export class FontAwesomeModule { }

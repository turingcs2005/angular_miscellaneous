import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectionComponent } from './content-projection.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ContentProjectionComponent, ChildComponent ],
  imports: [
    CommonModule,
    ContentProjectionRoutingModule,
    SharedModule
  ]
})
export class ContentProjectionModule { }

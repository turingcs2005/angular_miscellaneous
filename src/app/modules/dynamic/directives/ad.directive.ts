import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]'
})
export class AdDirective {

  constructor(
    public ViewContainerRef: ViewContainerRef
  ) { }

}

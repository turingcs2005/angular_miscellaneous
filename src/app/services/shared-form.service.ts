import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedFormService {

  today = new Date();

  constructor(
    private fb: FormBuilder
  ) { }

  sharedForm(): FormGroup {
    const fg = this.fb.group({
      name: ['', Validators.required],
      DoR: [null, Validators.required]
    });

    fg.get('DoR').setValue(this.today);

    return fg;
  }

}

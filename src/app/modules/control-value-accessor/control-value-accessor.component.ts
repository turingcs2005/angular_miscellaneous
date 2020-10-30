import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss']
})
export class ControlValueAccessorComponent implements OnInit {

  myForm: FormGroup;
  starForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [null, Validators.required],
      stars: [null, [Validators.required, Validators.pattern(/^[0-5]$/)]]
    });

    this.starForm = this.fb.group({
      name: [null, Validators.required],
      stars: [null, Validators.required]
    });
  }

  onSubmitMyForm() {
    console.log('My form submitted!');
    console.log(this.myForm.value);
  }

  onSubmitStarForm() {
    console.log('Star form submitted!');
    console.log(this.starForm.value);
  }

}

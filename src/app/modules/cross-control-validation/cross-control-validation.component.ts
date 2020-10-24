import { Component, OnInit } from '@angular/core';
import { CrossControlValidatorService } from 'src/app/services/cross-control-validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cross-control-validation',
  templateUrl: './cross-control-validation.component.html',
  styleUrls: ['./cross-control-validation.component.scss']
})
export class CrossControlValidationComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cvs: CrossControlValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    },
    {validator: [this.cvs.validator()]});
  }

  onSubmit() {
    console.log('Form submitted to database!');
  }

}

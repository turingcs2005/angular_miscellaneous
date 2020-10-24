import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedFormService } from 'src/app/services/shared-form.service';

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.scss']
})
export class SharedFormComponent implements OnInit {

  form1: FormGroup = null;
  form2: FormGroup = null;

  constructor(
    private fb: FormBuilder,
    private sharedFormService: SharedFormService
  ) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      header: this.sharedFormService.sharedForm(),
      hobby: [null]
    });

    this.form2 = this.fb.group({
      header: this.sharedFormService.sharedForm(),
      spouse: [null]
    })
  }

  onSubmit1() {
    console.log('Form1 submitted to database!');
  }

  onSubmit2() {
    console.log('Form2 submitted to database!');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-font-awesome',
  templateUrl: './font-awesome.component.html',
  styleUrls: ['./font-awesome.component.css']
})
export class FontAwesomeComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [null],
      email: [null]
    });
  }

  onSubmit() {
    console.log('Form submitted!');
  }
  
}

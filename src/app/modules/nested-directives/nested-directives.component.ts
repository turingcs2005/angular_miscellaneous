import { Component, OnInit } from '@angular/core';
import { students } from './students';

@Component({
  selector: 'app-nested-directives',
  templateUrl: './nested-directives.component.html',
  styleUrls: ['./nested-directives.component.css']
})
export class NestedDirectivesComponent implements OnInit {

  students = students;

  constructor() { }

  ngOnInit(): void {
  }

}

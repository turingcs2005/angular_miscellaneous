import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() parentGroup: FormGroup;
  @Input() header: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}

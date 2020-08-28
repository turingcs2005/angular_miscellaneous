import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, menu1 } from 'src/app/app-data/menu-list';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() title: string;
  menu1: MenuItem[] = menu1;

  constructor() { }

  ngOnInit(): void {
  }

}

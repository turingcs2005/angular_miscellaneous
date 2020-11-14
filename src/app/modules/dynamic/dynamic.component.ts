import { Component, OnInit } from '@angular/core';
import { AdService } from './services/ad.service';
import { AdItem} from './data/ad-item';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  ads: AdItem[];

  constructor(
    private adService: AdService
  ) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}

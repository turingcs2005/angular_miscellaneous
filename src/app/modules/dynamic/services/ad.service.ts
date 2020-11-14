import { Injectable } from '@angular/core';

import { JobAdComponent } from '../job-ad/job-ad.component';
import { ProfileComponent } from '../profile/profile.component';

import { AdItem } from '../data/ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  getAds() {
    return [
      new AdItem(ProfileComponent, { name: 'Claire', bio: 'A clever little kitten!' }),
      new AdItem(ProfileComponent, { name: 'Maggie', bio: 'A cute girl with glasses!' }),
      new AdItem(JobAdComponent, { headline: 'Hiring a driver!', body: 'Submit your resume today!' }),
      new AdItem(JobAdComponent, { headline: '3 Openings for cashier!', body: 'No prior experience needed!'})
    ];
  }
  constructor() { }
}

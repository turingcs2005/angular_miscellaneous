import { TestBed } from '@angular/core/testing';

import { SharedFormService } from './shared-form.service';

describe('SharedFormService', () => {
  let service: SharedFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

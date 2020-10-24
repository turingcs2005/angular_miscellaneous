import { TestBed } from '@angular/core/testing';

import { CrossControlValidatorService } from './cross-control-validator.service';

describe('CrossControlValidatorService', () => {
  let service: CrossControlValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrossControlValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

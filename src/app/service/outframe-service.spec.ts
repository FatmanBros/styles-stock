import { TestBed } from '@angular/core/testing';

import { OutframeService } from './outframe-service';

describe('OutframeService', () => {
  let service: OutframeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutframeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

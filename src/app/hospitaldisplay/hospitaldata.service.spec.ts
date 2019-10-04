import { TestBed } from '@angular/core/testing';

import { HospitaldataService } from './hospitaldata.service';

describe('HospitaldataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HospitaldataService = TestBed.get(HospitaldataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EnvConfigurationService } from './envconfigurationservice.service';

describe('EnvconfigurationserviceService', () => {
  let service: EnvConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

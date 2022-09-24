import { TestBed } from '@angular/core/testing';

import { ServicecontrollerService } from './servicecontroller.service';

describe('ServicecontrollerService', () => {
  let service: ServicecontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

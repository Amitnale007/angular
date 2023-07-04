import { TestBed } from '@angular/core/testing';

import { MoshServiceService } from './mosh-service.service';

describe('MoshServiceService', () => {
  let service: MoshServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoshServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

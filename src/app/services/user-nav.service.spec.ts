import { TestBed } from '@angular/core/testing';

import { UserNavService } from './user-nav.service';

describe('UserNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserNavService = TestBed.get(UserNavService);
    expect(service).toBeTruthy();
  });
});

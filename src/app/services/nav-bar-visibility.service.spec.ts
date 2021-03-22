import { TestBed } from '@angular/core/testing';

import { NavBarVisibilityService } from './nav-bar-visibility.service';

describe('NavBarVisibilityService', () => {
  let service: NavBarVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavBarVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

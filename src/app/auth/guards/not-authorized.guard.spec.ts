import { TestBed } from '@angular/core/testing';

import { NotAuthorizedGuard } from './not-authorized.guard';

describe('NotAuthorizedGuard', () => {
  let guard: NotAuthorizedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotAuthorizedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

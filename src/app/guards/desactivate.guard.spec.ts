import { TestBed } from '@angular/core/testing';

import { DesactivateGuard } from './desactivate.guard';

describe('DesactivateGuard', () => {
  let guard: DesactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DesactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

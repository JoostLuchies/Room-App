import { TestBed } from '@angular/core/testing';

import { Dislike } from './dislike.service';

describe('Dislike', () => {
  let service: Dislike;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dislike);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

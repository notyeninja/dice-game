import { TestBed } from '@angular/core/testing';

import { DiceAnimateService } from './dice-animate.service';

describe('DiceAnimateService', () => {
  let service: DiceAnimateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceAnimateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

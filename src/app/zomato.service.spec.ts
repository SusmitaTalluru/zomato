import { TestBed, inject } from '@angular/core/testing';

import { ZomatoService } from './zomato.service';

describe('ZomatoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZomatoService]
    });
  });

  it('should be created', inject([ZomatoService], (service: ZomatoService) => {
    expect(service).toBeTruthy();
  }));
});

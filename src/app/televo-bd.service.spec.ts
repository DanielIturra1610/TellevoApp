import { TestBed } from '@angular/core/testing';

import { TelevoBDService } from './televo-bd.service';

describe('TelevoBDService', () => {
  let service: TelevoBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelevoBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

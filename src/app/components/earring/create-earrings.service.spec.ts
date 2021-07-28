import { TestBed } from '@angular/core/testing';

import { CreateEarringsService } from './create-earrings.service';

describe('CreateEarringsService', () => {
  let service: CreateEarringsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateEarringsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NewsParsingService } from './news-parsing.service';

describe('NewsParsingService', () => {
  let service: NewsParsingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsParsingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

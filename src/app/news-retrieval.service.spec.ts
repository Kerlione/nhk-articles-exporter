import { TestBed } from '@angular/core/testing';

import { NewsRetrievalService } from './news-retrieval.service';

describe('NewsRetrievalServiceService', () => {
  let service: NewsRetrievalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsRetrievalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

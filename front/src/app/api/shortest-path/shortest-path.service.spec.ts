import { TestBed } from '@angular/core/testing';

import { ApiShortestPathService } from './shortest-path.service';

describe('ApiShortestPathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiShortestPathService = TestBed.get(ApiShortestPathService);
    expect(service).toBeTruthy();
  });
});

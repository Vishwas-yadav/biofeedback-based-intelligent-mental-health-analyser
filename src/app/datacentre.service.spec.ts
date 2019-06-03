import { TestBed } from '@angular/core/testing';

import { DatacentreService } from './datacentre.service';

describe('DatacentreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatacentreService = TestBed.get(DatacentreService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NguStorageService } from './ngu-storage.service';

describe('NguStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NguStorageService = TestBed.get(NguStorageService);
    expect(service).toBeTruthy();
  });
});

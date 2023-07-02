import { TestBed } from '@angular/core/testing';

import { OldDirectoryService } from './old-directory.service';

describe('OldDirectoryService', () => {
  let service: OldDirectoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldDirectoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

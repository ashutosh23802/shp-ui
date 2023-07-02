import { TestBed } from '@angular/core/testing';

import { NewDirectoryService } from './new-directory.service';

describe('NewDirectoryService', () => {
  let service: NewDirectoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewDirectoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

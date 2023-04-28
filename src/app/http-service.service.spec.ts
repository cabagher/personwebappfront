import { TestBed } from '@angular/core/testing';

import { PersonHttpService } from './http-service';

describe('HttpServiceService', () => {
  let service: PersonHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

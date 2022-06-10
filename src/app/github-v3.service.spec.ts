import { TestBed } from '@angular/core/testing';

import { GithubV3Service } from './github-v3.service';

describe('GithubV3Service', () => {
  let service: GithubV3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubV3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

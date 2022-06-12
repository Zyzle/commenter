import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { GithubV3Service } from './github-v3.service';

describe('GithubV3Service', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: GithubV3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(GithubV3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

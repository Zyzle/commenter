import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { GithubV3Service } from './github-v3.service';
import { GithubComment } from './commenter.types';

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

  it('should query the github api for a given repository issues comments', () => {
    const testData: GithubComment[] = [{

    } as GithubComment];
    const owner = 'anOwner';
    const repo = 'aRepo';
    const issueNumber = 100;
    const URL_BASE = 'https://api.github.com/repos/';

    const testUrl = new URL(
      `${owner}/${repo}/issues/${issueNumber}/comments`,
      URL_BASE
    );

    service.getComments(owner, repo, issueNumber)
      .subscribe(data => {
        expect(data).toEqual(testData)
      })

    const req = httpTestingController.expectOne(testUrl.toString());

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });
});

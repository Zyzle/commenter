import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubComment } from './commenter.types';

const URL_BASE = 'https://api.github.com/repos/'

@Injectable({
  providedIn: 'root'
})
export class GithubV3Service {

  constructor(private httpClient: HttpClient) { }

  getComments(owner: string, repo: string, issueNumber: number): Observable<GithubComment[]> {
    const commentsUrl = new URL(`${owner}/${repo}/issues/${issueNumber}/comments`, URL_BASE)
    return this.httpClient.get<GithubComment[]>(commentsUrl.toString());
  }
}

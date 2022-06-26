import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';

import { GithubComment } from './commenter.types';

const URL_BASE = 'https://api.github.com/repos/'

@Injectable({
  providedIn: 'root'
})
export class GithubV3Service {
  
  private _comments: BehaviorSubject<GithubComment[]> = new BehaviorSubject<GithubComment[]>([]);
  private _test: BehaviorSubject<Object[]> = new BehaviorSubject<Object[]>([]);

  constructor(private httpClient: HttpClient) { }

  get comments(): Observable<GithubComment[]> {
    return this._comments.asObservable();
  }

  get test(): Observable<Object[]> {
    return this._test.asObservable();
  }

  getComments(owner: string, repo: string, issueNumber: number) {
    const commentsUrl = new URL(`${owner}/${repo}/issues/${issueNumber}/comments`, URL_BASE);
    this.httpClient.get<GithubComment[]>(commentsUrl.toString())
    .pipe(
      catchError(e => [])
    )
    .subscribe(comments => {
      this._comments.next(comments)
    });
  }

  postComment(owner: string, repo: string, issueNumber: number, commentBody: string, token: string) {
    const commentsUrl = new URL(`${owner}/${repo}/issues/${issueNumber}/comments`, URL_BASE);
    this.httpClient.post<GithubComment>(
      commentsUrl.toString(),
      {
        body: commentBody,
      },
      {
        headers: {
          'accept': 'application/vnd.github.v3+json',
          'authorization': `token ${token}`
        },
      }
    ).pipe(
      catchError((e) => {
        return of({} as GithubComment);
      })
    ).subscribe(_ => this.getComments(owner, repo, issueNumber));
  }

  addReaction(owner: string, repo: string, issueNumber: number, token: string, comment: number, reaction: string) {
    const commentsUrl = new URL(`${owner}/${repo}/issues/comments/${comment}/reactions`, URL_BASE);
    this.httpClient.post(
      commentsUrl.toString(),
      {
        content: reaction,
      },
      {
        headers: {
          'accept': 'application/vnd.github.v3+json',
          'authorization': `token ${token}`
        },
      }
    ).pipe(
      catchError(_ => of({}))
    ).subscribe(_ => this.getComments(owner, repo, issueNumber));
  }

}

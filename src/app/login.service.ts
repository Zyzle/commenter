import { Injectable } from '@angular/core';

import { BehaviorSubject, catchError, map, of, switchMap, tap } from 'rxjs';
import { parseUrl, stringifyUrl } from 'query-string';

import { generateUUID } from './utils';
import { HttpClient } from '@angular/common/http';
import { LynxResponse } from './commenter.types';

const STATE_TOKEN = 'state';
const GH_TOKEN = 'ghToken';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loggedIn = new BehaviorSubject<string>('');
  private state: string | null = null;

  constructor(private httpClient: HttpClient) {
    this.state = localStorage.getItem(STATE_TOKEN);
    this.loggedIn.next(localStorage.getItem(GH_TOKEN) ?? '');
  }

  startup(lynxApp: string) {
    const currentUrl = parseUrl(window.location.href);

    // assume we've been redirected to
    if (currentUrl.query['state'] && currentUrl.query['code']) {
      // check no state shenanigans
      if (currentUrl.query['state'] === this.state) {
        this.lynxAuthorize(lynxApp, currentUrl.query['code'] as string);
      } else {
        // something went wrong here need to handle errors
      }
      const oldhash = window.location.hash;
      const cleanUrl = this.getCleanURL(window.location.href);
      const newUrl = cleanUrl + oldhash;
      window.history.replaceState(null, '', newUrl);  
    }
  }

  lynxAuthorize(lynxApp: string, code: string) {
    // request token passing code
    const lynxResponse = this.httpClient
      .get<LynxResponse>(`https://${lynxApp}/token`, {
        params: {
          code: code ? code : '',
        },
      })
      .pipe(
        catchError((e) => of({ access_token: '' })),
        tap((resp) => {
          localStorage.setItem(GH_TOKEN, resp.access_token);
        }),
        map((res) => res.access_token)
      )
      .subscribe((res) => {
        this.loggedIn.next(res);
      });
  }

  getCleanURL(fullURL: string): string {
    const noHash = fullURL.split('#')[0] || '';
    const cleanURL = noHash.split('?')[0] || '';
    return cleanURL;
  };

  clearLogin() {
    localStorage.removeItem(GH_TOKEN);
    this.loggedIn.next('');
  }

  redirectToGh(clientId: string) {
    const currentHref = window.location.href;
    const state = generateUUID();
    localStorage.setItem(STATE_TOKEN, state);
    const authUrl = stringifyUrl({
      url: 'https://github.com/login/oauth/authorize',
      query: {
        client_id: clientId,
        redirect_uri: currentHref,
        state: state,
      },
    });

    window.location.href = authUrl;
  }
}

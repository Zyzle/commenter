import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { parseUrl, stringifyUrl } from 'query-string';

import { generateUUID } from './utils';

const STATE_TOKEN = 'state';
const GH_TOKEN = 'ghToken';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn = new BehaviorSubject<string|null>(null);
  private state: string | null = null;

  constructor() {
    this.state = localStorage.getItem(STATE_TOKEN);
    this.loggedIn.next(localStorage.getItem(GH_TOKEN)); 
  }

  clearLogin() {
    localStorage.removeItem(GH_TOKEN);
    this.loggedIn.next(null);
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

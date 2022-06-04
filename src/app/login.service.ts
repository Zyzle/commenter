import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { generateUUID } from './utils';

const STATE_TOKEN = 'state';
const GH_TOKEN = 'ghToken';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private ghToken = new BehaviorSubject<string|null>(null);
  private state: string | null = null;

  constructor() {
    this.state = localStorage.getItem(STATE_TOKEN);
    this.ghToken.next(localStorage.getItem(GH_TOKEN)); 
  }

  clearLogin() {
    localStorage.removeItem(GH_TOKEN);
    this.ghToken.next(null);
  }

  redirectToGh(clientId: string) {
    const currentHref = window.location.href;
    const state = generateUUID();
    localStorage.setItem(STATE_TOKEN, state);
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${currentHref}&state=${state}`;
  }
}

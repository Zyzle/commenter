import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LoginService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('clearLogin', () => {
    it(`should remove the 'ghToken' item from local storage`, () => {
      localStorage.setItem('ghToken', '1234abcd');
      service.clearLogin();
      expect(localStorage.getItem('ghToken')).toBeNull();
    });
  });

  describe('getCleanUrl', () => {
    it('should remove hash and query from the url', () => {
      const testUrl = 'http://example.com/someplace?somequery=6#andhash';
      const cleanUrl = service.getCleanURL(testUrl);
      expect(cleanUrl).toEqual('http://example.com/someplace');
    });
  });
});

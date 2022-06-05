import { Component, Input, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() clientId!: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginClick() {
    console.log('loginClick');
    this.loginService.redirectToGh('123456');
  }

}

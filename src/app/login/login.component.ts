import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() clientId!: string;
  @Output() loginClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commenter',
  templateUrl: './commenter.component.html',
  styleUrls: ['./commenter.component.scss']
})
export class CommenterComponent implements OnInit {

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
  }

}

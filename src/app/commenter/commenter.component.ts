import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commenter',
  templateUrl: './commenter.component.html',
  styleUrls: ['./commenter.component.scss']
})
export class CommenterComponent implements OnInit {

  @Input() clientId!: string;
  @Input() lynxApp!: string;
  @Input() issueNumber!: number;
  @Input() ghRepo!: string;


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-commenter',
  templateUrl: './commenter.component.html',
  styleUrls: ['./commenter.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CommenterComponent implements OnInit {

  @Input() clientId!: string;
  @Input() lynxApp!: string;
  @Input() issueNumber!: number;
  @Input() ghRepo!: string;
  @Input() owner!: string;


  constructor() { }

  ngOnInit(): void {
  }

}

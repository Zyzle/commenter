import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Chevron, GithubReaction } from '../commenter.icons';

@Component({
  selector: 'app-new-reaction',
  templateUrl: './new-reaction.component.html',
  styleUrls: ['./new-reaction.component.scss']
})
export class NewReactionComponent implements OnInit {

  @Output() addReaction = new EventEmitter<string>();

  reactions = Object.keys(GithubReaction);
  entered = false;
  chevronIcon = Chevron;

  constructor() { }

  ngOnInit(): void {
  }

  enter() {
    this.entered = true;
  }

  leave() {
    this.entered = false;
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GithubReaction } from '../commenter.icons';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss']
})
export class ReactionComponent implements OnInit {

  @Input() reaction!: string;
  @Input() count!: number;
  @Output() addReaction = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  get reactionSVG() {
    return GithubReaction[this.reaction as keyof typeof GithubReaction];
  }

}

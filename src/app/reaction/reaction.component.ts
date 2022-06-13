import { Component, Input, OnInit } from '@angular/core';
import { GithubReaction, GithubReactions } from '../commenter.types';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss']
})
export class ReactionComponent implements OnInit {

  @Input() reaction!: string;
  @Input() count!: number;

  constructor() { }

  ngOnInit(): void {
  }

  get reactionSVG() {
    return GithubReaction[this.reaction as keyof typeof GithubReaction];
  }

}

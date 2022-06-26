import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { marked } from 'marked';
import { GithubReaction, GithubReactions } from '../commenter.types';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  @Input() avatar!: string;
  @Input() userName!: string;
  @Input() commentDate!: string;
  @Input() id!: number;
  @Input() content!: string;
  @Input() reactions!: GithubReactions;
  @Output() addReaction = new EventEmitter<{reaction: string, comment: number}>();

  constructor() {}

  ngOnInit(): void {
  }

  get formattedDate() {
    if (!this.commentDate) return;
    return formatDistanceToNow(parseISO(this.commentDate), { addSuffix: true });
  }

  get parsedComment() {
    if (this.content) {
      return marked.parse(this.content);
    }
    return '';
  }

  get commentReactions(): {count: number, reaction: string}[] {
    if (!this.reactions) return [];
    const reactions = Object.keys(GithubReaction).map(k => ({
      reaction: k,
      count: this.reactions[k as keyof GithubReactions] as number,
    })).filter(x => x.count);

    return reactions;
  }
}

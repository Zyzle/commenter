import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { marked } from 'marked';
import hljs from 'highlight.js/lib/common';
import { Observable, tap } from 'rxjs';
import { GithubV3Service } from '../github-v3.service';
import { LoginService } from '../login.service';
import { GithubComment } from '../commenter.types';

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

  issueComments: Observable<GithubComment[]>;

  constructor(public loginService: LoginService, public githubService: GithubV3Service) {
    this.issueComments = new Observable();
  }
  
  ngOnInit(): void {
    this.issueComments = this.githubService.getComments(this.owner, this.ghRepo, this.issueNumber);

    hljs.registerAliases('js', { languageName: 'javascript' });

    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
    });
  }

  reloadComments() {
    console.log('comments reload');
  }

  postComment(comment: any) {
    console.log('post comment', comment);
  }

}

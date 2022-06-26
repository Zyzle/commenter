import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { marked } from 'marked';
import hljs from 'highlight.js/lib/common';
import { GithubV3Service } from '../github-v3.service';
import { LoginService } from '../login.service';

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

  constructor(public loginService: LoginService, public githubService: GithubV3Service) {
  }
  
  ngOnInit(): void {
    this.githubService.getComments(this.owner, this.ghRepo, this.issueNumber);

    this.loginService.startup(this.lynxApp);

    hljs.registerAliases('js', { languageName: 'javascript' });

    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
    });
  }

  doLogin() {
    this.loginService.redirectToGh(this.clientId);
  }

  reloadComments() {
    console.log('comments reload');
  }

  postComment(comment: string) {
    this.githubService.postComment(this.owner, this.ghRepo, this.issueNumber, comment, this.loginService.loggedIn.getValue());
  }

}

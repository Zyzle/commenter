import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CommentsForIssueGQL } from '../../graphql/generated';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() ghRepo!: string;
  @Input() owner!: string;
  @Input() issueNumber!: number;
  @Input() cursor?: string;

  comments?: Observable<{
    avatar?: string,
    userName?: string,
    commentDate?: Date,
    comment?: string
  }[] | undefined>;

  constructor(private commentsForIssueGQL: CommentsForIssueGQL) {}

  ngOnInit(): void {
    this.comments = this.commentsForIssueGQL
      .watch({
        repositoryName: this.ghRepo,
        owner: this.owner,
        issueNumber: this.issueNumber,
      })
      .valueChanges.pipe(
        map((result) => result.data.repository),
        map((repository) => repository?.issue?.comments.edges),
        map((edges) =>
          edges?.map((edge) => ({
            avatar: edge?.node?.author?.avatarUrl,
            userName: edge?.node?.author?.login,
            commentDate: edge?.node?.createdAt,
            comment: edge?.node?.bodyHTML,
          }))
        )
      );
  }
}

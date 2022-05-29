import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';
import { IssuesQuery, Node } from '../commenter.types';

const COMMENTS_FOR_ISSUE_NO = gql`
  query GetRepository($repo: String!, $owner: String!, $issue: Int!) {
    repository(name: $repo, owner: $owner) {
      issue(number: $issue) {
        comments(first: 100) {
          edges {
            node {
              author {
                avatarUrl
                login
                url
              }
              bodyHTML
              createdAt
              id
              viewerDidAuthor
              reactions(first: 100) {
                edges {
                  node {
                    content
                    id
                  }
                }
              }
              reactionGroups {
                content
              }
            }
          }
        }
      }
    }
  }
`;

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {

  comments!: Observable<{
    avatar: string,
    userName: string,
    commentDate: Date,
    comment: string
  }[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.comments = this.apollo
      .watchQuery({
        query: COMMENTS_FOR_ISSUE_NO,
        variables: {
          repo: 'zyzle.github.io',
          owner: 'Zyzle',
          issue: 7,
        },
      })
      .valueChanges.pipe(
        tap((result: any) => console.log(result.data)),
        map((result: any) => result.data),
        map((result: IssuesQuery) => result.repository.issue.comments.edges),
        map((edges) => edges.map((edge: Node) => ({
          avatar: edge.node.author.avatarUrl,
          userName: edge.node.author.login,
          commentDate: edge.node.createdAt,
          comment: edge.node.bodyHTML,
        })))
      )
  }

  ngOnDestroy() {
    
  }

}

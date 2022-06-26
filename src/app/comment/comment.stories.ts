import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { SafePipe } from "../safe.pipe";

import { ReactionComponent } from '../reaction/reaction.component';
import { CommentComponent } from "./comment.component";
import { GithubReactions } from "../commenter.types";
import { NewReactionComponent } from "../new-reaction/new-reaction.component";

export default {
  title: 'Comment',
  component: CommentComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      declarations: [ReactionComponent, SafePipe, NewReactionComponent]
    })
  ]
} as Meta;

const template: Story = (args: any) => ({
  props: args,
});

export const Comment = template.bind({});
Comment.args = {
  id: 12334,
  avatar: 'https://via.placeholder.com/150',
  userName: 'User Name',
  commentDate: '2022-05-24T02:00:03Z',
  content: `<p>a comment paragraph</p>`,
  reactions: {
    url: '',
    total_count: 3,
    "+1": 1,
    "-1": 0,
    confused: 1,
    hooray: 0,
    heart: 0,
    rocket: 1,
    eyes: 0,
    laugh: 0,
  } as GithubReactions
};
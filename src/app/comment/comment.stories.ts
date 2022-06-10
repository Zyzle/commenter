import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { SafePipe } from "../safe.pipe";

import { CommentComponent } from "./comment.component";

export default {
  title: 'Comment',
  component: CommentComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      declarations: [SafePipe]
    })
  ]
} as Meta;

const template: Story = (args: any) => ({
  props: args,
});

export const Comment = template.bind({});
Comment.args = {
  avatar: 'https://via.placeholder.com/150',
  userName: 'User Name',
  commentDate: '2022-05-24T02:00:03Z',
  content: `<p>a comment paragraph</p>`,
};
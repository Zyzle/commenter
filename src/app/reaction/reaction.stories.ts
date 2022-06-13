import { CommonModule } from '@angular/common';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { GithubReaction } from '../commenter.types';
import { SafePipe } from '../safe.pipe';

import { ReactionComponent } from './reaction.component';

export default {
  title: 'Reaction',
  component: ReactionComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      declarations: [SafePipe],
    }),
  ],
  argTypes: {
    reaction: {
      control: 'select',
      options: [
        "-1",
        "+1",
        "laugh",
        "hooray",
        "confused",
        "heart",
        "rocket",
        "eyes"
      ]
    }
  },
} as Meta;

const template: Story = (args: any) => ({
  props: args,
});

export const Reaction = template.bind({});
Reaction.args = {
  reaction: "+1",
  count: 6,
};

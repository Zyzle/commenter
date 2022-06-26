
import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ReactionComponent } from "../reaction/reaction.component";
import { SafePipe } from "../safe.pipe";
import { NewReactionComponent } from "./new-reaction.component";

export default {
  title: 'New Reaction',
  component: NewReactionComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      declarations: [ ReactionComponent, SafePipe ]
    }),
  ],
} as Meta;

const template: Story = (args: any) => ({
  props: args,
});

export const NewReaction = template.bind({});
NewReaction.args = {};
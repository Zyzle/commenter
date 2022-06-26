
import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { NewReactionComponent } from "./new-reaction.component";

export default {
  title: 'New Reaction',
  component: NewReactionComponent,
  declarations: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
} as Meta;

const template: Story = (args: any) => ({
  props: args,
});

export const NewReaction = template.bind({});
NewReaction.args = {};
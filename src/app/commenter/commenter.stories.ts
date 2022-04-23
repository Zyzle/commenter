import { Meta, Story } from '@storybook/angular';

import { CommenterComponent } from './commenter.component'

export default {
	title: 'Commenter',
	component: CommenterComponent,
} as Meta;

const template: Story = (args: any) => ({
	props: args
});

export const Main = template.bind({})
Main.args = {};
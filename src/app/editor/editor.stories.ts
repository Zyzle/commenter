import { Meta, Story } from '@storybook/angular';

import { EditorComponent } from './editor.component';

export default{
	title: 'Editor',
	component: EditorComponent
} as Meta;

const template: Story = (args: any) => ({
	props: args
});

export const Editor = template.bind({});
Editor.args = {};
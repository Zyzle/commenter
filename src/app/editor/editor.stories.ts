import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SafePipe } from '../safe.pipe';

import { EditorComponent } from './editor.component';

export default {
	title: 'Editor',
	component: EditorComponent,
	decorators: [
		moduleMetadata({
			imports: [CommonModule, HttpClientModule, FormsModule],
			declarations: [SafePipe]
		})
	],
} as Meta;

const template: Story = (args: any) => ({
	props: args
});

export const Editor = template.bind({});
Editor.args = {};
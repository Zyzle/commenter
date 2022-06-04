import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommentComponent } from '../comment/comment.component';
import { CommentsComponent } from '../comments/comments.component';
import { EditorComponent } from '../editor/editor.component';
import { GraphQLModule } from '../graphql.module';
import { SafePipe } from '../safe.pipe';

import { CommenterComponent } from './commenter.component'

export default {
	title: 'Commenter',
	component: CommenterComponent,
	decorators: [
		moduleMetadata({
			imports: [CommonModule, GraphQLModule],
			providers: [],
			declarations: [
				CommentComponent,
				CommentsComponent,
				SafePipe,
				EditorComponent
			]
		})
	]
} as Meta;

const template: Story = (args: any) => ({
	props: args
});

export const Commenter = template.bind({});
Commenter.args = {
	issueNumber: 7,
	ghRepo: 'zyzle.github.io',
	owner: 'Zyzle',
};
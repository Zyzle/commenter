import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommentComponent } from '../comment/comment.component';
import { CommentsComponent } from '../comments/comments.component';
import { EditorComponent } from '../editor/editor.component';
import { GraphQLModule } from '../graphql.module';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';
import { SafePipe } from '../safe.pipe';

import { CommenterComponent } from './commenter.component'

export default {
	title: 'Commenter',
	component: CommenterComponent,
	decorators: [
		moduleMetadata({
			imports: [CommonModule, GraphQLModule, FormsModule],
			providers: [LoginService],
			declarations: [
				CommentComponent,
				CommentsComponent,
				SafePipe,
				EditorComponent,
				LoginComponent
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
	clientId: '123456',
	lynxApp: 'https://desolate-reaches-82509.herokuapp.com/'
};
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommentComponent } from '../comment/comment.component';
import { EditorComponent } from '../editor/editor.component';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';
import { ReactionComponent } from '../reaction/reaction.component';
import { SafePipe } from '../safe.pipe';

import { CommenterComponent } from './commenter.component'

export default {
	title: 'Commenter',
	component: CommenterComponent,
	decorators: [
		moduleMetadata({
			imports: [CommonModule, FormsModule, HttpClientModule],
			providers: [LoginService],
			declarations: [
				CommentComponent,
				SafePipe,
				EditorComponent,
				LoginComponent,
				ReactionComponent
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
  clientId: 'b60275ae52523320945b',
  lynxApp: 'desolate-reaches-82509.herokuapp.com',
};
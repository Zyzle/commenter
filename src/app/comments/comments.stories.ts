import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { CommentComponent } from "../comment/comment.component";
import { GraphQLModule } from "../graphql.module";
import { SafePipe } from "../safe.pipe";
import { CommentsComponent } from "./comments.component";

export default {
	title: 'Comments',
	component: CommentsComponent,
	decorators: [
		moduleMetadata({
			imports: [CommonModule, GraphQLModule],
			providers: [],
			declarations: [CommentComponent, SafePipe]
		})
	]
} as Meta;

const template: Story = (args: any) => ({
	props: args,
});

export const Comments = template.bind({});
Comments.args = {};
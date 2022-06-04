import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { CommenterComponent } from './commenter/commenter.component';
import { EditorComponent } from './editor/editor.component';
import { CommentsComponent } from './comments/comments.component';
import { GraphQLModule } from './graphql.module';
import { CommentComponent } from './comment/comment.component';
import { SafePipe } from './safe.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    CommenterComponent,
    EditorComponent,
    CommentsComponent,
    CommentComponent,
    SafePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraphQLModule,
    FormsModule
  ],
  providers: [],
  // bootstrap:[CommenterComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    // console.log('injector', injector);
    const webComponent = createCustomElement(CommenterComponent, {injector});
    customElements.define('zyzle-commenter', webComponent);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
      
  }

}

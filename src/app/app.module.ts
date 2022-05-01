import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { CommenterComponent } from './commenter/commenter.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    CommenterComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
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

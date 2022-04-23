import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { CommenterComponent } from './commenter/commenter.component';

@NgModule({
  declarations: [
    CommenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(CommenterComponent, {injector});
    customElements.define('zyzle-commenter', webComponent);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
      
  }

}

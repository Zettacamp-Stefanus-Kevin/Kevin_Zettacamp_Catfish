import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModulekuModule } from './moduleku/moduleku.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModulekuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

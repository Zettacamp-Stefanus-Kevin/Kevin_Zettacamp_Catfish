import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModuleModule } from './first-module/first-module.module'; 
import { SecondModuleModule } from './second-module/second-module.module';
import { ThirdModuleModule } from './third-module/third-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModuleModule,
    SecondModuleModule,
    ThirdModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

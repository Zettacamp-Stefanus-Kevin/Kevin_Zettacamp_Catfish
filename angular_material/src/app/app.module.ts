import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomepageModule } from './homepage/homepage.module';
import { LoginModule } from './login/login.module';
import { MenuModule } from './menu/menu.module';
import { CartModule } from './cart/cart.module';
import { AboutModule } from './about/about.module';
import { StockManagementModule } from './stock-management/stock-management.module';
import { MenuManagementModule } from './menu-management/menu-management.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HomepageModule,
    LoginModule,
    MenuModule,
    CartModule,
    AboutModule,
    StockManagementModule,
    MenuManagementModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

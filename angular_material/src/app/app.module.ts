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
import { HttpClient, HttpClientModule  } from '@angular/common/http'; 
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RegisterModule } from './register/register.module';
import { TransactionManagementModule } from './transaction-management/transaction-management.module';

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
    RegisterModule,
    MenuModule,
    CartModule,
    AboutModule,
    StockManagementModule,
    MenuManagementModule,
    TransactionManagementModule,
    GraphQLModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class SharedModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

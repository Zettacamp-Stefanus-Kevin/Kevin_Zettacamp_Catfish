import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuCardComponent } from './menu-list/menu-card/menu-card.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuInfoComponent } from './menu-info/menu-info.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {path: "", redirectTo: '/menu/list', pathMatch: 'full'},
  { path: "list", component: MenuListComponent },
  { path: "detail", component: MenuListComponent }
]

@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
    MenuCardComponent,
    MenuDetailComponent,
    MenuInfoComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule .forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    MenuComponent,
    MenuListComponent,
    MenuCardComponent,
    MenuDetailComponent,
    MenuInfoComponent
  ]
})
export class MenuModule { }

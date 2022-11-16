import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuCardComponent } from './menu-list/menu-card/menu-card.component';

const routes: Routes = [
  {path: "", redirectTo: '/menu/list', pathMatch: 'full'},
  { path: "list", component: MenuListComponent }
]

@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
    MenuCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MenuComponent,
    MenuListComponent,
    MenuCardComponent
  ]
})
export class MenuModule { }

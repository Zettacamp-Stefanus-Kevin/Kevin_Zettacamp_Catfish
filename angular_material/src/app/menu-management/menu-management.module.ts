import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuManagementComponent } from './menu-management.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:"", component:MenuManagementComponent } ,
]


@NgModule({
  declarations: [
    MenuManagementComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports :[
    MenuManagementComponent
  ]
})
export class MenuManagementModule { }

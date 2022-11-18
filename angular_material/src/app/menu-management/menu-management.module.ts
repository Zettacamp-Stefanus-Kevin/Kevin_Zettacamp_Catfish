import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuManagementComponent } from './menu-management.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { MenuManagementInputComponent } from './menu-management-input/menu-management-input.component';
import { MenuManagementUpdateComponent } from './menu-management-update/menu-management-update.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {path:"", component:MenuManagementComponent } ,
]


@NgModule({
  declarations: [
    MenuManagementComponent,
    MenuManagementInputComponent,
    MenuManagementUpdateComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports :[
    MenuManagementComponent
  ]
})
export class MenuManagementModule { }

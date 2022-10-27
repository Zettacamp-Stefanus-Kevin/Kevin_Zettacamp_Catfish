import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserManagementComponent } from './user-management/user-management.component';

import { AppRoutingModule } from '../app-routing.module';


import { ReactiveFormsModule} from '@angular/forms'
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent,
    UserFormComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    AngularMaterialModule,
    // RouterModule, 
    AppRoutingModule
  ], 
  exports: [
    UserListComponent,
    UserCardComponent,
    UserFormComponent,
    UserManagementComponent
  ]
})
export class UserManagementModule { }

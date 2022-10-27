import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-management/user-form/user-form.component';
import { UserCardComponent } from './user-management/user-list/user-card/user-card.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { UserManagementComponent } from './user-management/user-management/user-management.component';



const routes: Routes = [
  {path : "home", component : UserManagementComponent},
  {path : "list", component : UserListComponent},
  {path : "card", component : UserCardComponent},
  {path : "form", component : UserFormComponent},
  {path : "**", redirectTo : "home"}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

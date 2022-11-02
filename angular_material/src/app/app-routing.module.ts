import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManagementComponent } from './book-management/book-management/book-management.component';
import { CreationComponent } from './book-management/creation/creation.component';
import { ListComponent } from './book-management/list/list.component';

const routes: Routes = [
  {path : "home", component : BookManagementComponent},
  {path : "list", component : ListComponent},
  {path : "form", component : CreationComponent},
  {path : "**", redirectTo : "home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

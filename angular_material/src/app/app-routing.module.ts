import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManagementModule } from './book-management/book-management.module';
import { BookManagementComponent } from './book-management/book-management/book-management.component';
import { BookListComponent } from './book-management/book-list/book-list.component';
import { BookCardComponent } from './book-management/book-list/book-card/book-card.component';
import { BookDetailComponent } from './book-management/book-detail/book-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : "home", component:BookManagementComponent},
  {path : "card", component:BookListComponent},
  {path : "detail", component:BookDetailComponent},
 
  {path : "detail/:id", component:BookDetailComponent},
  // {path : "detail", children:[
  //   {path : ":id", component:BookDetailComponent}
  // ], }
  {path : "**", component :BookManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

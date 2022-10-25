import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagementComponent } from './book-management/book-management.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookDetailComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    BookManagementComponent,
    BookListComponent,
    BookDetailComponent,
    BookCardComponent
  ]
})
export class BookManagementModule { }

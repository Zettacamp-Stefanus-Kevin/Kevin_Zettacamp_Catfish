import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { CardComponent } from './list/card/card.component';
import { CreationComponent } from './creation/creation.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    CreationComponent,
    BookManagementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  exports: [
    ListComponent,
    CardComponent,
    CreationComponent,
    BookManagementComponent
  ]
})
export class BookManagementModule { }

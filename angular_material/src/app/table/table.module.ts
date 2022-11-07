import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports:[
    TableComponent
  ]
})
export class TableModule { }

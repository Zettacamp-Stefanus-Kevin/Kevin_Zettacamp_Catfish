import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulirComponent } from './formulir.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
    FormulirComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    TranslateModule
  ],
  exports:[
    FormulirComponent,
    PopupComponent
  ]
})
export class FormulirModule { }

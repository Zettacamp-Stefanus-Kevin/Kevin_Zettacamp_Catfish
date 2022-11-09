import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromosComponent } from './promos.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes : Routes = [
  { path:"", component:PromosComponent},
]

@NgModule({
  declarations: [
    PromosComponent,
    CardComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    PromosComponent,
    RouterModule,
    CardComponent,
    InputComponent
  ]
})
export class PromosModule { }

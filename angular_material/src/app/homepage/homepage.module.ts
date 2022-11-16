import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:"", component:HomepageComponent } ,
]

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    HomepageComponent
  ]
})
export class HomepageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SubSink } from 'subsink';
import { SchoolsService } from '../service/schools.service';

const routes : Routes = [
  { path:"", component:SchoolsComponent },
]


@NgModule({
  declarations: [
    SchoolsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    SchoolsComponent,
    RouterModule
  ]
})
export class SchoolsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionManagementComponent } from './transaction-management.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: "", component: TransactionManagementComponent },
]

@NgModule({
  declarations: [
    TransactionManagementComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TransactionManagementComponent
  ]
})
export class TransactionManagementModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockManagementComponent } from './stock-management.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { StockManagementInputComponent } from './stock-management-input/stock-management-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockManagementUpdateComponent } from './stock-management-update/stock-management-update.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: "", component: StockManagementComponent },
]


@NgModule({
  declarations: [
    StockManagementComponent,
    StockManagementInputComponent,
    StockManagementUpdateComponent
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
    StockManagementComponent,
    StockManagementInputComponent,
    StockManagementUpdateComponent
  ]
})
export class StockManagementModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartCardComponent } from './cart-list/cart-card/cart-card.component';
import { CartUpdateComponent } from './cart-update/cart-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/cart/list', pathMatch: 'full' },
  { path: 'list', component: CartListComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartCardComponent,
    CartUpdateComponent,
    HistoryComponent,
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
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    CartComponent,
    CartListComponent,
    CartCardComponent,
    HistoryComponent,
  ],
})
export class CartModule {}

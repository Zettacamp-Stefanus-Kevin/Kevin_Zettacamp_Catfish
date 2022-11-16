import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartCardComponent } from './cart-list/cart-card/cart-card.component';

const routes: Routes = [
  {path: "", redirectTo: '/cart/list', pathMatch: 'full'},
  { path: "list", component: CartListComponent }
]

@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    CartComponent,
    CartListComponent,
    CartCardComponent
  ]
})
export class CartModule { }

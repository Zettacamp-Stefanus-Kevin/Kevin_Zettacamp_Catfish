import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardCardComponent } from './card-list/card-card/card-card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: "", redirectTo: '/card/list', pathMatch: 'full' },
  { path: "list", component: CardListComponent },
]


@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    CardCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CardComponent,
    CardListComponent,
    CardCardComponent,
    RouterModule
  ]
})
export class CardModule { }

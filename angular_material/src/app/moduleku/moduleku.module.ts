import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardComponent } from './cardlist/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    CardlistComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    CardlistComponent,
    CardComponent
  ]
})
export class ModulekuModule { }

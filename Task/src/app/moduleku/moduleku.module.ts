import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KomponenHeaderComponent } from './komponen-header/komponen-header.component';
import { KomponenMainComponent } from './komponen-main/komponen-main.component';
import { KomponenFooterComponent } from './komponen-footer/komponen-footer.component';
import { KontenComponent } from './komponen-main/konten/konten.component';
import { DataComponent } from './komponen-main/data/data.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    KomponenHeaderComponent,
    KomponenMainComponent,
    KomponenFooterComponent,
    KontenComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    KomponenHeaderComponent,
    KomponenMainComponent,
    KomponenFooterComponent,
    KontenComponent,
    DataComponent
  ]
})
export class ModulekuModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentFooterComponent } from './content-footer/content-footer.component';
import { ContentBodyComponent } from './content-body/content-body.component';

import { KontenMainComponent } from './content-body/konten-main/konten-main.component';
import { KontenSideComponent } from './content-body/konten-side/konten-side.component';
import { ContentHeaderComponent } from './content-header/content-header.component';



@NgModule({
  declarations: [
    ContentFooterComponent,
    ContentBodyComponent,
    ContentHeaderComponent,
    KontenMainComponent,
    KontenSideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentFooterComponent,
    ContentBodyComponent,
    ContentHeaderComponent,
    KontenMainComponent,
    KontenSideComponent
  ]
})
export class ModulekuModule { }

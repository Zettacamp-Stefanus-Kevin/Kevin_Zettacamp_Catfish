import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstBodyComponent } from './first-body/first-body.component';
import { FirstFooterComponent } from './first-footer/first-footer.component';
import { FirstHeaderComponent } from './first-header/first-header.component';



@NgModule({
  declarations: [
    FirstBodyComponent,
    FirstFooterComponent,
    FirstHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstBodyComponent,
    FirstFooterComponent,
    FirstHeaderComponent
  ]
})
export class FirstModuleModule { }

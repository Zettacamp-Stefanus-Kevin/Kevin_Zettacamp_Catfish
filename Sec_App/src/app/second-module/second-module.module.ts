import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondHeaderComponent } from './second-header/second-header.component';
import { SecondFooterComponent } from './second-footer/second-footer.component';
import { SecondBodyComponent } from './second-body/second-body.component';



@NgModule({
  declarations: [
    SecondHeaderComponent,
    SecondFooterComponent,
    SecondBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondHeaderComponent,
    SecondFooterComponent,
    SecondBodyComponent
  ]
})
export class SecondModuleModule { }

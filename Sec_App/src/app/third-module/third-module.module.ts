import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdHeaderComponent } from './third-header/third-header.component';
import { ThirdFooterComponent } from './third-footer/third-footer.component';
import { ThirdBodyComponent } from './third-body/third-body.component';



@NgModule({
  declarations: [
    ThirdHeaderComponent,
    ThirdFooterComponent,
    ThirdBodyComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ThirdHeaderComponent,
    ThirdFooterComponent,
    ThirdBodyComponent
  ]
})
export class ThirdModuleModule { }

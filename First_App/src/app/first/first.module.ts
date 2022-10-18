import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstheaderComponent } from './firstheader/firstheader.component';
import { FirstbodyComponent } from './firstbody/firstbody.component';
import { FirstfooterComponent } from './firstfooter/firstfooter.component';



@NgModule({
  declarations: [
    FirstheaderComponent,
    FirstbodyComponent,
    FirstfooterComponent
  ],
  imports: [
    CommonModule
  ],
  export:[
    FirstheaderComponent,
    FirstbodyComponent,
    FirstfooterComponent
  ]
})
export class FirstModule { }

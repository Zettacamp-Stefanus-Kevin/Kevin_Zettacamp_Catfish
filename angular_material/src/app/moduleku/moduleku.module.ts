import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ContentMainComponent } from './content-main/content-main.component';
import { ContentFooterComponent } from './content-footer/content-footer.component';
import { CardComponent } from './content-main/card/card.component';
import { SkillComponent } from './content-main/skill/skill.component';



@NgModule({
  declarations: [
    ContentHeaderComponent,
    ContentMainComponent,
    ContentFooterComponent,
    CardComponent,
    SkillComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentHeaderComponent,
    ContentMainComponent,
    ContentFooterComponent,
    CardComponent,
    SkillComponent
  ]
})
export class ModulekuModule { }

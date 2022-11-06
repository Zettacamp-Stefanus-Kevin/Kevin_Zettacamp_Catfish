import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorCardComponent } from './actor-list/actor-card/actor-card.component';
import { ActorsComponent } from './actors.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: "", redirectTo:'/actors/list', pathMatch:'full'},
  { path:"list", component:ActorListComponent },
  { path:"detail/:id", component:ActorDetailComponent }
]

@NgModule({
  declarations: [
    ActorListComponent,
    ActorDetailComponent,
    ActorCardComponent,
    ActorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    ActorListComponent,
    ActorDetailComponent,
    ActorCardComponent,
    RouterModule
  ]
})
export class ActorsModule { }

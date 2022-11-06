import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path : "", redirectTo: '/movies/list', pathMatch:'full'},
  { path : "list", component: MovieListComponent},
  { path : "detail/:id", component: MovieDetailComponent}
]

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    MoviesComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieCardComponent,
    RouterModule
  ]
})
export class MoviesModule { }

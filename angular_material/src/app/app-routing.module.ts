import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo : 'movies', pathMatch: 'full'},
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  { path: 'actors', loadChildren: () => import('./actors/actors.module').then(m => m.ActorsModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

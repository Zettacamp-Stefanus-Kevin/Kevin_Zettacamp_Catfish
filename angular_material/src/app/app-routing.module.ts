import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo : '/promo', pathMatch: 'full'},
  { path: 'promo', loadChildren: () => import('./promos/promos.module').then(m => m.PromosModule) },
  { path: 'school', loadChildren: () => import('./schools/schools.module').then(m => m.SchoolsModule) },
  { path: 'filter', loadChildren: () => import('./filters/filters.module').then(m => m.FiltersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

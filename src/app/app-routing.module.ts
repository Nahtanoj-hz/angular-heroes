import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';


const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/hero-details/hero-details.module').then(m => m.HeroDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComestiblesComponent } from './pages/comestibles/comestibles.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'comestibles',
    component: ComestiblesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }

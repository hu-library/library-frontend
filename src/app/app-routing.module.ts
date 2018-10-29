import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchViewComponent } from './components/search-view/search-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: ':card', component: SearchViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { InventorySearchingComponent } from './components/inventory-searching/inventory-searching.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: ':card', component: SearchViewComponent },
  { path: ':card/resolve', component: ResolutionComponent },
  { path: 'inventory/:card', component: InventorySearchingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

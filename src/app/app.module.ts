// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { SearchedBeforeComponent } from './components/searched-before/searched-before.component';
import { NotSearchedBeforeComponent } from './components/not-searched-before/not-searched-before.component';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckboxComponent } from './components/searched-before/checkbox/checkbox.component';
import { InventorySearchingComponent } from './components/inventory-searching/inventory-searching.component';

// ngrx/store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import { AuthEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    SearchViewComponent,
    SearchedBeforeComponent,
    NotSearchedBeforeComponent,
    ResolutionComponent,
    NavbarComponent,
    CheckboxComponent,
    InventorySearchingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

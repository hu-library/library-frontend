// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { SearchedBeforeComponent } from './components/searched-before/searched-before.component';
import { NotSearchedBeforeComponent } from './components/not-searched-before/not-searched-before.component';

// ngrx/store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    SearchViewComponent,
    SearchedBeforeComponent,
    NotSearchedBeforeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

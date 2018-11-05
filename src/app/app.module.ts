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
    NotSearchedBeforeComponent,
    ResolutionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

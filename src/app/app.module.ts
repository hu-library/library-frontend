import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { SearchedBeforeComponent } from './components/searched-before/searched-before.component';
import { NotSearchedBeforeComponent } from './components/not-searched-before/not-searched-before.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

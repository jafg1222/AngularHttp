import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routes} from "./app.routes";
import {SearchService} from "./services/search.service";


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PromisesComponent } from './promises/promises.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromisesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import { HttpModule,Jsonp,JsonpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import {routes} from "./app.routes";
import {SearchService} from "./services/search.service";
import { SearchWithObservable } from "./services/observable.service";
import { JsonpSearchService } from "./services/jsonp.service";


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PromisesComponent } from './promises/promises.component';
import { HomeComponent } from './home/home.component';
import { ObservablesComponent } from './observables/observables.component';
import { JsonpComponent } from './jsonp/jsonp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromisesComponent,
    HomeComponent,
    ObservablesComponent,
    JsonpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routes
  ],
  providers: [SearchService, SearchWithObservable, JsonpSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

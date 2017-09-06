import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {NavbarComponent} from './navbar/navbar.component';
import {PromisesComponent} from './promises/promises.component';
import {HomeComponent} from "./home/home.component";
import {ObservablesComponent} from "./observables/observables.component";
import {JsonpComponent} from "./jsonp/jsonp.component";

const appRoutes:Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'promises',component:PromisesComponent},
    {path: 'observables',component:ObservablesComponent},
    {path:'jsonp', component:JsonpComponent}
]

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);
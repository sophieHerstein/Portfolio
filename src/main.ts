import {enableProdMode, importProvidersFrom} from '@angular/core';

import {environment} from "./environments/environment";
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, routes} from './app/app.routes';
import {AppComponent} from './app/app.component';
import {provideRouter} from "@angular/router";

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule), provideRouter(routes)]
})
    .catch(err => console.error(err));

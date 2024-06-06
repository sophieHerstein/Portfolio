import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.modules";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UeberMichComponent} from "./ueber-mich/ueber-mich.component";
import {ProjekteModule} from "./projekte/projekte.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, UeberMichComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

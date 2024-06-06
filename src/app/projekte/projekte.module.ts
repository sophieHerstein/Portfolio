import { NgModule } from '@angular/core';
import {ProjekteRoutingModule} from "./projekte-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {ProjekteComponent} from "./projekte.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ProjekteComponent],
  imports: [
    CommonModule,
    ProjekteRoutingModule
  ]
})
export class ProjekteModule { }

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjekteComponent} from "./projekte.component";
import {EProjektePaths} from "./projekte.paths";

export const routes: Routes = [
  {path: EProjektePaths.ROOT, component: ProjekteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjekteRoutingModule { }

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {UeberMichComponent} from "./pages/ueber-mich/ueber-mich.component";
import {EAppPaths} from "./app.paths";

export const routes: Routes = [
  {path: EAppPaths.ROOT, component: HomeComponent},
  {path: EAppPaths.UEBER_MICH, component: UeberMichComponent},
  {path: EAppPaths.PROJEKTE, loadChildren: ()=> import('./pages/projekte/projekte.module').then((m)=> m.ProjekteModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

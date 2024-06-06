import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UeberMichComponent} from "./ueber-mich/ueber-mich.component";
import {EAppPaths} from "./app.paths";

export const routes: Routes = [
  {path: EAppPaths.ROOT, component: HomeComponent},
  {path: EAppPaths.UEBER_MICH, component: UeberMichComponent},
  {path: EAppPaths.PROJEKTE, loadChildren: ()=> import('./projekte/projekte.module').then((m)=> m.ProjekteModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

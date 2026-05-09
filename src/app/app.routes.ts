import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EAppPaths} from "./app.paths";

export const routes: Routes = [
    {
        path: EAppPaths.ROOT, loadComponent: () =>
            import('./pages/home/home.component')
                .then(m => m.HomeComponent)
    },
    {
        path: EAppPaths.UEBER_MICH, loadComponent: () =>
            import('./pages/ueber-mich/ueber-mich.component')
                .then(m => m.UeberMichComponent)
    },
    {
        path: EAppPaths.PROJEKTE, loadComponent: () =>
            import('./pages/projekte/projekte.component')
                .then(m => m.ProjekteComponent)
    },
    {
        path: `${EAppPaths.PROJEKTE}/:slug`,
        loadComponent: () =>
            import('./pages/projekte/projekt-details/projekt-details.component').then(m => m.ProjektDetailsComponent),
    },
    {
        path: EAppPaths.EXPERIENCE, loadComponent: () =>
            import('./pages/experience/experience.component')
                .then(m => m.ExperienceComponent)
    },
    {
        path: '**', loadComponent: () =>
            import('./pages/not-found/not-found.component')
                .then(m => m.NotFoundComponent)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

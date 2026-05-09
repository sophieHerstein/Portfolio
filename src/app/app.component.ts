import {Component, ViewEncapsulation} from '@angular/core';
import {EAppPaths} from "./app.paths";
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [RouterLink, RouterOutlet, RouterLinkActive]
})
export class AppComponent {
    protected readonly EAppPaths = EAppPaths;
}

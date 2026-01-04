import {Component, ViewEncapsulation} from '@angular/core';
import {EAppPaths} from "./app.paths";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class AppComponent {
    protected readonly EAppPaths = EAppPaths;
}

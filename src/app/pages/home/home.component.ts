import {Component, ViewEncapsulation} from '@angular/core';
import {EAppPaths} from "../../app.paths";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        RouterLink
    ],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

    protected readonly EAppPaths = EAppPaths;
}

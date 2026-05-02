import {Component, ViewEncapsulation} from '@angular/core';
import {EAppPaths} from "../../app.paths";
import {RouterLink} from "@angular/router";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {bootstrapArrowRight} from "@ng-icons/bootstrap-icons";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        RouterLink,
        NgIcon
    ],
    providers: [provideIcons({ bootstrapArrowRight })],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

    protected readonly EAppPaths = EAppPaths;
}

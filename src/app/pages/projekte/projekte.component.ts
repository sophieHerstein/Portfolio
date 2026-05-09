import {Component, ViewEncapsulation} from '@angular/core';
import {RouterLink} from "@angular/router";
import {PROJEKTE} from "../../../data/projects";

@Component({
    selector: 'app-projekte',
    templateUrl: './projekte.component.html',
    styleUrl: './projekte.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [
        RouterLink
    ]
})
export class ProjekteComponent {
    projekte = PROJEKTE;
}

import {Component, computed, inject, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs";
import {PROJEKTE} from "../../../../data/projects";

@Component({
    selector: 'app-projekte-details',
    templateUrl: './projekt-details.component.html',
    styleUrl: './projekt-details.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [RouterLink],
})
export class ProjektDetailsComponent {
    private route = inject(ActivatedRoute);

    private slug = toSignal(
        this.route.paramMap.pipe(map(params => params.get('slug'))),
        { initialValue: null }
    );

    project = computed(() =>
        PROJEKTE.find(project => project.slug === this.slug())
    );
}

export interface IProjektDetails {
    slug: string;
    name: string;
    shortDescription: string;
    problem: string;
    solution: string;
    techstack: string[];
    details: string[];
    challenges?: string;
    learnings?: string;
    additionalInsights?: string[];
    images?: {
        src: string;
        alt: string;
    }[];
    github?: string;
    demo?: string;
}
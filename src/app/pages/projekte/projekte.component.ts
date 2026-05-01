import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-projekte',
    templateUrl: './projekte.component.html',
    styleUrl: './projekte.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class ProjekteComponent {
    projeke: IProjekte[] = [{
        name: "Projekt 1",
        problem: "Problem",
        loesung: "Loesung",
        techstack: ["Angular", "Typescript"],
        github: "https://github.com/user/repo",
        demo: "https://demo.com"
    },
        {
            name: "Projekt 2",
            problem: "Problem 2",
            loesung: "Loesung 2",
            techstack: ["Java", "Spring Boot"],
            github: "https://github.com/user/repo2",
            demo: "https://demo2.com"
        },
        {
            name: "Projekt 3",
            problem: "Problem 3",
            loesung: "Loesung 3",
            techstack: ["Java", "Spring Boot"],
            demo: "https://demo2.com"
        },
        {
            name: "Projekt 4",
            problem: "Problem 4",
            loesung: "Loesung 4",
            techstack: ["Java", "Spring Boot"],
            github: "https://github.com/user/repo2",
        },
        {
            name: "Projekt 5",
            problem: "Problem 5",
            loesung: "Loesung 5",
            techstack: ["Java", "Spring Boot"],
        },
    ]
}

export interface IProjekte {
    name: string;
    problem: string;
    loesung: string;
    techstack: string[];
    github?: string;
    demo?: string;
}

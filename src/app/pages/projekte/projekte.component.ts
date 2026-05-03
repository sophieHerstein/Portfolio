import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-projekte',
    templateUrl: './projekte.component.html',
    styleUrl: './projekte.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class ProjekteComponent {
    //TODO: demos ergänzen?
    //TODO: Fotos ergänzen?
    projeke: IProjekte[] = [{
        name: "SportTracker",
        problem: "Mein Bruder und ich wollten unseren Fortschritt beim Training tracken, aber keine der gängigen Lösungen hat zu uns gepasst.",
        loesung: "Entwicklung einer eigenen App, die auf unsere Bedürfnisse zugeschnitte ist.",
        techstack: ["React Native", "Typescript", "Expo"],
        github: "https://github.com/sophieHerstein/SportTracker",
    },
        {
            name: "DevTracker",
            problem: "Ich hatte zu viele Projektideen und keine zufriedenstellende Möglichkeit, meine Ideen usw. zu sammeln.",
            loesung: "DevTracker, bei dem Projekte und deren Fortschritte gesammelt und verfolgt werden können.",
            techstack: ["Angular", "Typescript"],
            github: "https://github.com/sophieHerstein/DevTracker"
        },
        {
            name: "Portfolio",
            problem: "Meine Fähigkeiten in der Softwareentwicklung zeigen.",
            loesung: "Dieses Portfolio hier",
            techstack: ["Angular", "Typescript"],
            github: "https://github.com/sophieHerstein/Portfolio" //TODO: URL überprüfen
        },
        {
            name: "Smart Graphics ESA",
            problem: "Aufgabe war eine kreative Umsetzung in der GenAI verwendet wird.",
            loesung: "Eine selbstgeschriebene Kurzgeschichte mit KI-generierten Bildern visuell darstellen.",
            techstack: ["Angular", "Typescript"],
            github: "https://github.com/sophieHerstein/SmartGraphicsESA",
        },
        {
            name: "Masterarbeit",
            problem: "Die Erkennung von Deepfakes wird immer schwieriger, etablierte Detektoren können nicht mit der Entwicklung der generierenden Modelle mithalten.",
            loesung: "Ein Zusammenschluss mehrerer etablierter Detektoren inkl. deren Spezialisierung auf Inhalte.",
            techstack: ["Python"],
            github: "https://github.com/sophieHerstein/Masterarbeit_DeepfakeDetectionEnsemble",
        }
    ]

    cleanedURL(url: string): string {
        return url.replace("https://", "").replace("http://", "").replace("www.", "");
    }
}

export interface IProjekte {
    name: string;
    problem: string;
    loesung: string;
    techstack: string[];
    github?: string;
    demo?: string;
}

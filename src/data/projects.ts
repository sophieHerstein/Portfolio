import {IProjektDetails} from "../app/pages/projekte/projekt-details/projekt-details.component";

export const PROJEKTE: IProjektDetails[] = [
    {
        slug: "sport-tracker",
        name: "SportTracker",
        shortDescription:
            "Mobile App zur individuellen Trainingsdokumentation und Fortschrittsanalyse.",
        problem:
            "Bestehende Fitness-Apps waren entweder zu kompliziert, werbelastig oder erforderten kostenpflichtige Abonnements. Außerdem passten viele Workflows nicht zu unseren individuellen Trainingsstrukturen.",
        solution:
            "Entwicklung einer eigenen mobilen App zur einfachen und flexiblen Dokumentation von Kraft- und Ausdauertraining, zugeschnitten auf die persönlichen Anforderungen von mir und meinem Bruder.",
        techstack: [
            "React Native",
            "TypeScript",
            "Expo",
            "SQLite"
        ],
        details: [
            "Entwicklung einer mobilen App mit React Native und Expo",
            "Lokale Datenspeicherung mit SQLite",
            "Verwaltung kompletter Workouts inklusive Übungen, Sätzen, Wiederholungen und Gewichten",
            "Automatische Übernahme zuletzt verwendeter Gewichte bei bekannten Übungen",
            "Autovervollständigung für Übungen zur Vermeidung doppelter Einträge",
            "Visualisierung von Trainingsfortschritten durch Diagramme",
            "Kontinuierliche Weiterentwicklung und Feature-Erweiterung seit über 1,5 Jahren"
        ],
        challenges:
            "Die größte Herausforderung war die Konzeption und Verwaltung der Datenstruktur. Besonders komplex war das Handling der Beziehungen zwischen Workouts, Übungen und historischen Trainingsdaten. Viele Logiken wurden direkt über SQL-Abfragen umgesetzt, wodurch Fehler teilweise schwer nachvollziehbar waren.",
        learnings:
            "Das Projekt hat mein Verständnis für Datenmodellierung, lokale Datenspeicherung und State-Management deutlich verbessert. Außerdem habe ich gelernt, wie wichtig eine saubere Architektur und nachvollziehbare Datenflüsse bei langfristig entwickelten Anwendungen sind.",
        additionalInsights: [
            "React Native wurde eigenständig für dieses Projekt erlernt",
            "Die App wird aktiv im Alltag genutzt",
            "Das Projekt wird kontinuierlich erweitert und verbessert",
            "Aktuell werden Ideen zur Integration von KI-Features evaluiert"
        ],
        github: "https://github.com/sophieHerstein/SportTracker",
        images: [
            {src: "assets/screenshots/sporttracker/kraftsport.jpeg", alt: "Kraftsportbereich"},
            {src: "assets/screenshots/sporttracker/homescreen.jpeg", alt: "Home Screen"},
            {src: "assets/screenshots/sporttracker/ausdauer.jpeg", alt: "Ausdauerbereich"},
        ]
    },
    {
        slug: "portfolio",
        name: "Developer Portfolio",
        shortDescription:
            "Persönliches Portfolio zur Präsentation von Projekten, Fähigkeiten und Entwicklungserfahrung.",
        problem:
            "Für Bewerbungen sollte eine Plattform entstehen, die Projekte, technische Fähigkeiten und persönliche Arbeitsweise strukturiert und nachvollziehbar präsentiert.",
        solution:
            "Entwicklung eines eigenen Frontend-Portfolios mit Fokus auf klare Nutzerführung, konsistentes Design und eine projektzentrierte Präsentation der eigenen Fähigkeiten.",
        techstack: [
            "Angular",
            "TypeScript",
            "SCSS",
            "Bootstrap"
        ],
        details: [
            "Umsetzung eines eigenständigen Designs ohne direkte Vorlagen oder Templates",
            "Entwicklung eines konsistenten Designsystems mit Farb-, Spacing- und Komponentenstruktur",
            "Responsive Umsetzung für unterschiedliche Bildschirmgrößen",
            "Integration einer interaktiven Timeline für Erfahrung und Ausbildung",
            "Routing zwischen Projektübersicht und Detailseiten",
            "Fokus auf klare Informationsstruktur und schnelle Erfassbarkeit",
            "Verwendung wiederverwendbarer UI-Komponenten und Card-Layouts"
        ],
        challenges:
            "Die größte Herausforderung bestand darin, ein eigenes visuelles Konzept zu entwickeln, ohne sich stark an bestehenden Portfolios zu orientieren. Besonders schwierig war die Balance zwischen Design, Übersichtlichkeit und Persönlichkeit.",
        learnings:
            "Das Projekt hat mein Verständnis für UI/UX, visuelle Konsistenz und strukturierte Frontend-Architektur verbessert. Außerdem wurde deutlich, wie wichtig gute Nutzerführung und klare Informationsdarstellung für Anwendungen sind.",
        additionalInsights: [
            "Bewusster Fokus auf projektzentrierte Präsentation statt langer Selbstdarstellung",
            "Eigenständige Entwicklung des visuellen Konzepts",
            "Frontend-Schwerpunkt mit Fokus auf Struktur, Lesbarkeit und Nutzerführung",
            "Portfolio dient aktiv für Bewerbungen und persönliche Präsentation"
        ],
        github: "https://github.com/sophieHerstein/Portfolio"
    },
    {
        slug: "smart-graphics-esa",
        name: "Smart Graphics ESA",
        shortDescription:
            "Visuelle Webanwendung zur Darstellung einer KI-generierten Kurzgeschichte mit emotionalem Fokus.",
        problem:
            "Im Rahmen einer kreativen GenAI-Aufgabe sollte ein eigenständiges Konzept entwickelt werden, das generative KI sinnvoll einsetzt und über reine Text- oder Bildgenerierung hinausgeht.",
        solution:
            "Entwicklung einer interaktiven Webanwendung zur visuellen Darstellung einer selbstgeschriebenen Kurzgeschichte mit KI-generierten Bildern und immersiver Navigation.",
        techstack: [
            "Angular",
            "TypeScript",
            "Stable Diffusion",
            "LoRA"
        ],
        details: [
            "Eigenständige Konzeption und Ausarbeitung der Kurzgeschichte",
            "Generierung und Nachbearbeitung aller Bilder mit Stable Diffusion",
            "Verwendung von LoRAs zur Verbesserung von Stil- und Charakterkonsistenz",
            "Visuelle Darstellung der Geschichte über großflächige Hintergrundbilder",
            "Kapitelbasierte Navigation mit Progressbar",
            "Seitenwechsel über Scroll-Interaktion und Buttonsteuerung",
            "Optional einblendbarer Textcontainer im Vordergrund",
            "Fokus auf responsive Darstellung und emotionales Storytelling"
        ],
        challenges:
            "Die größte Herausforderung war die konsistente Generierung der Bilder hinsichtlich Stimmung, Charakterdarstellung und visuellem Stil. Zusätzlich musste die Webanwendung so aufgebaut werden, dass Text, Bilder und Navigation gemeinsam eine immersive Nutzererfahrung erzeugen.",
        learnings:
            "Das Projekt hat mein Verständnis für visuelles Storytelling, UI/UX und den praktischen Einsatz generativer KI erweitert. Besonders interessant war die Kombination aus kreativer Konzeption und technischer Umsetzung innerhalb einer Frontend-Anwendung.",
        additionalInsights: [
            "Komplette Bildgenerierung und Nachbearbeitung mit KI",
            "Fokus auf emotionale Wirkung und visuelle Inszenierung",
            "Großer Anteil der Projektzeit floss in die Bildgenerierung und Abstimmung der Szenen",
            "Kombination aus kreativer Arbeit und technischer Frontend-Entwicklung"
        ],
        demo: "https://fuer-das-was-bleibt.netlify.app",
        github: "https://github.com/sophieHerstein/SmartGraphicsESA"
    },
    {
        slug: "deepfake-detection",
        name: "Masterarbeit: Deepfake Detection Ensemble",
        shortDescription:
            "Ensemble-System zur robusteren Erkennung von KI-generierten Bildern und Deepfakes.",
        problem:
            "Die Erkennung von Deepfakes wird zunehmend schwieriger, da generative Modelle immer realistischer werden. Viele bestehende Detektoren verlieren bereits bei kleinen Bildveränderungen wie Komprimierung, Skalierung oder Rauschen deutlich an Erkennungsleistung. Zusätzlich generalisieren viele Modelle schlecht auf unbekannte Deepfake-Generatoren.",
        solution:
            "Entwicklung eines spezialisierten Ensemble-Systems zur robusteren Deepfake-Erkennung auf Bildbasis. Dafür wurden mehrere unterschiedlich spezialisierte Detektoren kombiniert und deren Ergebnisse über verschiedene Verfahren zusammengeführt.",
        techstack: [
            "Python",
            "PyTorch",
            "OpenCV",
            "Pandas",
            "Matplotlib",
            "Seaborn"
        ],
        details: [
            "Training und Fine-Tuning bestehender Deepfake-Detektoren",
            "Vergleich unterschiedlicher Modellarchitekturen",
            "Kombination von sechs spezialisierten Detektoren in einem Ensemble-System",
            "Experimente mit Mittelwertbildung, gewichteten Verfahren und Meta-Classifiern",
            "Spezialisierung der Modelle auf unterschiedliche Bildinhalte wie Menschen, Gebäude und Landschaften",
            "Zusätzliche Analyse von Graustufen-, Kanten- und Frequenzbildern",
            "Evaluation der Robustheit gegenüber Komprimierung, Skalierung und Bildrauschen",
            "Vergleich der Generalisierungsfähigkeit auf unbekannte Deepfake-Modelle"
        ],
        challenges:
            "Die größte Herausforderung bestand darin, ein Ensemble-System zu entwickeln, das tatsächlich robuster und leistungsfähiger als einzelne Detektoren ist. Dabei zeigte sich, dass einfache Ensemble-Ansätze oder Gewichtungen häufig kaum Verbesserungen bringen. Erst der Einsatz eines Meta-Classifiers führte zu deutlich besseren Ergebnissen.",
        learnings:
            "Die Arbeit hat mein Verständnis für Machine Learning, Modellbewertung und Ensemble-Methoden deutlich vertieft. Besonders wichtig war die Erkenntnis, wie stark Datenqualität, Trainingsdaten und Generalisierung die tatsächliche Leistungsfähigkeit von KI-Modellen beeinflussen.",
        additionalInsights: [
            "Selbstständige Auswahl und Aufbereitung der Trainings- und Testdaten",
            "Experimenteller Fokus mit umfangreichen Modellvergleichen",
            "Untersuchung realitätsnaher Bildveränderungen wie Komprimierung und Rauschen",
            "Eigenständig gewähltes Thema mit gesellschaftlicher Relevanz"
        ],
        github:
            "https://github.com/sophieHerstein/Masterarbeit_DeepfakeDetectionEnsemble"
    }
];
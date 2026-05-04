import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent {

    currentUrl = "";

    constructor() {
        this.currentUrl = window.location.href;
    }


}

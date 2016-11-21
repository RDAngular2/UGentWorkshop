import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'application-header',
    templateUrl: 'application-header.component.html'
})
export class ApplicationHeaderComponent implements OnInit {

    /* If you want that other components be able to set this property, you need to add it to the public api by using the Input annotation*/

    applicationName : string = "!!! dummy value !!!";

    constructor() { }

    loginUser(event:MouseEvent) {
        console.log("Login button clicked:\n" + event);
        alert("Login functionality is not implemented yet.");
    }

    ngOnInit() {
        console.log("Application Header initialized.");
    }

}
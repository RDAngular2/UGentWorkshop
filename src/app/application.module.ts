import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import {ApplicationComponent} from './application.component';
import {ApplicationHeaderComponent} from "./component/application-header/application-header.component";

@NgModule({
    declarations: [
        ApplicationComponent,
        ApplicationHeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [ApplicationComponent],
    providers: [],
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationModule {

}
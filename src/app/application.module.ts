import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {TypeaheadModule} from "ng2-bootstrap";
import {ToastrModule} from "toastr-ng2";


import {ApplicationComponent} from './application.component';
import {InitialApplicationHeaderComponent} from "./component/application-header-initial/application-header-initial.component";
import {ContactEditorComponent} from "./component/contact-editor/contact-editor.component";
import {ContactScreenComponent} from "./component/contact-screen/contact-screen.component";
import {ContactViewerComponent} from "./component/contact-viewer/contact-viewer.component";
import {NameListViewerComponent} from "./component/name-list-viewer/name-list-viewer.component";
import {ContactService} from "./service/contact/contact.service";
import {InitialContactListViewerComponent} from "./component/contact-list-viewer-initial/contact-list-viewer-initial.component";
import {ContactListViewerComponent} from "./component/contact-list-viewer/contact-list-viewer.component";
import {ApplicationHeaderComponent} from "./component/application-header/application-header.component";
import {NameEditorComponent} from "./component/name-editor/name-editor.component";

@NgModule({
    declarations: [
        ApplicationComponent,
        InitialApplicationHeaderComponent,
        ApplicationHeaderComponent,
        ContactEditorComponent,
        ContactViewerComponent,
        InitialContactListViewerComponent,
        ContactListViewerComponent,
        ContactScreenComponent,
        NameListViewerComponent,
        NameEditorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ToastrModule,
        TypeaheadModule,

    ],
    bootstrap: [ApplicationComponent],
    providers: [],
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationModule {

}
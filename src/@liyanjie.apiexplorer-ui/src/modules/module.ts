import { Location, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import * as services from "./services";
import * as components from "./components";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        components.IndexComponent,
        components.NavigatorComponent,
        components.InfoComponent,
        components.MainComponent,
        components.DefinitionComponent,
        components.ExampleComponent,
        components.TestComponent
    ],
    providers: [
        Location,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
        services.RequestService
    ],
    bootstrap: [
        components.IndexComponent
    ]
})
export class Module { }
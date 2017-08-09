import { Location, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import * as services from "./services";
//import * as components from "./components";
import { IndexComponent } from "./components/index.component";
import { NavigatorComponent } from "./components/navigator.component";
import { InfoComponent } from "./components/info.component";
import { MainComponent } from "./components/main.component";
import { DefinitionComponent } from "./components/definition.component";
import { ExampleComponent } from "./components/example.component";
import { TestComponent } from "./components/test.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        IndexComponent,
        NavigatorComponent,
        InfoComponent,
        MainComponent,
        DefinitionComponent,
        ExampleComponent,
        TestComponent
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
        IndexComponent
    ]
})
export class Module { }
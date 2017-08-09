var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var Module = (function () {
    function Module() {
    }
    return Module;
}());
Module = __decorate([
    NgModule({
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
], Module);
export { Module };
//# sourceMappingURL=module.js.map
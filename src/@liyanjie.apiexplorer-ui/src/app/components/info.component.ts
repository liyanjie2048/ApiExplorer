import { Component, Inject, Input, OnChanges } from "@angular/core";
import { Title } from "@angular/platform-browser";
import * as models from "../models";

@Component({
    selector: "info",
    templateUrl: "./info.component.html"
})
export class InfoComponent implements OnChanges {
    constructor( @Inject(Title) private title: Title) { }

    @Input()
    info: models.ApiInfo;

    ngOnChanges(): void {
        this.info && this.title.setTitle(this.info.title);
    }
}
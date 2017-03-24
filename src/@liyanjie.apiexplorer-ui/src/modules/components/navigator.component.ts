import { Component, Inject, Input, Output, OnInit } from "@angular/core";
import { Enumerable } from "@liyanjie/jslinq";
import * as models from "../models";
import * as services from "../services";

@Component({
    //moduleId: module.id,
    selector: "navigator",
    templateUrl: "navigator.component.html"
})
export class NavigatorComponent implements OnInit {
    constructor( @Inject(services.RequestService) private requestService: services.RequestService) { }

    @Output()
    docUrl: string;

    docUrls: models.DocUrl[];

    export(url: string): void {
        this.docUrl = url;
    }

    ngOnInit(): void {
        this.requestService
            .get("./init.json?v=1.0.1")
            .subscribe(response => {
                this.docUrls = response.json() as models.DocUrl[];
            }, error => {
                console.log(error);
            }, () => {
                let dft = Enumerable.new(this.docUrls).firstOrDefault(_ => _.default);
                this.docUrl = (dft || (this.docUrls.length > 0 ? this.docUrls[0] : new models.DocUrl())).url;
            });
    }
}
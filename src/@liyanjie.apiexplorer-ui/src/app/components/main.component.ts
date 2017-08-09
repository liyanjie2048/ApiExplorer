import { Location } from "@angular/common";
import { Component, Inject, Input, Output, OnChanges } from "@angular/core";
import { Enumerable } from "@liyanjie/jslinq";
import * as models from "../models";
import * as services from "../services";

@Component({
    selector: "main",
    templateUrl: "./main.component.html"
})
export class MainComponent implements OnChanges {
    constructor( @Inject(services.RequestService) private requestService: services.RequestService, @Inject(Location) private location: Location) {
    }

    @Input()
    section: any;

    @Input()
    docUrl: string;

    @Input()
    setParameterValue: (source: string, name: string, value: string) => void;

    @Output()
    basePath: string;

    @Output()
    info: models.ApiInfo;

    @Output()
    headers: models.ApiHeader[];

    @Output()
    resource: models.ApiResource;

    resources: models.GroupedList<models.GroupedList<models.ApiResource>>[];
    definitions: models.NameValueCollection<models.ApiDefinition>;
    parameters: models.NameValueCollection<string>;

    timestamp(time: string): string {
        if (!time)
            return "";
        try {
            var timespan = (Date.now() - Date.parse(time)) / (1000 * 60 * 60 * 24);
            if (timespan < 1)
                return "day0";
            if (timespan < 2)
                return "day1";
            if (timespan < 3)
                return "day2";
            if (timespan < 7)
                return "week0";
            if (timespan < 14)
                return "week1";
            if (timespan < 30)
                return "month0";
            if (timespan < 60)
                return "month1";
            if (timespan < 365)
                return "year0";
            return "years";
        } catch (e) { }
    }

    private _replaceUrl(input: string): string {
        return input.replace(/\{/g, '_').replace(/\}/g, '').replace(/\//g, '-').replace(/\-\_/g, '_').replace(/\_\-/g, '-').replace(/\_\_/g, '_');
    }

    path(group: string, item?: string): string {
        return item
            ? `${window.location.pathname}#${group}/${this._replaceUrl(item)}`
            : `${window.location.pathname}#${group}`;
    }

    select(resource: models.ApiResource): boolean {
        this.resource = resource;
        return true;
    }

    hash(hash: string): boolean {
        return window.location.hash.substr(1).split('/').indexOf(this._replaceUrl(hash)) > -1;
    }

    private _explor(docUrl: string): void {
        this.requestService
            .get(docUrl, null, { accept: "application/json" })
            .subscribe(response => {
                var document = response.json() as models.ApiDocument;
                this.basePath = document.basePath;
                this.info = document.info;
                this.headers = document.headers;
                this.resources = Enumerable.new(document.resources)
                    .groupBy(_ => _.groupName)
                    .groupBy(_ => _.key.substring(0, _.key.indexOf('.')))
                    .select(_ => (<models.GroupedList<models.GroupedList<models.ApiResource>>>{
                        groupName: _.key,
                        groupList: _.select(__ => (<models.GroupedList<models.ApiResource>>{
                            groupName: __.key.substring(__.key.indexOf('.') + 1),
                            groupList: __.toArray()
                        })).toArray(),
                    }))
                    .toArray();
                this.definitions = Enumerable.new(document.definitions)
                    .toDictionary(_ => _.name, _ => _);
            });
    }

    ngOnChanges(): void {
        this.docUrl && this._explor(this.docUrl);
    }
}
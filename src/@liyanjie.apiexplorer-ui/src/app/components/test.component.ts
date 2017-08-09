import { Component, Inject, Input, Output, OnChanges } from "@angular/core";
import { Enumerable } from "@liyanjie/jslinq";
import * as models from "../models";
import * as services from "../services";

@Component({
    selector: "test",
    templateUrl: "./test.component.html"
})
export class TestComponent implements OnChanges {
    constructor( @Inject(services.RequestService) private requestService: services.RequestService) { }

    @Input()
    section: any;

    @Input()
    basePath: string;

    @Input()
    headers: models.ApiHeader[];

    @Input()
    resource: models.ApiResource;

    @Output()
    setParameterValue: (source: string, name: string, value: string) => void = (source: string, name: string, value: string) => {
        if (source == "Header")
            this.header[name] = value;
        if (source == "Path")
            this.path[name] = value;
        if (source == "Query")
            this.query[name] = value;
        if (source == "Body")
            this.body[name] = value;
        if (source == "Body")
            this.body[name] = value;
        if (source == "FromUri")
            this.path[name] = value;
        if (source == "FromBody")
            this.body[name] = value;
    }

    header: models.NameValueCollection<string> = {};
    path: models.NameValueCollection<string> = {};
    query: models.NameValueCollection<string> = {};
    body: models.NameValueCollection<string> = {};

    submitting: boolean = false;
    consumingTimer: NodeJS.Timer;
    consumingTime?: number = null;

    requestUrl: string;
    responseCode: string;
    responseBody: string;
    responseHeaders: string;

    values(array: any[]): string {
        return Enumerable.new(array).toString(',');
    }

    submit(): void {
        this.submitting = true;
        this.consumingTime = 0;
        this.consumingTimer = setInterval(() => {
            this.consumingTime += 0.01;
        }, 10);

        let url: string = this.basePath + this.resource.path;

        let header: any = {};
        for (let key in this.header) {
            header[key] = this.header[key];
        }

        let path: any = {};
        for (let key in this.path) {
            path[key.toLowerCase()] = this.path[key];
        }
        var match = url.match(/{[^\s}]+}/g);//match在没有匹配的情况下返回null
        match && match.forEach(item => {
            let key = item.substr(1, item.length - 2).toLowerCase();
            let value = path[key];
            url = url.replace(item, value || "");
            delete path[key];
        });

        let query: any = {};
        for (let key in this.query) {
            query[key] = this.query[key];
        }
        for (let key in path) {
            query[key] = path[key];
        }

        let data: any = {};
        for (let key1 in this.body) {
            try {
                let value = this.body[key1];
                if (!/{[^{}]*}/.test(value.trim())) {
                    data[key1] = value;
                    continue;
                }
                let model = JSON.parse(value);
                for (let key2 in model) {
                    data[key2] = model[key2];
                }
            } catch (ex) {
                continue;
            }
        }

        this.requestService
            .send(this.resource.method, url, query, data, header)
            .subscribe(reponse => {
                this.requestUrl = reponse.url;
                this.responseCode = reponse.status.toString();
                this.responseBody = this._format(reponse.text());
                this.responseHeaders = JSON.stringify(reponse.headers, null, 4);
                this.submitting = false;
                clearInterval(this.consumingTimer);
            }, error => {
                this.requestUrl = error.url;
                this.responseCode = error.status.toString();
                this.responseBody = this._format(error.text());
                this.responseHeaders = JSON.stringify(error.headers, null, 4);
                this.submitting = false;
                clearInterval(this.consumingTimer);
            }, () => {
                this.submitting = false;
                clearInterval(this.consumingTimer);
            });
    }

    close(): void {
        this.section.testing = false;
        this.ngOnChanges();
    }

    private _format(input: string): string {
        try {
            return JSON.stringify(JSON.parse(input), null, 4);
        } catch (e) {
            return input.replace('<', '&lt;').replace('>', '&gt;');
        }
    }

    ngOnChanges(): void {
        this.header = { ["Content-Type"]: (this.resource && this.resource.produces[0]) || "application/json" };
        this.path = {};
        this.query = {};
        this.body = {};
        this.headers && this.headers.forEach(item => {
            this.header[item.name] = Enumerable.new(item.values).toString(',');
        });
        this.resource && this.resource.parameters && this.resource.parameters.forEach(item => {
            if (item.defaultValue !== undefined && item.defaultValue !== null) {
                if (item.source == "Header")
                    this.header[item.name] = item.defaultValue;
                if (item.source == "Path" || item.source == "FromUri")
                    this.path[item.name] = item.defaultValue;
                if (item.source == "Query")
                    this.query[item.name] = item.defaultValue;
            }
        });

        this.requestUrl = null;
        this.responseCode = null;
        this.responseBody = null;
        this.responseHeaders = null;
        this.submitting = false;
        this.consumingTime = null;

        clearInterval(this.consumingTimer);
    }
}
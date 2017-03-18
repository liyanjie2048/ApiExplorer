import { Component, Input, Output, OnDestroy, OnChanges } from "@angular/core";
import { Enumerable } from "@liyanjie/jslinq";
import * as models from "../models";

@Component({
    //moduleId: module.id,
    selector: "example",
    templateUrl: "example.component.html"
})
export class ExampleComponent implements OnDestroy {
    @Input()
    type: models.ApiType;

    @Input()
    bind: models.ApiBind[];

    @Input()
    clude: boolean; //true:include,false exclude

    @Input()
    definitions: { [key: string]: models.ApiDefinition };

    @Output()
    content: string;

    private _resolved: string[] = [];
    private _resolve(type: models.ApiType, bind: models.ApiBind[]): string {
        if (!(type && type.name))
            return "";
        switch (type.name.toLowerCase()) {
            case "int8":
            case "int16":
            case "int32":
            case "int64":
                return "0"
            case "float":
            case "double":
            case "decimal":
                return "0.0"
            case "boolean":
                return "false"
            case "string":
                if (type.format) {
                    switch (type.format.toLowerCase()) {
                        case "uuid":
                            return "\"00000000-0000-0000-0000-000000000000\"";
                        case "date-time":
                            return "\"0001-01-01 00:00:00\"";
                    }
                }
                return "\"string\"";
            case "array":
                if (type.itemType) {
                    return `[${this._resolve(type.itemType, bind)}]`;
                }
                return "[]";
            case "enum":
                if (this.definitions[type.definition]) {
                    let properties = this._filter(type.definition, bind);
                    return `\"(${Enumerable.new(properties).toString('|', _ => `${_.name}:${_.type.value}`)})\"`;
                }
                return "0";
            case "object":
                if (this.definitions[type.definition]) {
                    if (this._resolved.some(_ => _ == type.definition))
                        return `\"(recursive reference: ${type.definition})\"`;
                    this._resolved.push(type.definition);
                    let properties = this._filter(type.definition, bind);
                    var string = Enumerable.new(properties).select(_ => {
                        var apiBind = Enumerable.new(bind || []).firstOrDefault(_ => _.name == _.name);
                        return `\"${_.name}\":${this._resolve(_.type, apiBind ? apiBind.bind : [])}`;
                    }).toString(",");
                    return JSON.stringify(JSON.parse(`{${string}}`), null, 4);
                }
                return "{}";
            default:
                return "";
        }
    }

    private _filter(definition: string, bind: models.ApiBind[]): models.ApiProperty[] {
        let properties = this.definitions[definition].properties;
        if (bind) {
            let enumerable = Enumerable.new(bind);
            if (this.clude)
                properties = Enumerable.new(properties).where(_ => enumerable.any(__ => __.name == _.name)).toArray();
            else
                properties = Enumerable.new(properties).where(_ => !enumerable.any(__ => __.name == _.name && (__.bind == undefined || __.bind == null || __.bind.length == 0))).toArray();
        }
        return properties;
    }

    ngOnDestroy(): void {
        this.type = null;
        this.definitions = null;
        this._resolved = null;
    }

    ngOnChanges(): void {
        this._resolved = [];
        this.content = this._resolve(this.type, this.bind);
    }
}
import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Enumerable } from "@liyanjie/jslinq";
import * as models from "../models";

@Component({
    selector: "definition",
    templateUrl: "./definition.component.html"
})
export class DefinitionComponent implements OnInit, OnDestroy {
    @Input()
    type: models.ApiType;

    @Input()
    bind: models.ApiBind[];

    @Input()
    clude: boolean; //true:include,false exclude

    @Input()
    definitions: models.NameValueCollection<models.ApiDefinition>;

    types: models.KeyValuePair<models.ApiDefinition, models.ApiBind[]>[] = [];

    isDelete(name: string, bind: models.ApiBind[]): boolean {
        if (this.clude)
            return bind && !Enumerable.new(bind).any(_ => _.name == name);
        else
            return bind && Enumerable.new(bind).any(_ => _.name == name && (_.bind == null || _.bind.length == 0));
    }

    private _resolve(type: models.ApiType, bind: models.ApiBind[]): void {
        if (type.definition) {
            let definition = this.definitions[type.definition];
            if (this.types.some(_ => _.key.name == definition.name))
                return;
            this.types.push(new models.KeyValuePair(definition, bind));
            definition.properties.forEach(property => {
                var apiBind = Enumerable.new(bind || []).firstOrDefault(_ => _.name == property.name);
                this._resolve(property.type, apiBind ? apiBind.bind : null);
            });
        } else {
            type.itemType && this._resolve(type.itemType, bind);
            type.additionalTypes && type.additionalTypes.forEach(t => {
                this._resolve(t, bind);
            });
        }
    }

    ngOnInit(): void {
        this._resolve(this.type, this.bind);
    }

    ngOnDestroy(): void {
        this.type = null;
        this.definitions = null;
    }
}
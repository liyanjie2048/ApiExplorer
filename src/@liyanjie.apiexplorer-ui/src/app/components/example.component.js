var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output } from "@angular/core";
import { Enumerable } from "@liyanjie/jslinq";
import * as models from "../models";
var ExampleComponent = (function () {
    function ExampleComponent() {
        this._resolved = [];
    }
    ExampleComponent.prototype._resolve = function (type, bind) {
        var _this = this;
        if (!(type && type.name))
            return "";
        switch (type.name.toLowerCase()) {
            case "int8":
            case "int16":
            case "int32":
            case "int64":
                return "0";
            case "float":
            case "double":
            case "decimal":
                return "0.0";
            case "boolean":
                return "false";
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
                    return "[" + this._resolve(type.itemType, bind) + "]";
                }
                return "[]";
            case "enum":
                if (this.definitions[type.definition]) {
                    var properties = this._filter(type.definition, bind);
                    return "\"(" + Enumerable.new(properties).toString('|', function (_) { return _.name + ":" + _.type.value; }) + ")\"";
                }
                return "0";
            case "object":
                if (this.definitions[type.definition]) {
                    if (this._resolved.some(function (_) { return _ == type.definition; }))
                        return "\"(recursive reference: " + type.definition + ")\"";
                    this._resolved.push(type.definition);
                    var properties = this._filter(type.definition, bind);
                    var string = Enumerable.new(properties).select(function (_) {
                        var apiBind = Enumerable.new(bind || []).firstOrDefault(function (_) { return _.name == _.name; });
                        return "\"" + _.name + "\":" + _this._resolve(_.type, apiBind ? apiBind.bind : []);
                    }).toString(",");
                    return JSON.stringify(JSON.parse("{" + string + "}"), null, 4);
                }
                return "{}";
            default:
                return "";
        }
    };
    ExampleComponent.prototype._filter = function (definition, bind) {
        var properties = this.definitions[definition].properties;
        if (bind) {
            var enumerable_1 = Enumerable.new(bind);
            if (this.clude)
                properties = Enumerable.new(properties).where(function (_) { return enumerable_1.any(function (__) { return __.name == _.name; }); }).toArray();
            else
                properties = Enumerable.new(properties).where(function (_) { return !enumerable_1.any(function (__) { return __.name == _.name && (__.bind == undefined || __.bind == null || __.bind.length == 0); }); }).toArray();
        }
        return properties;
    };
    ExampleComponent.prototype.ngOnDestroy = function () {
        this.type = null;
        this.definitions = null;
        this._resolved = null;
    };
    ExampleComponent.prototype.ngOnChanges = function () {
        this._resolved = [];
        this.content = this._resolve(this.type, this.bind);
    };
    return ExampleComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", models.ApiType)
], ExampleComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ExampleComponent.prototype, "bind", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ExampleComponent.prototype, "clude", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ExampleComponent.prototype, "definitions", void 0);
__decorate([
    Output(),
    __metadata("design:type", String)
], ExampleComponent.prototype, "content", void 0);
ExampleComponent = __decorate([
    Component({
        selector: "example",
        templateUrl: "./example.component.html"
    })
], ExampleComponent);
export { ExampleComponent };
//# sourceMappingURL=example.component.js.map
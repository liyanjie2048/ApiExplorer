var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { Enumerable } from "@liyanjie/jslinq";
import * as models from "../models";
var DefinitionComponent = (function () {
    function DefinitionComponent() {
        this.types = [];
    }
    DefinitionComponent.prototype.isDelete = function (name, bind) {
        if (this.clude)
            return bind && !Enumerable.new(bind).any(function (_) { return _.name == name; });
        else
            return bind && Enumerable.new(bind).any(function (_) { return _.name == name && (_.bind == null || _.bind.length == 0); });
    };
    DefinitionComponent.prototype._resolve = function (type, bind) {
        var _this = this;
        if (type.definition) {
            var definition_1 = this.definitions[type.definition];
            if (this.types.some(function (_) { return _.key.name == definition_1.name; }))
                return;
            this.types.push(new models.KeyValuePair(definition_1, bind));
            definition_1.properties.forEach(function (property) {
                var apiBind = Enumerable.new(bind || []).firstOrDefault(function (_) { return _.name == property.name; });
                _this._resolve(property.type, apiBind ? apiBind.bind : null);
            });
        }
        else {
            type.itemType && this._resolve(type.itemType, bind);
            type.additionalTypes && type.additionalTypes.forEach(function (t) {
                _this._resolve(t, bind);
            });
        }
    };
    DefinitionComponent.prototype.ngOnInit = function () {
        this._resolve(this.type, this.bind);
    };
    DefinitionComponent.prototype.ngOnDestroy = function () {
        this.type = null;
        this.definitions = null;
    };
    return DefinitionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", models.ApiType)
], DefinitionComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DefinitionComponent.prototype, "bind", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DefinitionComponent.prototype, "clude", void 0);
__decorate([
    Input(),
    __metadata("design:type", models.NameValueCollection)
], DefinitionComponent.prototype, "definitions", void 0);
DefinitionComponent = __decorate([
    Component({
        selector: "definition",
        templateUrl: "./definition.component.html"
    })
], DefinitionComponent);
export { DefinitionComponent };
//# sourceMappingURL=definition.component.js.map
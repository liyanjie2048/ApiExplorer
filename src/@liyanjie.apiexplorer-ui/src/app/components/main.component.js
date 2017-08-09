var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Location } from "@angular/common";
import { Component, Inject, Input, Output } from "@angular/core";
import { Enumerable } from "@liyanjie/jslinq";
import * as models from "../models";
import * as services from "../services";
var MainComponent = (function () {
    function MainComponent(requestService, location) {
        this.requestService = requestService;
        this.location = location;
    }
    MainComponent.prototype.timestamp = function (time) {
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
        }
        catch (e) { }
    };
    MainComponent.prototype._replaceUrl = function (input) {
        return input.replace(/\{/g, '_').replace(/\}/g, '').replace(/\//g, '-').replace(/\-\_/g, '_').replace(/\_\-/g, '-').replace(/\_\_/g, '_');
    };
    MainComponent.prototype.path = function (group, item) {
        return item
            ? window.location.pathname + "#" + group + "/" + this._replaceUrl(item)
            : window.location.pathname + "#" + group;
    };
    MainComponent.prototype.select = function (resource) {
        this.resource = resource;
        return true;
    };
    MainComponent.prototype.hash = function (hash) {
        return window.location.hash.substr(1).split('/').indexOf(this._replaceUrl(hash)) > -1;
    };
    MainComponent.prototype._explor = function (docUrl) {
        var _this = this;
        this.requestService
            .get(docUrl, null, { accept: "application/json" })
            .subscribe(function (response) {
            var document = response.json();
            _this.basePath = document.basePath;
            _this.info = document.info;
            _this.headers = document.headers;
            _this.resources = Enumerable.new(document.resources)
                .groupBy(function (_) { return _.groupName; })
                .groupBy(function (_) { return _.key.substring(0, _.key.indexOf('.')); })
                .select(function (_) { return ({
                groupName: _.key,
                groupList: _.select(function (__) { return ({
                    groupName: __.key.substring(__.key.indexOf('.') + 1),
                    groupList: __.toArray()
                }); }).toArray(),
            }); })
                .toArray();
            _this.definitions = Enumerable.new(document.definitions)
                .toDictionary(function (_) { return _.name; }, function (_) { return _; });
        });
    };
    MainComponent.prototype.ngOnChanges = function () {
        this.docUrl && this._explor(this.docUrl);
    };
    return MainComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], MainComponent.prototype, "section", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MainComponent.prototype, "docUrl", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MainComponent.prototype, "setParameterValue", void 0);
__decorate([
    Output(),
    __metadata("design:type", String)
], MainComponent.prototype, "basePath", void 0);
__decorate([
    Output(),
    __metadata("design:type", models.ApiInfo)
], MainComponent.prototype, "info", void 0);
__decorate([
    Output(),
    __metadata("design:type", Array)
], MainComponent.prototype, "headers", void 0);
__decorate([
    Output(),
    __metadata("design:type", models.ApiResource)
], MainComponent.prototype, "resource", void 0);
MainComponent = __decorate([
    Component({
        selector: "main",
        templateUrl: "./main.component.html"
    }),
    __param(0, Inject(services.RequestService)), __param(1, Inject(Location)),
    __metadata("design:paramtypes", [services.RequestService, Location])
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map
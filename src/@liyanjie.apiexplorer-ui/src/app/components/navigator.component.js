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
import { Component, Inject, Output } from "@angular/core";
import { Enumerable } from "@liyanjie/jslinq";
import * as models from "../models";
import * as services from "../services";
var NavigatorComponent = (function () {
    function NavigatorComponent(requestService) {
        this.requestService = requestService;
    }
    NavigatorComponent.prototype.export = function (url) {
        this.docUrl = url;
    };
    NavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService
            .get("./init.json?v=1.0.1")
            .subscribe(function (response) {
            _this.docUrls = response.json();
        }, function (error) {
            console.log(error);
        }, function () {
            var dft = Enumerable.new(_this.docUrls).firstOrDefault(function (_) { return _.default; });
            _this.docUrl = (dft || (_this.docUrls.length > 0 ? _this.docUrls[0] : new models.DocUrl())).url;
        });
    };
    return NavigatorComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", String)
], NavigatorComponent.prototype, "docUrl", void 0);
NavigatorComponent = __decorate([
    Component({
        selector: "navigator",
        templateUrl: "./navigator.component.html"
    }),
    __param(0, Inject(services.RequestService)),
    __metadata("design:paramtypes", [services.RequestService])
], NavigatorComponent);
export { NavigatorComponent };
//# sourceMappingURL=navigator.component.js.map
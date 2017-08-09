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
import { Component, Inject, Input } from "@angular/core";
import { Title } from "@angular/platform-browser";
import * as models from "../models";
var InfoComponent = (function () {
    function InfoComponent(title) {
        this.title = title;
    }
    InfoComponent.prototype.ngOnChanges = function () {
        this.info && this.title.setTitle(this.info.title);
    };
    return InfoComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", models.ApiInfo)
], InfoComponent.prototype, "info", void 0);
InfoComponent = __decorate([
    Component({
        selector: "info",
        templateUrl: "./info.component.html"
    }),
    __param(0, Inject(Title)),
    __metadata("design:paramtypes", [Title])
], InfoComponent);
export { InfoComponent };
//# sourceMappingURL=info.component.js.map
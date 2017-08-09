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
import { Component, Inject, Input, Output } from "@angular/core";
import { Enumerable } from "@liyanjie/jslinq";
import * as models from "../models";
import * as services from "../services";
var TestComponent = (function () {
    function TestComponent(requestService) {
        var _this = this;
        this.requestService = requestService;
        this.setParameterValue = function (source, name, value) {
            if (source == "Header")
                _this.header[name] = value;
            if (source == "Path")
                _this.path[name] = value;
            if (source == "Query")
                _this.query[name] = value;
            if (source == "Body")
                _this.body[name] = value;
            if (source == "Body")
                _this.body[name] = value;
            if (source == "FromUri")
                _this.path[name] = value;
            if (source == "FromBody")
                _this.body[name] = value;
        };
        this.header = {};
        this.path = {};
        this.query = {};
        this.body = {};
        this.submitting = false;
        this.consumingTime = null;
    }
    TestComponent.prototype.values = function (array) {
        return Enumerable.new(array).toString(',');
    };
    TestComponent.prototype.submit = function () {
        var _this = this;
        this.submitting = true;
        this.consumingTime = 0;
        this.consumingTimer = setInterval(function () {
            _this.consumingTime += 0.01;
        }, 10);
        var url = this.basePath + this.resource.path;
        var header = {};
        for (var key in this.header) {
            header[key] = this.header[key];
        }
        var path = {};
        for (var key in this.path) {
            path[key.toLowerCase()] = this.path[key];
        }
        var match = url.match(/{[^\s}]+}/g); //match在没有匹配的情况下返回null
        match && match.forEach(function (item) {
            var key = item.substr(1, item.length - 2).toLowerCase();
            var value = path[key];
            url = url.replace(item, value || "");
            delete path[key];
        });
        var query = {};
        for (var key in this.query) {
            query[key] = this.query[key];
        }
        for (var key in path) {
            query[key] = path[key];
        }
        var data = {};
        for (var key1 in this.body) {
            try {
                var value = this.body[key1];
                if (!/{[^{}]*}/.test(value.trim())) {
                    data[key1] = value;
                    continue;
                }
                var model = JSON.parse(value);
                for (var key2 in model) {
                    data[key2] = model[key2];
                }
            }
            catch (ex) {
                continue;
            }
        }
        this.requestService
            .send(this.resource.method, url, query, data, header)
            .subscribe(function (reponse) {
            _this.requestUrl = reponse.url;
            _this.responseCode = reponse.status.toString();
            _this.responseBody = _this._format(reponse.text());
            _this.responseHeaders = JSON.stringify(reponse.headers, null, 4);
            _this.submitting = false;
            clearInterval(_this.consumingTimer);
        }, function (error) {
            _this.requestUrl = error.url;
            _this.responseCode = error.status.toString();
            _this.responseBody = _this._format(error.text());
            _this.responseHeaders = JSON.stringify(error.headers, null, 4);
            _this.submitting = false;
            clearInterval(_this.consumingTimer);
        }, function () {
            _this.submitting = false;
            clearInterval(_this.consumingTimer);
        });
    };
    TestComponent.prototype.close = function () {
        this.section.testing = false;
        this.ngOnChanges();
    };
    TestComponent.prototype._format = function (input) {
        try {
            return JSON.stringify(JSON.parse(input), null, 4);
        }
        catch (e) {
            return input.replace('<', '&lt;').replace('>', '&gt;');
        }
    };
    TestComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.header = (_a = {}, _a["Content-Type"] = (this.resource && this.resource.produces[0]) || "application/json", _a);
        this.path = {};
        this.query = {};
        this.body = {};
        this.headers && this.headers.forEach(function (item) {
            _this.header[item.name] = Enumerable.new(item.values).toString(',');
        });
        this.resource && this.resource.parameters && this.resource.parameters.forEach(function (item) {
            if (item.defaultValue !== undefined && item.defaultValue !== null) {
                if (item.source == "Header")
                    _this.header[item.name] = item.defaultValue;
                if (item.source == "Path" || item.source == "FromUri")
                    _this.path[item.name] = item.defaultValue;
                if (item.source == "Query")
                    _this.query[item.name] = item.defaultValue;
            }
        });
        this.requestUrl = null;
        this.responseCode = null;
        this.responseBody = null;
        this.responseHeaders = null;
        this.submitting = false;
        this.consumingTime = null;
        clearInterval(this.consumingTimer);
        var _a;
    };
    return TestComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], TestComponent.prototype, "section", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TestComponent.prototype, "basePath", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TestComponent.prototype, "headers", void 0);
__decorate([
    Input(),
    __metadata("design:type", models.ApiResource)
], TestComponent.prototype, "resource", void 0);
__decorate([
    Output(),
    __metadata("design:type", Function)
], TestComponent.prototype, "setParameterValue", void 0);
TestComponent = __decorate([
    Component({
        selector: "test",
        templateUrl: "./test.component.html"
    }),
    __param(0, Inject(services.RequestService)),
    __metadata("design:paramtypes", [services.RequestService])
], TestComponent);
export { TestComponent };
//# sourceMappingURL=test.component.js.map
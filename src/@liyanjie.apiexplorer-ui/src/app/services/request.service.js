var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers, URLSearchParams, RequestOptions } from "@angular/http";
var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.get = function (url, query, headers) {
        return this.send("GET", url, query, null, headers);
    };
    RequestService.prototype.post = function (url, query, data, headers) {
        return this.send("POST", url, query, data, headers);
    };
    RequestService.prototype.put = function (url, query, data, headers) {
        return this.send("PUT", url, query, data, headers);
    };
    RequestService.prototype.patch = function (url, query, data, headers) {
        return this.send("PATCH", url, query, data, headers);
    };
    RequestService.prototype.delete = function (url, query, headers) {
        return this.send("DELETE", url, query, null, headers);
    };
    RequestService.prototype.send = function (method, url, query, data, header) {
        var options = new RequestOptions({
            method: method,
            headers: this.getHeaders(header),
            search: this.getSearch(query),
            body: this.getBody(data)
        });
        return this.http.request(url, options);
    };
    RequestService.prototype.getSearch = function (query) {
        var params = "";
        if (query) {
            for (var key in query) {
                if (key === undefined || key === null || key.length === 0) {
                    continue;
                }
                if (query.hasOwnProperty(key)) {
                    params += "&" + key + "=" + query[key];
                }
            }
        }
        return new URLSearchParams(params);
    };
    RequestService.prototype.getHeaders = function (header) {
        var headers = new Headers();
        if (header) {
            for (var key in header) {
                if (header.hasOwnProperty(key)) {
                    headers.append(key, header[key]);
                }
            }
        }
        return headers;
    };
    RequestService.prototype.getBody = function (data) {
        return data ? JSON.stringify(data) : "";
    };
    return RequestService;
}());
RequestService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], RequestService);
export { RequestService };
//# sourceMappingURL=request.service.js.map
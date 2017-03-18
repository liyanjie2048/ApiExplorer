import { Injectable } from "@angular/core";
import { Http, Headers, URLSearchParams, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { NameValueCollection } from "../models";

@Injectable()
export class RequestService {
    constructor(private http: Http) { }

    get(url: string, query?: NameValueCollection<any>, headers?: NameValueCollection<any>): Observable<Response> {
        return this.send("GET", url, query, null, headers);
    }

    post(url: string, query?: NameValueCollection<any>, data?: any, headers?: NameValueCollection<any>): Observable<Response> {
        return this.send("POST", url, query, data, headers);
    }

    put(url: string, query?: { [key: string]: any }, data?: any, headers?: NameValueCollection<any>): Observable<Response> {
        return this.send("PUT", url, query, data, headers);
    }

    patch(url: string, query?: NameValueCollection<any>, data?: any, headers?: NameValueCollection<any>): Observable<Response> {
        return this.send("PATCH", url, query, data, headers);
    }

    delete(url: string, query?: NameValueCollection<any>, headers?: NameValueCollection<any>): Observable<Response> {
        return this.send("DELETE", url, query, null, headers);
    }

    send(
        method: string,
        url: string,
        query?: NameValueCollection<any>,
        data?: any,
        header?: NameValueCollection<any>
    ): Observable<Response> {
        let options: RequestOptions = new RequestOptions({
            method: method,
            headers: this.getHeaders(header),
            search: this.getSearch(query),
            body: this.getBody(data)
        });
        return this.http.request(url, options);
    }

    private getSearch(query?: NameValueCollection<any>): URLSearchParams {
        let params: string = "";
        if (query) {
            for (let key in query) {
                if (key === undefined || key === null || key.length === 0) {
                    continue;
                }
                if (query.hasOwnProperty(key)) {
                    params += `&${key}=${query[key]}`;
                }
            }
        }
        return new URLSearchParams(params);
    }
    private getHeaders(header?: NameValueCollection<any>): Headers {
        let headers: Headers = new Headers();
        if (header) {
            for (let key in header) {
                if (header.hasOwnProperty(key)) {
                    headers.append(key, header[key]);
                }
            }
        }
        return headers;
    }
    private getBody(data: any): string {
        return data ? JSON.stringify(data) : "";
    }
}

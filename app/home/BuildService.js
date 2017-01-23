"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by stripathi1 on 1/18/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/map');
var BuildService = (function () {
    function BuildService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/build';
        this.tempUrl = "";
    }
    BuildService.prototype.doBuild = function (Project) {
        // alert("service build"+Project.url);
        /*  let body  = this.http.get('http://localhost:8080/test').map((res:Response) => res.json()).subscribe(data => {
             alert(data.status);
          });;*/
        return this.http.post(this.baseUrl, { "url": Project.url, "branch": Project.branch, "user": Project.user, "password": Project.password }).map(function (res) { return res.json(); });
        /*alert( this.http.get('http://localhost:8080/test').map((res:Response) => res.json()));
        this.http.get(this.tempUrl).map(res=>{
            alert("map");
            res.json()}).catch(this.handleerror);*/
        /* this.http
             .get(this.baseUrl+"/build?url="+url, {headers: this.getHeaders()})
             .map(this.data).catch(handleError);*/
    };
    BuildService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BuildService);
    return BuildService;
}());
exports.BuildService = BuildService;
//# sourceMappingURL=BuildService.js.map
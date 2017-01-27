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
 * Created by stripathi1 on 1/17/2017.
 */
var core_1 = require('@angular/core');
var BuildService_1 = require('./BuildService');
var HomeComponent = (function () {
    function HomeComponent(buildService) {
        this.buildService = buildService;
        this.Projects = [
            { logData: 'log', name: "Demo", "url": 'https://github.com/sntripathi01/demo.git', "branch": 'master', "user": '', "password": '', "showPass": false, "showFail": false, "showProgress": false, "isDisabled": false },
            { name: "mapstruct", "url": 'https://github.com/sntripathi01/mapstruct.git', "branch": 'master', "user": '', "password": '', "showPass": false, "showFail": false, "showProgress": false, "isDisabled": false, logData: 'log1' },
        ];
        this.buildLog = '';
        this.clickedItem = { name: "" };
    }
    HomeComponent.prototype.showLog = function (Project) {
        //alert(Project.logData +" log  "+Project.url);
        this.buildLog = Project.logData;
    };
    HomeComponent.prototype.onItemClicked = function (Project) {
        // alert(Project.url);
        Project.showProgress = true;
        Project.showPass = false;
        Project.showFail = false;
        Project.isDisabled = true;
        this.buildLog = '';
        this.buildService.doBuild(Project).subscribe(function (data) {
            //alert("Data from Service Call" +data.status)
            Project.logData = data.log;
            if (data.status == "PASS") {
                Project.showPass = true;
                Project.showProgress = false;
                Project.showFail = false;
            }
            else {
                Project.showPass = false;
                Project.showProgress = false;
                Project.showFail = true;
            }
            Project.isDisabled = false;
        });
        /*this.buildService.doBuild(Item.url).subscribe(
            davis => console.log(devis)
            );*/
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app',
            //template: `
            //     <ul>
            //   <li *ngFor="let Item of Items">
            //  <td>  {{ Item.name }}  <td>{{ Item.url }}</td>
            //  </li>
            //  </ul>
            //       <input type="text" [(ngModel)]="clickedItem.name">
            // `
            templateUrl: "app/home/home.html",
            providers: [BuildService_1.BuildService]
        }), 
        __metadata('design:paramtypes', [BuildService_1.BuildService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=HomeComponent.js.map
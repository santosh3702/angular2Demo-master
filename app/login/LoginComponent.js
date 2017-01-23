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
 * Created by stripathi1 on 1/12/2017.
 */
var core_1 = require('@angular/core');
var LoginService_1 = require('./LoginService');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(loginService, router, route) {
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.name = 'Angular bhai';
        this.invalidUserMessage = '';
    }
    LoginComponent.prototype.onSubmit = function (form) {
        //alert("Hello>");
        //  console.log('you submitted value:', form);
        this.isValidUser = this.loginService.authenticateUser(form.Username, form.Password);
        //alert("Hello>"+this.isValidUser);
        if (this.isValidUser) {
            this.invalidUserMessage = '';
            // alert("True")
            this.router.navigate(['home']);
        }
        else {
            this.invalidUserMessage = 'Invalid User';
        }
        return;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app',
            //template: `<h1>Hello {{name}}</h1>`
            templateUrl: "app/login/login.html",
            providers: [LoginService_1.LoginService]
        }), 
        __metadata('design:paramtypes', [LoginService_1.LoginService, router_1.Router, router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=LoginComponent.js.map
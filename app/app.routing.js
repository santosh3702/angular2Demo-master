"use strict";
var router_1 = require('@angular/router');
var LoginComponent_1 = require('./login/LoginComponent');
var HomeComponent_1 = require('./home/HomeComponent');
var app_component_1 = require('./app.component');
var appRoutes = [
    { path: 'login', component: LoginComponent_1.LoginComponent },
    { path: 'home', component: HomeComponent_1.HomeComponent },
    { path: 'index', component: app_component_1.AppComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
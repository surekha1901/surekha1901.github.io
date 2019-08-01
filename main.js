(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to hiii {{ title }}!\n  </h1>\n \n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n  <div class=\"col-xs-12\">\n      <h3>i am in the AppComponent </h3>\n      <hr>\n         <app-server></app-server>  \n        \n         <!-- <div app-barfa></div>  -->\n         <div class=\"app-barfa\"></div> \n\n      \n      <div><input  type=\"text\" placeholder=\"name\" [(ngModel)]=\"name\"></div>\n      <p>{{name}}</p>\n      <!-- <button  class=\"btn btn-primary\"  (click)=\"Oncreateserver()\">Add Server</button>\n      <p [innerText]=\"allowNewServer\">{{allowNewServer}}</p>\n      <p>{{serverreationStatus}}</p> -->\n\n       <app-barfa></app-barfa>\n      <app-server></app-server>  \n\n  </div>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'surekha';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: ["h3{color: dodgerblue; background-color:palegreen; padding:20px; border:1px solid red;}"]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _barfa_barfa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./barfa/barfa.component */ "./src/app/barfa/barfa.component.ts");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server/server.component */ "./src/app/server/server.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _barfa_barfa_component__WEBPACK_IMPORTED_MODULE_5__["BarfaComponent"],
                _server_server_component__WEBPACK_IMPORTED_MODULE_6__["ServerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/barfa/barfa.component.css":
/*!*******************************************!*\
  !*** ./src/app/barfa/barfa.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcmZhL2JhcmZhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/barfa/barfa.component.html":
/*!********************************************!*\
  !*** ./src/app/barfa/barfa.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  barfa works!\n</p>\n<hr>\n<app-server class=\"c1\"></app-server> \n<app-server class=\"c1\"></app-server>  -->\n<div class=\"col-md-6\">\n    <label>Server Name</label>\n    <input type=\"text\" class=\"form-control\" (input)=\"onupdateservername($event)\">\n    <!-- <p>{{servername}}</p> -->\n</div>\n<br>\n<div class=\"col-md-6\">\n    <label>Server Name</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"servername\">\n    <!-- <p>{{servername}}</p> -->\n</div>\n<br>\n\n\n<div class=\"col-md-6\">\n    <button  class=\"btn btn-primary\" [disabled]=\"!allowNewServer\" (click)=\"Oncreateserver()\">Add Server</button>\n\n    \n    <p [innerText]=\"allowNewServer\">{{allowNewServer}}</p>\n          <p>{{serverreationStatus}}</p>\n</div>\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\">\n<p>{{username}}</p>\n<button class=\"btn btn-primary\" [disabled]=\"username===''\" (click)=\"username=''\" >reset user</button>\n\n\n<div class=\"col-md-6\">\n    <label>Server Name</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"servername\">\n    <!-- <p>{{servername}}</p> -->\n</div>\n<br>\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"servername\">\n\n\n    <button  class=\"btn btn-primary\" [disabled]=\"!allowNewServer\" (click)=\"Oncreateserver()\">Add Server</button>\n\n    \n    <p [innerText]=\"allowNewServer\">{{allowNewServer}}</p>\n          <p *ngIf=\"sercreate\">Server was Created , Server was created namr! {{serverreationStatus}}</p>\n          <h3>ng tamplate</h3>\n          <p *ngIf=\"sercreate; else noserver\">Server was Created , {{serverreationStatus}}</p>\n          <ng-template #noserver>\n            <p>no server was created!</p>\n          </ng-template><br>\n           <app-server *ngFor =\"let server1 of servers\"></app-server> \n\n\n"

/***/ }),

/***/ "./src/app/barfa/barfa.component.ts":
/*!******************************************!*\
  !*** ./src/app/barfa/barfa.component.ts ***!
  \******************************************/
/*! exports provided: BarfaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarfaComponent", function() { return BarfaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BarfaComponent = /** @class */ (function () {
    function BarfaComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.serverreationStatus = 'No Server Was Created!';
        this.servername = 'test1';
        this.sercreate = false;
        this.servers1 = ['testserver1', 'testserver2'];
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    BarfaComponent.prototype.ngOnInit = function () {
    };
    BarfaComponent.prototype.Oncreateserver = function () {
        this.sercreate = true;
        this.servers1.push(this.servername);
        this.serverreationStatus = 'server was Created!name is ' + this.servername;
    };
    BarfaComponent.prototype.onupdateservername = function (event) {
        console.log(event);
        this.servername = event.target.value;
    };
    BarfaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barfa',
            // selector: '[app-barfa]',
            //selector: '.app-barfa',
            // template:`
            // <app-server></app-server>
            // <app-server></app-server>`,
            // styleUrls: ['./barfa.component.css']
            template: __webpack_require__(/*! ./barfa.component.html */ "./src/app/barfa/barfa.component.html"),
            styles: [__webpack_require__(/*! ./barfa.component.css */ "./src/app/barfa/barfa.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BarfaComponent);
    return BarfaComponent;
}());



/***/ }),

/***/ "./src/app/server/server.component.css":
/*!*********************************************!*\
  !*** ./src/app/server/server.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".onile:{color: white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVyL3NlcnZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsWUFBWSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvc2VydmVyL3NlcnZlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9uaWxlOntjb2xvcjogd2hpdGU7fSJdfQ== */"

/***/ }),

/***/ "./src/app/server/server.component.html":
/*!**********************************************!*\
  !*** ./src/app/server/server.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>this server component</h1>\r\n<p>{{'server'}} with id {{serverid}} and {{getserverStatus()}} </p>\r\n<p  [ngStyle]=\"{backgroundColor:getcolor()}\" [ngClass]=\"{online:serverStatus==='online'}\">{{'server'}} with id {{serverid}} and {{getserverStatus()}} </p>\r\n\r\n"

/***/ }),

/***/ "./src/app/server/server.component.ts":
/*!********************************************!*\
  !*** ./src/app/server/server.component.ts ***!
  \********************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.serverid = 10;
        this.serverStatus = 'offline';
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    ServerComponent.prototype.getserverStatus = function () {
        return this.serverStatus;
    };
    ServerComponent.prototype.getcolor = function () {
        return this.serverStatus === 'online' ? 'green' : 'red';
    };
    ServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server',
            template: __webpack_require__(/*! ./server.component.html */ "./src/app/server/server.component.html"),
            styles: [__webpack_require__(/*! ./server.component.css */ "./src/app/server/server.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GAUTAM\Anguler\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
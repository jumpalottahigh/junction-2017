webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-item/add-item.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Add item to storage view -->\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <h2>Add items to storage</h2>\n  <mat-form-field>\n    <input matInput placeholder=\"name\" [(ngModel)]=\"name\">\n  </mat-form-field>\n  <button mat-raised-button (click)=\"addItem()\">Add</button>\n\n  <div class=\"button-row\">\n    <button mat-fab color=\"primary\" (click)=\"takePhoto()\">Scan</button>\n\n    <input #fileInput class=\"hidden-input\" type=\"file\" accept=\"image/*\" capture=\"camera\" (change)=\"doUpload($event)\"/>\n  </div>\n\n  <div *ngIf=\"currentUpload\">\n    <progress class=\"progress is-success\" min=1 max=100 value=\"{{ currentUpload?.progress }}\"></progress>\n    Progress: {{currentUpload?.name}} | {{currentUpload?.progress}}% Complete\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-item/add-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden-input {\n  visibility: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-item/add-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_smart_store_service__ = __webpack_require__("../../../../../src/app/services/smart-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload__ = __webpack_require__("../../../../../src/app/services/upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_old_stuff_service__ = __webpack_require__("../../../../../src/app/services/old-stuff.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(db, store, old, uploadSrv) {
        this.db = db;
        this.store = store;
        this.old = old;
        this.uploadSrv = uploadSrv;
        this.humidData = null;
        this.id = '';
        this.name = '';
        this.depositeDate = '';
        this.oldStuff = null;
    }
    AddItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.collection('items').valueChanges().subscribe(function (data) {
            console.log(data);
        });
        this.store.makeRequest().subscribe(function (data) {
            _this.humidData = data.data.building.airquality;
            console.log(data);
        });
        // this.store.trackRFID()
        // // .filter(x: any => x.epc[0] != '*')
        // .subscribe(x => console.log(x));
        this.store.getMQTTEvents().subscribe(function (x) { return console.log(x); });
    };
    AddItemComponent.prototype.addItem = function (item) {
        this.db.collection('items').add({
            id: this.id,
            name: this.name,
            depositeDate: this.depositeDate
        });
        this.name = null;
    };
    AddItemComponent.prototype.takePhoto = function () {
        console.log('This takes a photo, stores to Firebase and executes cloud vision using cloud functions');
        this.fileInput.nativeElement.click();
    };
    AddItemComponent.prototype.doUpload = function (event) {
        var _this = this;
        this.selectedFiles = event.target.files;
        var file = this.selectedFiles;
        if (file && file.length === 1) {
            this.currentUpload = new __WEBPACK_IMPORTED_MODULE_2__services_upload__["a" /* Upload */](file.item(0));
            this.uploadSrv.pushUpload(this.currentUpload)
                .subscribe(function (upload) {
                console.log('upload finished!');
                setTimeout(function () {
                    _this.fileInput.nativeElement.value = '';
                    _this.currentUpload = null;
                }, 2000);
            }, function (error) {
                console.error('upload error', error);
            });
        }
        else {
            console.error('No file found!');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], AddItemComponent.prototype, "fileInput", void 0);
    AddItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__("../../../../../src/app/add-item/add-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-item/add-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_0__services_smart_store_service__["a" /* SmartStoreService */], __WEBPACK_IMPORTED_MODULE_5__services_old_stuff_service__["a" /* OldStuffService */], __WEBPACK_IMPORTED_MODULE_1__services_upload_service__["a" /* UploadService */]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n  <a mat-tab-link routerLink=\"/\" routerLinkActive=\"active\">Store</a>\n  <a mat-tab-link routerLink=\"/add\" routerLinkActive=\"active\">Add items</a>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Sell it!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http___ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_view_main_view_component__ = __webpack_require__("../../../../../src/app/main-view/main-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_smart_store_service__ = __webpack_require__("../../../../../src/app/services/smart-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_old_stuff_service__ = __webpack_require__("../../../../../src/app/services/old-stuff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_item_add_item_component__ = __webpack_require__("../../../../../src/app/add-item/add-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__main_view_main_view_component__["a" /* MainViewComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_18__add_item_add_item_component__["a" /* AddItemComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__main_view_main_view_component__["a" /* MainViewComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__main_view_main_view_component__["a" /* MainViewComponent */],
                __WEBPACK_IMPORTED_MODULE_18__add_item_add_item_component__["a" /* AddItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http___["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng_socket_io__["SocketIoModule"].forRoot({ url: 'http://balabanovo.westeurope.cloudapp.azure.com' }),
                __WEBPACK_IMPORTED_MODULE_17__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_smart_store_service__["a" /* SmartStoreService */],
                __WEBPACK_IMPORTED_MODULE_14__services_old_stuff_service__["a" /* OldStuffService */],
                __WEBPACK_IMPORTED_MODULE_13__services_upload_service__["a" /* UploadService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Old stuff notification -->\n<div *ngIf=\"oldStuff\" class=\"poptext m-t\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <h2>You have some items in your storage for more then a year!</h2>\n  <mat-list fxLayout=\"column\" fxLayoutAlign=\"start center\">\n    <mat-list-item *ngFor=\"let item of oldStuff\">{{item?.name}}</mat-list-item>\n  </mat-list>\n</div>\n<!-- Helvar integration notification -->\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <p>Lights color:</p>\n</div>\n<!-- Storage room state view -->\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <h2>Storage room state (last 24 hours)</h2>\n  <mat-card *ngFor=\"let humid of humidData\">\n    <mat-card-title class=\"row\">\n      <strong>Date:</strong>\n      <span>{{humid.timestamp | date:'medium'}}</span>\n    </mat-card-title>\n    <mat-card-content class=\"row\">\n      Humidity: {{humid.humidity | number: '1.1-2'}}\n      Light: {{humid.light | number: '1.1-2'}}\n      Motion: {{humid.motion | number: '1.1-2'}}\n      Temperature: {{humid.temperature | number: '1.1-2'}}\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poptext {\n  background-color: azure; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_smart_store_service__ = __webpack_require__("../../../../../src/app/services/smart-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_old_stuff_service__ = __webpack_require__("../../../../../src/app/services/old-stuff.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainViewComponent = /** @class */ (function () {
    function MainViewComponent(db, store, old, uploadSrv) {
        this.db = db;
        this.store = store;
        this.old = old;
        this.uploadSrv = uploadSrv;
        this.humidData = null;
        this.oldStuff = null;
    }
    MainViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.old.check().subscribe(function (oldStuff) {
            _this.oldStuff = oldStuff;
        });
        this.store.makeRequest().subscribe(function (data) {
            _this.humidData = data.data.building.airquality;
            console.log(data);
        });
        // this.store.trackRFID()
        // // .filter(x: any => x.epc[0] != '*')
        // .subscribe(x => console.log(x));
        this.store.getMQTTEvents().subscribe(function (x) { return console.log(x); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], MainViewComponent.prototype, "fileInput", void 0);
    MainViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__("../../../../../src/app/main-view/main-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-view/main-view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_0__services_smart_store_service__["a" /* SmartStoreService */], __WEBPACK_IMPORTED_MODULE_4__services_old_stuff_service__["a" /* OldStuffService */], __WEBPACK_IMPORTED_MODULE_1__services_upload_service__["a" /* UploadService */]])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/old-stuff.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldStuffService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OldStuffService = /** @class */ (function () {
    function OldStuffService(db) {
        this.db = db;
    }
    OldStuffService.prototype.check = function () {
        // TODO:
        // This is how to use the Helvar API
        // GET request using these values
        // device = 0, 3, 8
        // level = 225
        // x = 1, y = 0 - red
        // https://private-anon-280c1bb1d3-junctionhelvar2017.apiary-mock.com/v1/command?device=3&level=155&colour_x=1&colour_y=0
        var _this = this;
        // Headers:
        // 'Content-Type', 'application/json'
        // 'Accept', 'application/json'
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.db.collection('items').valueChanges()
                .subscribe(function (items) {
                var old = [];
                items.forEach(function (item) {
                    if (item.depositeDate > (new Date().setFullYear(new Date().getFullYear() - 1))) {
                        old.push(item);
                    }
                });
                observer.next(old);
            });
        });
    };
    OldStuffService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], OldStuffService);
    return OldStuffService;
}());



/***/ }),

/***/ "../../../../../src/app/services/smart-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mqtt__ = __webpack_require__("../../../../mqtt/lib/connect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mqtt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mqtt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SmartStoreService = /** @class */ (function () {
    function SmartStoreService(http, socket) {
        var _this = this;
        this.http = http;
        this.socket = socket;
        this.url = 'https://woodcityapiqa.azurewebsites.net/api/v1/GraphQL';
        this.client = null;
        this.mqttEvent = new __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__["ReplaySubject"]();
        this.mqttArr = [];
        this.mqttEvents = new __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__["ReplaySubject"]();
        this.client = __WEBPACK_IMPORTED_MODULE_1_mqtt__["connect"]({
            host: 'mqtt.intelligentpackaging.online',
            port: 9001
        });
        this.client.on('connect', function () {
            'Junction.2017.3';
            // this.client.subscribe('location/+/tagEntered');
            // this.client.subscribe('location/+/tagLeft');
            _this.client.subscribe('location/Junction.2017.1/tagEntered');
            _this.client.subscribe('location/Junction.2017.1/tagLeft');
            _this.client.subscribe('location/Junction.2017.2/tagEntered');
            _this.client.subscribe('location/Junction.2017.2/tagLeft');
            _this.client.subscribe('location/Junction.2017.3/tagEntered');
            _this.client.subscribe('location/Junction.2017.3/tagLeft');
            _this.client.subscribe('nfc/scan');
        });
        this.client.on('message', function (topic, message) {
            message = message.toStrig();
            _this.mqttEvent.next({ topic: topic, message: message });
            _this.mqttArr = _this.mqttArr.concat([{ topic: topic, message: message }]);
            _this.mqttEvents.next(_this.mqttArr);
        });
        this.mqttEvents.scan(function (agg, val, _a) {
            return agg.concat([val]);
        });
    }
    SmartStoreService.prototype.getMQTTEvents = function () {
        return this.mqttEvents;
    };
    SmartStoreService.prototype.makeRequest = function () {
        var query = {
            query: "\n        query {\n        building(id: \"Junction2017\") {\n          airquality(for: \"24h\", groupby: \"1h\") {\n            co2\n            humidity\n            light\n            motion\n            temperature\n            vOC\n            timestamp\n          }\n        }\n      }"
        };
        var body = JSON.stringify(query);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        // return null;
        return this.http.post(this.url, body, { headers: headers });
    };
    SmartStoreService.prototype.trackRFID = function () {
        return this.socket.fromEvent('inventory')
            .filter(function (x) { return x.macAddress === '00:16:25:12:16:4F' && x.orderedRecords[0].epc[0] !== '*'; })
            .map(function (x) { return x.orderedRecords; });
    };
    SmartStoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ng_socket_io__["Socket"]])
    ], SmartStoreService);
    return SmartStoreService;
}());



/***/ }),

/***/ "../../../../../src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = /** @class */ (function () {
    function UploadService(db) {
        this.db = db;
        this.basePath = 'uploads';
    }
    UploadService.prototype.getUploads = function () {
        this.uploads = this.db.list(this.basePath).snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.val();
                var $key = a.payload.key;
                return __assign({ $key: $key }, data);
            });
        });
        return this.uploads;
    };
    UploadService.prototype.deleteUpload = function (upload) {
        var _this = this;
        this.deleteFileData(upload.$key)
            .then(function () {
            _this.deleteFileStorage(upload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files
    UploadService.prototype.pushUpload = function (upload) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            console.log('do the upload!', upload);
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + upload.file.name).put(upload.file);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                // upload in progress
                var snap = snapshot;
                upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
            }, function (error) {
                // upload failed
                console.log(error);
                observer.error(error);
                observer.complete();
            }, function () {
                // upload success
                if (uploadTask.snapshot.downloadURL) {
                    upload.url = uploadTask.snapshot.downloadURL;
                    upload.name = upload.file.name;
                    _this.saveFileData(upload);
                    observer.next(upload);
                    observer.complete();
                    return;
                }
                else {
                    console.error('No download URL!');
                    observer.error('No download URL!');
                    observer.complete();
                }
            });
        });
    };
    // Writes the file details to the realtime db
    UploadService.prototype.saveFileData = function (upload) {
        this.db.list(this.basePath + "/").push(upload);
    };
    // Writes the file details to the realtime db
    UploadService.prototype.deleteFileData = function (key) {
        return this.db.list(this.basePath + "/").remove(key);
    };
    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    UploadService.prototype.deleteFileStorage = function (name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/services/upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = /** @class */ (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCSQuDt3Iln5yQ8dqRhefvV5HWq07vDQzk',
        authDomain: '<your-project-authdomain>',
        databaseURL: 'https://junction-2017.firebaseio.com/',
        projectId: 'junction-2017',
        storageBucket: 'junction-2017.appspot.com',
        messagingSenderId: '<your-messaging-sender-id>'
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
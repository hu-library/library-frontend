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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_view_search_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search-view/search-view.component */ "./src/app/components/search-view/search-view.component.ts");
/* harmony import */ var _components_resolution_resolution_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/resolution/resolution.component */ "./src/app/components/resolution/resolution.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: ':card', component: _components_search_view_search_view_component__WEBPACK_IMPORTED_MODULE_3__["SearchViewComponent"] },
    { path: ':card/resolve', component: _components_resolution_resolution_component__WEBPACK_IMPORTED_MODULE_4__["ResolutionComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_search_view_search_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-view/search-view.component */ "./src/app/components/search-view/search-view.component.ts");
/* harmony import */ var _components_searched_before_searched_before_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/searched-before/searched-before.component */ "./src/app/components/searched-before/searched-before.component.ts");
/* harmony import */ var _components_not_searched_before_not_searched_before_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/not-searched-before/not-searched-before.component */ "./src/app/components/not-searched-before/not-searched-before.component.ts");
/* harmony import */ var _components_resolution_resolution_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/resolution/resolution.component */ "./src/app/components/resolution/resolution.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_searched_before_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/searched-before/checkbox/checkbox.component */ "./src/app/components/searched-before/checkbox/checkbox.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/effects */ "./src/app/store/effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular




// Routing

// Components









// ngrx/store





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                _components_search_view_search_view_component__WEBPACK_IMPORTED_MODULE_8__["SearchViewComponent"],
                _components_searched_before_searched_before_component__WEBPACK_IMPORTED_MODULE_9__["SearchedBeforeComponent"],
                _components_not_searched_before_not_searched_before_component__WEBPACK_IMPORTED_MODULE_10__["NotSearchedBeforeComponent"],
                _components_resolution_resolution_component__WEBPACK_IMPORTED_MODULE_11__["ResolutionComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_searched_before_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__["CheckboxComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_17__["reducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"].instrument({ maxAge: 50 }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forRoot([_store_effects__WEBPACK_IMPORTED_MODULE_18__["AuthEffects"]])
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\" id=\"{{className}}\">\n        <button class=\"btn btn-lg {{buttonColor}}\" data-toggle=\"collapse\" attr.data-target=\"#{{textName}}\"\n            aria-expanded=\"true\" [attr.aria-controls]=\"textName\">\n            {{title}} <span *ngIf=\"books.length > 0\" class=\"badge {{badgeColor}}\">{{books.length}}</span>\n        </button>\n    </div>\n\n    <div id=\"{{textName}}\" class=\"collapse\" [attr.aria-labelledby]=\"className\" attr.data-parent=\"#{{className}}\">\n        <div class=\"card-body\">\n            <span *ngIf=\"books.length > 0\">\n                <table class=\"table table-striped table-dark\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Call Number</th>\n                            <span *ngIf=\"className !== 'Inventory'\">\n                                <th class=\"author\" scope=\"col\">Author</th>\n                            </span>\n                            <th class=\"title\" scope=\"col\">Title</th>\n                            <th class=\"searchStatus\" scope=\"col\">Status</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let book of books\" class=\"cursor-pointer\" (click)=\"redirect(book)\">\n                            <th scope=\"row\">{{book.callNumber}}</th>\n                            <span *ngIf=\"className !== 'Inventory'\">\n                                <td class=\"author\">{{book.author}}</td>\n                            </span>\n                            <td class=\"title\">{{book.title}}</td>\n                            <span *ngIf=\"className === 'Inventory'\">\n                                <td class=\"searchStatus\">{{book.status}}</td>\n                            </span>\n                            <span *ngIf=\"className !== 'Inventory'\">\n                                <td class=\"searchStatus\">{{book.searchStatus}}</td>\n                            </span>\n                        </tr>\n                    </tbody>\n                </table>\n            </span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: inherit; }\n\n.card-body {\n  padding: 0 !important; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\n.cursor-pointer:hover {\n  background-color: #555; }\n\n.table-dark {\n  border-radius: 5px; }\n\n@media screen and (min-width: 600px) {\n  button {\n    max-width: 50%;\n    display: block;\n    width: 100%;\n    margin-left: 25%; } }\n\n@media not screen and (min-width: 600px) {\n  .author {\n    display: none; } }\n\n@media not screen and (min-width: 600px) {\n  button {\n    width: 85%;\n    margin-left: 7.5%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL0M6XFxVc2Vyc1xcbGlic3R1ZGVudDJcXERvY3VtZW50c1xcY29kZVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxzQkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksZUFBYztJQUNkLGVBQWM7SUFDZCxZQUFXO0lBQ1gsaUJBQWdCLEVBQ25CLEVBQUE7O0FBSUQ7RUFESjtJQUVRLGNBQWEsRUFFcEIsRUFBQTs7QUFFRDtFQUNJO0lBQ0ksV0FBVTtJQUNWLGtCQUFpQixFQUNwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1cnNvci1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY3Vyc29yLXBvaW50ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxufVxyXG4udGFibGUtZGFyayB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gICAgQG1lZGlhIG5vdCBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG5vdCBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcuNSU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardComponent = /** @class */ (function () {
    function CardComponent(store, router, configService) {
        this.store = store;
        this.router = router;
        this.configService = configService;
        this.books = [];
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setUpCard();
        if (this.title) {
            switch (this.title) {
                case 'Requested By Patron':
                    this.books$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getRequestedByPatronBooks"]);
                    break;
                case 'Ongoing':
                    this.books$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getOngoingBooks"]);
                    break;
                case 'Inventory':
                    this.inventoryBooks$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getInventoryBooks"]);
                    this.books = [];
                    break;
                case 'Follow Up':
                    this.books$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getFollowUpBooks"]);
                    break;
                case 'Awaiting Librarian Decision':
                    this.books$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getAwaitingDecisionBooks"]);
                    break;
                case 'Searched But Not Found':
                    this.books$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getMissingBooks"]);
                    break;
            }
            if (this.title === 'Requested By Patron' ||
                this.title === 'Inventory' ||
                this.title === 'Awaiting Librarian Decision') {
                this.buttonColor = 'btn-info';
                this.badgeColor = 'badge-primary';
            }
            else if (this.title === 'Ongoing' ||
                this.title === 'Follow Up' || this.title === 'Searched But Not Found') {
                this.buttonColor = 'btn-primary';
                this.badgeColor = 'badge-success';
            }
        }
        if (this.books$) {
            this.books$.subscribe(function (books) { return _this.books = books; });
        }
        if (this.inventoryBooks$) {
            this.inventoryBooks$.subscribe(function (books) {
                _this.books = books;
            });
        }
    };
    CardComponent.prototype.redirect = function (book) {
        if (this.configService.isBook(book)) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_4__["SelectBookAction"](book));
            // remove parentheses from url because it breaks routing
            book.urlID = book.urlID.replace(/(\(|\))/g, '');
            this.router.navigateByUrl('/' + book.urlID);
        }
        else {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_4__["SelectInventoryBookAction"](book));
        }
    };
    CardComponent.prototype.setUpCard = function () {
        var title = this.title;
        this.className = title.replace(/\s+/g, '');
        this.textName = this.className + 'Text';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion homepage\">\n    <div *ngFor=\"let name of buttonNames\">\n        <app-card [title]=\"name\"></app-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homepage {\n  height: 100%; }\n  @media screen and (min-width: 600px) {\n    .homepage {\n      padding-top: 7.5%; } }\n  @media not screen and (min-width: 600px) {\n    .homepage {\n      padding-top: 20%; } }\n  button {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcbGlic3R1ZGVudDJcXERvY3VtZW50c1xcY29kZVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBUWI7RUFQQztJQUZGO01BR0ksa0JBQWlCLEVBTXBCLEVBQUE7RUFIQztJQU5GO01BT0ksaUJBQWdCLEVBRW5CLEVBQUE7RUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVwYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiA3LjUlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgbm90IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(store) {
        this.store = store;
        this.buttonNames = _config__WEBPACK_IMPORTED_MODULE_4__["buttonNames"];
        this.selectedBook$ = store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getSelectedBook"]);
        this.selectedInventoryBook$ = store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getSelectedInventoryBook"]);
        store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["ReloadBooksAction"]());
        store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["LoadInventoryAction"]());
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <span class=\"navbar-brand nav-link\" (click)=\"goHome()\" routerLink=\"/\" style=\"margin-right: auto\">Home</span>\n  <span *ngIf=\"showSave\" class=\"nav-link\">\n    <span (click)=\"save()\">\n      Save\n    </span>\n  </span>\n</nav> "

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxsaWJzdHVkZW50MlxcRG9jdW1lbnRzXFxjb2RlXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(store, config, httpService, router) {
        this.store = store;
        this.config = config;
        this.httpService = httpService;
        this.router = router;
        this.selectedBook$ = store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getSelectedBook"]);
        this.selectedInventoryBook$ = store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getSelectedInventoryBook"]);
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.selectedBook$) {
            this.selectedBook$.subscribe(function (book) {
                _this.selectedBook = book;
                if (book && book.searchedLocations) {
                    _this.showSave = _this.config.checkMapForAnyTrue(book.searchedLocations);
                }
            });
        }
        if (this.selectedInventoryBook$) {
            this.selectedInventoryBook$.subscribe(function (book) { return _this.selectedInventoryBook = book; });
        }
    };
    NavbarComponent.prototype.save = function () {
        this.httpService.saveSearchedLocations(this.selectedBook).subscribe();
    };
    NavbarComponent.prototype.goHome = function () {
        if (this.selectedBook) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_6__["SelectBookAction"]());
        }
        if (this.selectedInventoryBook) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_6__["SelectInventoryBookAction"]());
        }
        this.router.navigateByUrl('/');
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-searched-before/not-searched-before.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/not-searched-before/not-searched-before.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-col-4\">\n\n</div>\n<div class=\"md-col-4\" *ngIf=\"book\">\n  <div class=\"card-title text-center\">Status: {{book.searchStatus}}</div>\n  <div class=\"card-title text-center\">Search Count: {{book.searchCount}}</div>\n  <div class=\"card-title text-center\">Urgency: {{book.urgency}}</div>\n  <button class=\"btn btn-large\" (click)=\"beginSearching()\">Begin Search</button>\n</div>\n<div class=\"md-col-4\">\n\n</div>"

/***/ }),

/***/ "./src/app/components/not-searched-before/not-searched-before.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/not-searched-before/not-searched-before.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  display: block;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3Qtc2VhcmNoZWQtYmVmb3JlL0M6XFxVc2Vyc1xcbGlic3R1ZGVudDJcXERvY3VtZW50c1xcY29kZVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5vdC1zZWFyY2hlZC1iZWZvcmVcXG5vdC1zZWFyY2hlZC1iZWZvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LXNlYXJjaGVkLWJlZm9yZS9ub3Qtc2VhcmNoZWQtYmVmb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/components/not-searched-before/not-searched-before.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/not-searched-before/not-searched-before.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NotSearchedBeforeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSearchedBeforeComponent", function() { return NotSearchedBeforeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotSearchedBeforeComponent = /** @class */ (function () {
    function NotSearchedBeforeComponent(store, httpService) {
        this.store = store;
        this.httpService = httpService;
        this.book$ = store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getSelectedBook"]);
    }
    NotSearchedBeforeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.book$.subscribe(function (book) { return _this.book = book; });
    };
    NotSearchedBeforeComponent.prototype.beginSearching = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["StartBookSearchAction"](this.book.callNumber));
        this.httpService.updateStatus(this.book, false);
    };
    NotSearchedBeforeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-searched-before',
            template: __webpack_require__(/*! ./not-searched-before.component.html */ "./src/app/components/not-searched-before/not-searched-before.component.html"),
            styles: [__webpack_require__(/*! ./not-searched-before.component.scss */ "./src/app/components/not-searched-before/not-searched-before.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], NotSearchedBeforeComponent);
    return NotSearchedBeforeComponent;
}());



/***/ }),

/***/ "./src/app/components/resolution/resolution.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/resolution/resolution.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\" *ngIf=\"book\">\n    <h5 class=\"card-title\">{{book.title}}</h5>\n    <h5 class=\"card-title\">{{book.author}}</h5>\n    <h5 class=\"card-title\">{{book.callNumber}}</h5>\n    <span *ngIf=\"book.searchStatus !== 'Found'\">\n      <div [ngClass]=\"[buttonCSS]\">\n        <div *ngFor=\"let button of buttons\">\n          <label><input type=\"radio\" name=\"action\" [value]=\"button.action\" [(ngModel)]=\"buttonValue\"> {{button.name}}</label>\n        </div>\n      </div>\n    </span>\n\n    <div *ngIf=\"book.searchStatus === 'Found'\" class=\"card-title text-center\">\n      <label>Location found: <br><input type=\"text\" [(ngModel)]=\"foundLocation\" class=\"form-control\"></label>\n    </div>\n\n    <div *ngIf=\"book.patron\" class=\"wanted-by\">\n      <div class=\"card-body\">\n        <h6 class=\"card-title text-center\">Wanted by Patron:</h6>\n        <h6 *ngIf=\"checkPatronInfo('name')\" class=\"card-title text-center\">{{book.patron.name}}</h6>\n        <h6 *ngIf=\"checkPatronInfo('hNumber')\" class=\"card-title text-center\">H-Number: {{book.patron.hNumber}}</h6>\n        <h6 *ngIf=\"checkPatronInfo('email')\" class=\"card-title text-center\">{{book.patron.email}}</h6>\n      </div>\n    </div>\n\n    <button class=\"btn btn-large\" (click)=\"updateStatus()\">\n      {{book.searchStatus === 'Found' ? 'Home' : 'Submit'}}\n    </button>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/resolution/resolution.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/resolution/resolution.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: #555;\n  border-radius: 35px; }\n  @media screen and (min-width: 600px) {\n    .card {\n      width: 50%;\n      margin-left: 25%;\n      margin-top: 10%; } }\n  @media not screen and (min-width: 600px) {\n    .card {\n      width: 75%;\n      margin-left: 12.5%;\n      margin-top: 20%; } }\n  .buttons {\n  padding-left: 15%;\n  padding-top: 5%; }\n  .btn {\n  display: block;\n  margin: 0 auto; }\n  label {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .wanted-by {\n  background-color: #888;\n  margin-top: 0;\n  margin-bottom: .75rem;\n  border-radius: 35px; }\n  @media screen and (min-width: 600px) {\n    .wanted-by {\n      margin-right: 25%;\n      margin-left: 25%; } }\n  .invalid-buttons {\n  color: indianred; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvbHV0aW9uL0M6XFxVc2Vyc1xcbGlic3R1ZGVudDJcXERvY3VtZW50c1xcY29kZVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlc29sdXRpb25cXHJlc29sdXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBc0I7RUFXdEIsb0JBQW1CLEVBQ3RCO0VBWEc7SUFGSjtNQUdRLFdBQVU7TUFDVixpQkFBZ0I7TUFDaEIsZ0JBQWUsRUFRdEIsRUFBQTtFQU5HO0lBUEo7TUFRUSxXQUFVO01BQ1YsbUJBQWtCO01BQ2xCLGdCQUFlLEVBR3RCLEVBQUE7RUFDRDtFQUNJLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQjtFQUNEO0VBQ0ksZUFBYztFQUNkLGVBQWMsRUFDakI7RUFFRDtFQUNJLDRCQUEyQjtFQUMzQiwwQkFBeUI7RUFFekIsdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQixrQkFBaUIsRUFDcEI7RUFDRDtFQUNJLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLG9CQUFtQixFQUt0QjtFQUpHO0lBTEo7TUFNUSxrQkFBaUI7TUFDakIsaUJBQWdCLEVBRXZCLEVBQUE7RUFFRDtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb2x1dGlvbi9yZXNvbHV0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIH1cbiAgICBAbWVkaWEgbm90IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgfVxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG59XG4uYnV0dG9ucyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gICAgcGFkZGluZy10b3A6IDUlO1xufVxuLmJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmxhYmVsIHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ud2FudGVkLWJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgfVxufVxuXG4uaW52YWxpZC1idXR0b25zIHtcbiAgICBjb2xvcjogaW5kaWFucmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/resolution/resolution.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/resolution/resolution.component.ts ***!
  \***************************************************************/
/*! exports provided: ResolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolutionComponent", function() { return ResolutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResolutionComponent = /** @class */ (function () {
    function ResolutionComponent(store, http, router) {
        this.store = store;
        this.http = http;
        this.router = router;
        this.buttons = _config__WEBPACK_IMPORTED_MODULE_5__["buttons"];
        this.selectedBook$ = store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getSelectedBook"]);
    }
    ResolutionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedBook$.subscribe(function (book) {
            if (!book) {
                _this.router.navigateByUrl('/');
            }
            _this.book = book;
        });
        this.buttonCSS = 'card-title buttons';
    };
    ResolutionComponent.prototype.checkPatronInfo = function (id) {
        if (id === 'name') {
            var name_1 = this.book.patron.name;
            return name_1 !== 'UNKNOWN' && name_1 !== '' && name_1 !== 'N/A';
        }
        else if (id === 'hNumber') {
            var num = this.book.patron.hNumber;
            return num !== 'UNKNOWN' && num !== '' && num !== 'N/A';
        }
        else if (id === 'email') {
            var email = this.book.patron.email;
            return email !== 'UNKNOWN' && email !== '' && email !== 'N/A';
        }
    };
    ResolutionComponent.prototype.updateStatus = function () {
        var _this = this;
        if (this.buttonValue && this.foundLocation) {
            if (this.buttonValue === 'Librarian decision') {
                this.http.librarianDecision(this.book);
                this.book.searchStatus = 'Stop searching';
            }
            else if (this.buttonValue === 'Look again') {
                this.http.lookAgain(this.book);
                this.book.searchStatus = 'Delay searching';
            }
        }
        else if (this.book.searchStatus === 'Found') {
            this.http.setFoundLocation(this.book, this.foundLocation);
            this.http.updateStatus(this.book);
        }
        else {
            this.buttonCSS += ' invalid-buttons';
            setTimeout(function () {
                _this.buttonCSS = 'card-title buttons';
            }, 500);
        }
    };
    ResolutionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resolution',
            template: __webpack_require__(/*! ./resolution.component.html */ "./src/app/components/resolution/resolution.component.html"),
            styles: [__webpack_require__(/*! ./resolution.component.scss */ "./src/app/components/resolution/resolution.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ResolutionComponent);
    return ResolutionComponent;
}());



/***/ }),

/***/ "./src/app/components/search-view/search-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/search-view/search-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <span *ngIf=\"book\">\n      <h5 class=\"card-title\">{{book.title}}</h5>\n      <h5 class=\"card-title\">{{book.author}}</h5>\n      <h5 class=\"card-title\">{{book.callNumber}}</h5>\n      <div *ngIf=\"book.searchCount > 0\">\n        <app-searched-before></app-searched-before>\n      </div>\n      <div *ngIf=\"book.searchCount == 0\">\n        <app-not-searched-before></app-not-searched-before>\n      </div>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/search-view/search-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/search-view/search-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: #555;\n  border-radius: 35px; }\n  @media screen and (min-width: 600px) {\n    .card {\n      width: 50%;\n      margin-left: 25%;\n      margin-top: 10%; } }\n  @media not screen and (min-width: 600px) {\n    .card {\n      width: 75%;\n      margin-left: 12.5%;\n      margin-top: 20%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtdmlldy9DOlxcVXNlcnNcXGxpYnN0dWRlbnQyXFxEb2N1bWVudHNcXGNvZGVcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWFyY2gtdmlld1xcc2VhcmNoLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBc0I7RUFXdEIsb0JBQW1CLEVBQ3RCO0VBWEc7SUFGSjtNQUdRLFdBQVU7TUFDVixpQkFBZ0I7TUFDaEIsZ0JBQWUsRUFRdEIsRUFBQTtFQU5HO0lBUEo7TUFRUSxXQUFVO01BQ1YsbUJBQWtCO01BQ2xCLGdCQUFlLEVBR3RCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC12aWV3L3NlYXJjaC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIH1cbiAgICBAbWVkaWEgbm90IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgfVxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/search-view/search-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-view/search-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchViewComponent", function() { return SearchViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchViewComponent = /** @class */ (function () {
    function SearchViewComponent(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
        this.selectedBook$ = store.select(_store__WEBPACK_IMPORTED_MODULE_3__["getSelectedBook"]);
    }
    SearchViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedBook$.subscribe(function (book) {
            if (!book) {
                _this.router.navigateByUrl('/');
            }
            _this.book = book;
        });
    };
    SearchViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-view',
            template: __webpack_require__(/*! ./search-view.component.html */ "./src/app/components/search-view/search-view.component.html"),
            styles: [__webpack_require__(/*! ./search-view.component.scss */ "./src/app/components/search-view/search-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchViewComponent);
    return SearchViewComponent;
}());



/***/ }),

/***/ "./src/app/components/searched-before/checkbox/checkbox.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/searched-before/checkbox/checkbox.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td>\n  <input type=\"checkbox\" style=\"text-align: center\" id=\"{{name}}\" [checked]=\"searchedLocations.get(name)\" (change)=\"checkboxChanged()\">\n</td>\n<td><label for=\"{{name}}\">{{name}}</label></td>\n<!-- &nbsp;{{name}}&nbsp; -->"

/***/ }),

/***/ "./src/app/components/searched-before/checkbox/checkbox.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/searched-before/checkbox/checkbox.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hlZC1iZWZvcmUvY2hlY2tib3gvQzpcXFVzZXJzXFxsaWJzdHVkZW50MlxcRG9jdW1lbnRzXFxjb2RlXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VhcmNoZWQtYmVmb3JlXFxjaGVja2JveFxcY2hlY2tib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBMkI7RUFDM0IsMEJBQXlCO0VBRXpCLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hlZC1iZWZvcmUvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/searched-before/checkbox/checkbox.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/searched-before/checkbox/checkbox.component.ts ***!
  \***************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/app/store/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions */ "./src/app/store/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(store) {
        this.store = store;
        this.searchedLocations$ = store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getSearchedLocations"]);
        this.searchedLocations = new Map();
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchedLocations$.subscribe(function (locations) {
            if (locations) {
                _this.searchedLocations = locations;
                _this.allCheckBoxes = true;
                _this.searchedLocations.forEach(function (value, key) {
                    if (value === false) {
                        _this.allCheckBoxes = false;
                    }
                });
            }
        });
    };
    CheckboxComponent.prototype.checkboxChanged = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["SearchedLocationAction"](this.name));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "name", void 0);
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/components/searched-before/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/components/searched-before/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/components/searched-before/searched-before.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/searched-before/searched-before.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-col-4\" *ngIf=\"book\">\n  <div class=\"card-title text-center\">Status: {{book.searchStatus}}</div>\n  <div class=\"card-title text-center\">Search Count: {{book.searchCount}}</div>\n  <div class=\"card-title text-center\">Urgency: {{book.urgency}}</div>\n  <div>\n    <table>\n      <tr *ngFor=\"let name of names\">\n        <app-checkbox [name]=\"name\"></app-checkbox>\n      </tr>\n    </table>\n    <button class=\"btn btn-large mb-1\" (click)=\"found()\">Found</button>\n    <button *ngIf=\"allChecked\" class=\"btn btn-large\" (click)=\"stopSearching()\">Stop Search</button>\n  </div>"

/***/ }),

/***/ "./src/app/components/searched-before/searched-before.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/searched-before/searched-before.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  display: block;\n  margin: 0 auto; }\n\nlabel {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n@media screen and (min-width: 600px) {\n  div input[type=text] {\n    width: 50%;\n    margin-left: 25%; }\n  table {\n    margin-left: 35%; } }\n\n@media not screen and (min-width: 600px) {\n  table {\n    margin-left: 25%; } }\n\n.ml-25 {\n  margin-left: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hlZC1iZWZvcmUvQzpcXFVzZXJzXFxsaWJzdHVkZW50MlxcRG9jdW1lbnRzXFxjb2RlXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VhcmNoZWQtYmVmb3JlXFxzZWFyY2hlZC1iZWZvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLDRCQUEyQjtFQUMzQiwwQkFBeUI7RUFFekIsdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSTtJQUVRLFdBQVU7SUFDVixpQkFBZ0IsRUFDbkI7RUFFTDtJQUNJLGlCQUFnQixFQUNuQixFQUFBOztBQUVMO0VBQ0k7SUFDSSxpQkFBZ0IsRUFDbkIsRUFBQTs7QUFHTDtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoZWQtYmVmb3JlL3NlYXJjaGVkLWJlZm9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5sYWJlbCB7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIGRpdiB7XG4gICAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFibGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzUlO1xuICAgIH1cbn1cbkBtZWRpYSBub3Qgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIHRhYmxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICB9XG59XG5cbi5tbC0yNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/searched-before/searched-before.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/searched-before/searched-before.component.ts ***!
  \*************************************************************************/
/*! exports provided: SearchedBeforeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchedBeforeComponent", function() { return SearchedBeforeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchedBeforeComponent = /** @class */ (function () {
    function SearchedBeforeComponent(store, router, config, http) {
        this.store = store;
        this.router = router;
        this.config = config;
        this.http = http;
        this.names = _config__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.book$ = store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getSelectedBook"]);
        this.allChecked$ = store.select(_store__WEBPACK_IMPORTED_MODULE_2__["lookedEverywhere"]);
    }
    SearchedBeforeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.book$.subscribe(function (book) {
            _this.book = book;
            if (book && book.searchedLocations) {
                _this.allChecked = _this.config.checkMapForAllTrue(book.searchedLocations);
            }
        });
    };
    SearchedBeforeComponent.prototype.stopSearching = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["StopBookSearchAction"](this.book.callNumber));
        this.router.navigateByUrl('/' + this.book.urlID + '/resolve');
    };
    SearchedBeforeComponent.prototype.found = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["FoundBookAction"](this.book.callNumber));
        this.router.navigateByUrl('/' + this.book.urlID + '/resolve');
        this.http.updateStatus(this.book, false);
    };
    SearchedBeforeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searched-before',
            template: __webpack_require__(/*! ./searched-before.component.html */ "./src/app/components/searched-before/searched-before.component.html"),
            styles: [__webpack_require__(/*! ./searched-before.component.scss */ "./src/app/components/searched-before/searched-before.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"], _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]])
    ], SearchedBeforeComponent);
    return SearchedBeforeComponent;
}());



/***/ }),

/***/ "./src/app/config/index.ts":
/*!*********************************!*\
  !*** ./src/app/config/index.ts ***!
  \*********************************/
/*! exports provided: searchLocations, default, buttonNames, buttons, backendLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchLocations", function() { return searchLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonNames", function() { return buttonNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backendLocation", function() { return backendLocation; });
var dev = true;
var searchLocations = [
    'Home',
    'Reshelving Carts',
    'Surrounding Area',
    'Circulation Desk',
    'Bestsellers',
    'Reference',
    'Reserve',
    'Christian Fiction',
    'Juvenile / EZ JUV',
    'Entire Section',
    'Switched Letters',
    'Number Mistakes',
    'Brewer Collection'
];
/* harmony default export */ __webpack_exports__["default"] = (searchLocations);
var buttonNames = [
    'Requested By Patron',
    'Ongoing',
    'Inventory',
    'Follow Up',
    'Awaiting Librarian Decision',
    'Searched But Not Found'
];
var buttons = [
    {
        name: 'Mark as pending decision & email librarian',
        action: 'Librarian decision'
    },
    {
        name: 'Book not found, revisit next month, & email librarian',
        action: 'Look again'
    }
];
var backendLocation = dev ? 'http://localhost:8000' : 'https://book-searching-app.herokuapp.com';


/***/ }),

/***/ "./src/app/config/sort.ts":
/*!********************************!*\
  !*** ./src/app/config/sort.ts ***!
  \********************************/
/*! exports provided: sortStateBooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortStateBooks", function() { return sortStateBooks; });
function sortBooks(a, b) {
    if (a.urgency === b.urgency) {
        if (a.callNumber > b.callNumber) {
            return 1;
        }
        else if (a.callNumber < b.callNumber) {
            return -1;
        }
    }
    return b.urgency - a.urgency;
}
function sortStateBooks(state) {
    state.requestedByPatronBooks.sort(sortBooks);
    state.ongoingBooks.sort(sortBooks);
    state.followUpBooks.sort(sortBooks);
    state.missingBooks.sort(sortBooks);
    state.awaitingDecisionBooks.sort(sortBooks);
}


/***/ }),

/***/ "./src/app/models/book.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/book.model.ts ***!
  \**************************************/
/*! exports provided: generateMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMap", function() { return generateMap; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");

function generateMap(book) {
    var searchedBefore = false;
    var old = book.searchedLocations;
    book.searchedLocations = new Map();
    for (var _i = 0, locationsToSearch_1 = _config__WEBPACK_IMPORTED_MODULE_0__["default"]; _i < locationsToSearch_1.length; _i++) {
        var location_1 = locationsToSearch_1[_i];
        if (old[location_1]) {
            searchedBefore = true;
            book.searchedLocations.set(location_1, old[location_1]);
        }
        else {
            book.searchedLocations.set(location_1, false);
        }
    }
    fixSearchCount(book, searchedBefore);
}
function fixSearchCount(book, searchedBefore) {
    if (book.searchCount === 0 && searchedBefore) {
        book.searchCount = 1;
    }
}


/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.prototype.checkMapForAllTrue = function (map) {
        var result = true;
        map.forEach(function (val) {
            if (val === false) {
                result = false;
                return;
            }
        });
        return result;
    };
    ConfigService.prototype.checkMapForAnyTrue = function (map) {
        var result = false;
        map.forEach(function (val) {
            if (val === true) {
                result = true;
                return;
            }
        });
        return result;
    };
    ConfigService.prototype.isBook = function (book) {
        return 'markedLostBelievedReturned' in book;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http, router) {
        this.http = http;
        this.router = router;
    }
    HttpService.prototype.getAllData = function () {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["backendLocation"] + "/");
    };
    HttpService.prototype.getInventoryData = function () {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["backendLocation"] + "/inventory");
    };
    HttpService.prototype.saveSearchedLocations = function (book) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["backendLocation"] + "/searched/" + book.callNumber.replace(/ /g, '-'), { locations: this.getSearchedLocations(book) });
    };
    HttpService.prototype.updateStatus = function (book, navigate) {
        var _this = this;
        if (navigate === void 0) { navigate = true; }
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["backendLocation"] + "/status/" + book.callNumber.replace(/ /g, '-'), { status: book.searchStatus }).subscribe(function () {
            if (navigate) {
                _this.router.navigateByUrl('/');
            }
        });
    };
    HttpService.prototype.setFoundLocation = function (book, foundLocation) {
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["backendLocation"] + "/location/" + book.callNumber.replace(/ /g, '-'), { foundLocation: foundLocation }).subscribe();
    };
    HttpService.prototype.librarianDecision = function (book) {
        var _this = this;
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["backendLocation"] + "/decision/", {
            title: book.title,
            callNumber: book.callNumber,
            author: book.author,
            patron: book.patron
        }).subscribe(function () {
            _this.updateStatus(book);
        });
    };
    HttpService.prototype.lookAgain = function (book) {
        var _this = this;
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["backendLocation"] + "/look-again/", {
            title: book.title,
            callNumber: book.callNumber,
            author: book.author,
            patron: book.patron
        }).subscribe(function () {
            _this.updateStatus(book);
        });
    };
    HttpService.prototype.getSearchedLocations = function (book) {
        var result = [];
        book.searchedLocations.forEach(function (value, key) {
            if (value === true) {
                result.push(key);
            }
        });
        return result;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/store/actions.ts":
/*!**********************************!*\
  !*** ./src/app/store/actions.ts ***!
  \**********************************/
/*! exports provided: START_BOOK_SEARCH, ADD_BOOK, ADD_BOOK_BULK, SELECT_BOOK, STOP_BOOK_SEARCH, FOUND_BOOK, SEARCHED_LOCATION, SAVE_SEARCHED_LOCATION, RELOAD_BOOKS, RELOAD_BOOKS_ERROR, LOAD_INVENTORY, LOAD_INVENTORY_ERROR, ADD_INVENTORY_BOOKS, SELECT_INVENTORY_BOOK, StartBookSearchAction, StopBookSearchAction, FoundBookAction, AddBookAction, AddBookBulkAction, SelectBookAction, SelectInventoryBookAction, SearchedLocationAction, SaveSearchedLocationsAction, ReloadBooksAction, ReloadBooksErrorAction, LoadInventoryAction, LoadInventoryErrorAction, AddInventoryBooksAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_BOOK_SEARCH", function() { return START_BOOK_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK", function() { return ADD_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK_BULK", function() { return ADD_BOOK_BULK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_BOOK", function() { return SELECT_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_BOOK_SEARCH", function() { return STOP_BOOK_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUND_BOOK", function() { return FOUND_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCHED_LOCATION", function() { return SEARCHED_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_SEARCHED_LOCATION", function() { return SAVE_SEARCHED_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELOAD_BOOKS", function() { return RELOAD_BOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELOAD_BOOKS_ERROR", function() { return RELOAD_BOOKS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_INVENTORY", function() { return LOAD_INVENTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_INVENTORY_ERROR", function() { return LOAD_INVENTORY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INVENTORY_BOOKS", function() { return ADD_INVENTORY_BOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_INVENTORY_BOOK", function() { return SELECT_INVENTORY_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartBookSearchAction", function() { return StartBookSearchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopBookSearchAction", function() { return StopBookSearchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoundBookAction", function() { return FoundBookAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookAction", function() { return AddBookAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookBulkAction", function() { return AddBookBulkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBookAction", function() { return SelectBookAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInventoryBookAction", function() { return SelectInventoryBookAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchedLocationAction", function() { return SearchedLocationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveSearchedLocationsAction", function() { return SaveSearchedLocationsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReloadBooksAction", function() { return ReloadBooksAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReloadBooksErrorAction", function() { return ReloadBooksErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadInventoryAction", function() { return LoadInventoryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadInventoryErrorAction", function() { return LoadInventoryErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInventoryBooksAction", function() { return AddInventoryBooksAction; });
var START_BOOK_SEARCH = 'START_BOOK_SEARCH';
var ADD_BOOK = 'ADD_BOOK';
var ADD_BOOK_BULK = 'ADD_BOOK_BULK';
var SELECT_BOOK = 'SELECT_BOOK';
var STOP_BOOK_SEARCH = 'STOP_BOOK_SEARCH';
var FOUND_BOOK = 'FOUND_BOOK';
var SEARCHED_LOCATION = 'SEARCHED_LOCATION';
var SAVE_SEARCHED_LOCATION = 'SAVE_SEARCHED_LOCATION';
var RELOAD_BOOKS = 'RELOAD_BOOKS';
var RELOAD_BOOKS_ERROR = 'RELOAD_BOOKS_ERROR';
var LOAD_INVENTORY = 'LOAD_INVENTORY';
var LOAD_INVENTORY_ERROR = 'LOAD_INVENTORY_ERROR';
var ADD_INVENTORY_BOOKS = 'ADD_INVENTORY_BOOKS';
var SELECT_INVENTORY_BOOK = 'SELECT_INVENTORY_BOOK';
var StartBookSearchAction = /** @class */ (function () {
    function StartBookSearchAction(payload) {
        this.payload = payload;
        this.type = START_BOOK_SEARCH;
    }
    return StartBookSearchAction;
}());

var StopBookSearchAction = /** @class */ (function () {
    function StopBookSearchAction(payload) {
        this.payload = payload;
        this.type = STOP_BOOK_SEARCH;
    }
    return StopBookSearchAction;
}());

var FoundBookAction = /** @class */ (function () {
    function FoundBookAction(payload) {
        this.payload = payload;
        this.type = FOUND_BOOK;
    }
    return FoundBookAction;
}());

var AddBookAction = /** @class */ (function () {
    function AddBookAction(payload) {
        this.payload = payload;
        this.type = ADD_BOOK;
    }
    return AddBookAction;
}());

var AddBookBulkAction = /** @class */ (function () {
    function AddBookBulkAction(payload) {
        this.payload = payload;
        this.type = ADD_BOOK_BULK;
    }
    return AddBookBulkAction;
}());

var SelectBookAction = /** @class */ (function () {
    function SelectBookAction(payload) {
        this.payload = payload;
        this.type = SELECT_BOOK;
    }
    return SelectBookAction;
}());

var SelectInventoryBookAction = /** @class */ (function () {
    function SelectInventoryBookAction(payload) {
        this.payload = payload;
        this.type = SELECT_INVENTORY_BOOK;
    }
    return SelectInventoryBookAction;
}());

var SearchedLocationAction = /** @class */ (function () {
    function SearchedLocationAction(payload) {
        this.payload = payload;
        this.type = SEARCHED_LOCATION;
    }
    return SearchedLocationAction;
}());

var SaveSearchedLocationsAction = /** @class */ (function () {
    function SaveSearchedLocationsAction(payload) {
        this.payload = payload;
        this.type = SAVE_SEARCHED_LOCATION;
    }
    return SaveSearchedLocationsAction;
}());

var ReloadBooksAction = /** @class */ (function () {
    function ReloadBooksAction() {
        this.type = RELOAD_BOOKS;
    }
    return ReloadBooksAction;
}());

var ReloadBooksErrorAction = /** @class */ (function () {
    function ReloadBooksErrorAction() {
        this.type = RELOAD_BOOKS_ERROR;
    }
    return ReloadBooksErrorAction;
}());

var LoadInventoryAction = /** @class */ (function () {
    function LoadInventoryAction() {
        this.type = LOAD_INVENTORY;
    }
    return LoadInventoryAction;
}());

var LoadInventoryErrorAction = /** @class */ (function () {
    function LoadInventoryErrorAction() {
        this.type = LOAD_INVENTORY_ERROR;
    }
    return LoadInventoryErrorAction;
}());

var AddInventoryBooksAction = /** @class */ (function () {
    function AddInventoryBooksAction(payload) {
        this.payload = payload;
        this.type = ADD_INVENTORY_BOOKS;
    }
    return AddInventoryBooksAction;
}());



/***/ }),

/***/ "./src/app/store/effects.ts":
/*!**********************************!*\
  !*** ./src/app/store/effects.ts ***!
  \**********************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthEffects = /** @class */ (function () {
    function AuthEffects(http, actions$) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.reloadBooks$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["RELOAD_BOOKS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            return _this.http.getAllData().pipe(
            // If successful, dispatch success action with result
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return ({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ADD_BOOK_BULK"], payload: data }); }), 
            // If request fails, dispatch failed action
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["RELOAD_BOOKS_ERROR"] }); }));
        }));
        this.loadInventoryBooks$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["LOAD_INVENTORY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return _this.http.getInventoryData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return ({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["ADD_INVENTORY_BOOKS"], payload: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["LOAD_INVENTORY_ERROR"] }); })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AuthEffects.prototype, "reloadBooks$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AuthEffects.prototype, "loadInventoryBooks$", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers, getStoreState, getAllBooks, getSelectedBook, getRequestedByPatronBooks, getOngoingBooks, getInventoryBooks, getFollowUpBooks, getAwaitingDecisionBooks, getMissingBooks, getSearchedLocations, lookedEverywhere, getSelectedInventoryBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreState", function() { return getStoreState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBooks", function() { return getAllBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedBook", function() { return getSelectedBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestedByPatronBooks", function() { return getRequestedByPatronBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOngoingBooks", function() { return getOngoingBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInventoryBooks", function() { return getInventoryBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowUpBooks", function() { return getFollowUpBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAwaitingDecisionBooks", function() { return getAwaitingDecisionBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMissingBooks", function() { return getMissingBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchedLocations", function() { return getSearchedLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookedEverywhere", function() { return lookedEverywhere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedInventoryBook", function() { return getSelectedInventoryBook; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/app/store/store.ts");


var reducers = {
    store: _store__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var getStoreState = function (state) { return state.store; };
var getAllBooks = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["getAllBooks"]);
var getSelectedBook = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["getSelectedBook"]);
var getRequestedByPatronBooks = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["getRequestedByPatronBooks"]);
var getOngoingBooks = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["getOngoingBooks"]);
var getInventoryBooks = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["getInventoryBooks"]);
var getFollowUpBooks = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["getFollowUpBooks"]);
var getAwaitingDecisionBooks = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["getAwaitingDecisionBooks"]);
var getMissingBooks = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["getMissingBooks"]);
var getSearchedLocations = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["getSearchedLocations"]);
var lookedEverywhere = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["searchedEverywhere"]);
var getSelectedInventoryBook = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStoreState, _store__WEBPACK_IMPORTED_MODULE_1__["getSelectedInventoryBook"]);


/***/ }),

/***/ "./src/app/store/store.ts":
/*!********************************!*\
  !*** ./src/app/store/store.ts ***!
  \********************************/
/*! exports provided: initialState, reducer, getAllBooks, getSelectedBook, getRequestedByPatronBooks, getOngoingBooks, getInventoryBooks, getFollowUpBooks, getSearchedLocations, getMissingBooks, getAwaitingDecisionBooks, searchedEverywhere, getSelectedInventoryBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBooks", function() { return getAllBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedBook", function() { return getSelectedBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestedByPatronBooks", function() { return getRequestedByPatronBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOngoingBooks", function() { return getOngoingBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInventoryBooks", function() { return getInventoryBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowUpBooks", function() { return getFollowUpBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchedLocations", function() { return getSearchedLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMissingBooks", function() { return getMissingBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAwaitingDecisionBooks", function() { return getAwaitingDecisionBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchedEverywhere", function() { return searchedEverywhere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedInventoryBook", function() { return getSelectedInventoryBook; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/book.model */ "./src/app/models/book.model.ts");
/* harmony import */ var _config_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/sort */ "./src/app/config/sort.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var initialState = {
    books: [],
    selectedBook: null,
    selectedInventoryBook: null,
    requestedByPatronBooks: [],
    ongoingBooks: [],
    inventoryBooks: [],
    followUpBooks: [],
    awaitingDecisionBooks: [],
    missingBooks: [],
};
function lookedEverywhere(state) {
    if (state && state.selectedBook && state.selectedBook.searchedLocations) {
        state.selectedBook.searchedLocations.forEach(function (value) {
            if (value === false) {
                return false;
            }
        });
        return true;
    }
    return false;
}
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["START_BOOK_SEARCH"]: {
            for (var _i = 0, _a = state.books; _i < _a.length; _i++) {
                var book = _a[_i];
                if (book.callNumber === action.payload) {
                    book.searchCount++;
                    book.searchedPreviously = true;
                    book.searchStatus = 'Began searching';
                    state.selectedBook = book;
                }
            }
            return __assign({}, state);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["STOP_BOOK_SEARCH"]: {
            for (var _b = 0, _c = state.books; _b < _c.length; _b++) {
                var book = _c[_b];
                if (book.callNumber === action.payload) {
                    book.searchStatus = 'Began searching';
                    if (state.selectedBook.callNumber === action.payload) {
                        state.selectedBook = book;
                    }
                }
            }
            return __assign({}, state);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["FOUND_BOOK"]: {
            for (var _d = 0, _e = state.books; _d < _e.length; _d++) {
                var book = _e[_d];
                if (book.callNumber === action.payload) {
                    book.searchStatus = 'Found';
                    if (state.selectedBook.callNumber === action.payload) {
                        state.selectedBook = book;
                    }
                }
            }
            return __assign({}, state);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_BOOK"]: {
            var book = action.payload;
            Object(_models_book_model__WEBPACK_IMPORTED_MODULE_1__["generateMap"])(book);
            Object(_config_sort__WEBPACK_IMPORTED_MODULE_2__["sortStateBooks"])(state);
            return __assign({}, state, { books: state.books.concat([action.payload]) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_BOOK_BULK"]: {
            var books = [], requestedByPatronBooks = [], ongoingBooks = [], followUpBooks = [], missingBooks = [], awaitingDecisionBooks = [];
            for (var _f = 0, _g = action.payload; _f < _g.length; _f++) {
                var book = _g[_f];
                Object(_models_book_model__WEBPACK_IMPORTED_MODULE_1__["generateMap"])(book);
                books.push(book);
                book.urlID = book.title.replace(/(\s|:\s)+/g, '-').toLowerCase();
                switch (book.searchStatus) {
                    case 'Not searched for yet':
                        requestedByPatronBooks.push(book);
                        break;
                    case 'Began searching':
                        ongoingBooks.push(book);
                        break;
                    case 'Found':
                        followUpBooks.push(book);
                        break;
                    case 'Delay searching':
                        missingBooks.push(book);
                        break;
                    case 'Stop searching':
                        awaitingDecisionBooks.push(book);
                        break;
                }
            }
            Object(_config_sort__WEBPACK_IMPORTED_MODULE_2__["sortStateBooks"])(state);
            return __assign({}, state, { books: books,
                requestedByPatronBooks: requestedByPatronBooks,
                ongoingBooks: ongoingBooks,
                followUpBooks: followUpBooks,
                missingBooks: missingBooks,
                awaitingDecisionBooks: awaitingDecisionBooks });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_BOOK"]: {
            return __assign({}, state, { selectedBook: action.payload || null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_INVENTORY_BOOK"]: {
            return __assign({}, state, { selectedInventoryBook: action.payload || null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["SEARCHED_LOCATION"]: {
            var newMap = state.selectedBook.searchedLocations;
            newMap.set(action.payload, !newMap.get(action.payload));
            return __assign({}, state, { selectedBook: __assign({}, state.selectedBook, { searchedLocations: newMap }) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_INVENTORY_ERROR"]:
        case _actions__WEBPACK_IMPORTED_MODULE_0__["RELOAD_BOOKS_ERROR"]: {
            alert('Problem loading. Try reloading the page!');
            return state;
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_INVENTORY_BOOKS"]: {
            state.inventoryBooks = [];
            for (var _h = 0, _j = action.payload; _h < _j.length; _h++) {
                var inventoryBook = _j[_h];
                state.inventoryBooks.push(inventoryBook);
            }
            state.inventoryBooks.sort(function (a, b) {
                if (a.callNumber > b.callNumber) {
                    return 1;
                }
                else if (a.callNumber < b.callNumber) {
                    return -1;
                }
            });
            return state;
        }
        default: return state;
    }
}
var getAllBooks = function (state) { return state.books; };
var getSelectedBook = function (state) { return state.selectedBook; };
var getRequestedByPatronBooks = function (state) { return state.requestedByPatronBooks; };
var getOngoingBooks = function (state) { return state.ongoingBooks; };
var getInventoryBooks = function (state) { return state.inventoryBooks; };
var getFollowUpBooks = function (state) { return state.followUpBooks; };
var getSearchedLocations = function (state) { return state && state.selectedBook ? state.selectedBook.searchedLocations : null; };
var getMissingBooks = function (state) { return state.missingBooks; };
var getAwaitingDecisionBooks = function (state) { return state.awaitingDecisionBooks; };
var searchedEverywhere = function (state) { return lookedEverywhere(state); };
var getSelectedInventoryBook = function (state) { return state.selectedInventoryBook; };


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

module.exports = __webpack_require__(/*! C:\Users\libstudent2\Documents\code\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
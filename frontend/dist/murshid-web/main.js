(self["webpackChunkmurshid_web"] = self["webpackChunkmurshid_web"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login/login.component */ 6539);
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/register/register.component */ 9619);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 2320);
/* harmony import */ var _parcours_list_parcours_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parcours/list/parcours-list.component */ 6138);
/* harmony import */ var _parcours_detail_parcours_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parcours/detail/parcours-detail.component */ 6370);
/* harmony import */ var _parcours_create_parcours_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parcours/create/parcours-create.component */ 7258);
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz/quiz.component */ 1400);
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stats/stats.component */ 1000);
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guards/auth.guard */ 1336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);












const routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
  canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: 'parcours',
  component: _parcours_list_parcours_list_component__WEBPACK_IMPORTED_MODULE_3__.ParcoursListComponent,
  canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: 'parcours/new',
  component: _parcours_create_parcours_create_component__WEBPACK_IMPORTED_MODULE_5__.ParcoursCreateComponent,
  canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: 'parcours/:id',
  component: _parcours_detail_parcours_detail_component__WEBPACK_IMPORTED_MODULE_4__.ParcoursDetailComponent,
  canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: 'quiz/:leconId',
  component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__.QuizComponent,
  canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: 'stats',
  component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_7__.StatsComponent,
  canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
}, {
  path: '**',
  redirectTo: '/dashboard'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_gesture_nav_gesture_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/gesture-nav/gesture-nav.component */ 9557);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 1765);





class AppComponent {
  constructor() {
    this.title = 'murshid-web';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 0,
      consts: [[1, "app-shell"], [1, "app-content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "main", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-footer")(5, "app-gesture-nav");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_components_gesture_nav_gesture_nav_component__WEBPACK_IMPORTED_MODULE_0__.GestureNavComponent, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
      styles: [".app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.app-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVCIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtc2hlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmFwcC1jb250ZW50IHtcbiAgZmxleDogMTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ 6539);
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/register/register.component */ 9619);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 2320);
/* harmony import */ var _parcours_list_parcours_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parcours/list/parcours-list.component */ 6138);
/* harmony import */ var _parcours_detail_parcours_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parcours/detail/parcours-detail.component */ 6370);
/* harmony import */ var _parcours_create_parcours_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parcours/create/parcours-create.component */ 7258);
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quiz.component */ 1400);
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stats/stats.component */ 1000);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 1765);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/progress-bar/progress-bar.component */ 6189);
/* harmony import */ var _shared_components_gesture_nav_gesture_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/gesture-nav/gesture-nav.component */ 9557);
/* harmony import */ var _shared_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/interceptors/jwt.interceptor */ 1719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 7580);






// Components








// Shared Components




// Interceptors & Guards


class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HTTP_INTERCEPTORS,
        useClass: _shared_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__.JwtInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _shared_components_gesture_nav_gesture_nav_component__WEBPACK_IMPORTED_MODULE_13__.GestureNavComponent]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent, _parcours_list_parcours_list_component__WEBPACK_IMPORTED_MODULE_5__.ParcoursListComponent, _parcours_detail_parcours_detail_component__WEBPACK_IMPORTED_MODULE_6__.ParcoursDetailComponent, _parcours_create_parcours_create_component__WEBPACK_IMPORTED_MODULE_7__.ParcoursCreateComponent, _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__.QuizComponent, _stats_stats_component__WEBPACK_IMPORTED_MODULE_9__.StatsComponent, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__.NavbarComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__.FooterComponent, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__.ProgressBarComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _shared_components_gesture_nav_gesture_nav_component__WEBPACK_IMPORTED_MODULE_13__.GestureNavComponent]
  });
})();

/***/ }),

/***/ 6539:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function LoginComponent_i_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 19);
  }
}
function LoginComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
class LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.email = '';
    this.password = '';
    this.error = '';
    this.loading = false;
  }
  onLogin() {
    if (!this.email || !this.password) {
      this.error = 'يرجى تعبئة جميع الحقول';
      return;
    }
    this.loading = true;
    this.error = '';
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.error = err.error?.message || 'بيانات الدخول غير صحيحة أو الخادم غير متاح';
        this.loading = false;
      }
    });
  }
  fillDemoUser() {
    this.email = 'ahmed@example.com';
    this.password = 'Test@123456';
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 38,
      vars: 6,
      consts: [[1, "auth-container"], [1, "auth-card", "glass-panel", "animate-fade-in"], [1, "auth-header"], [1, "fa-solid", "fa-kaaba", "gold-icon"], [1, "gradient-text"], [1, "arabic-font", "gold-text"], [1, "auth-form", 3, "ngSubmit"], [1, "form-group"], [1, "fa-solid", "fa-envelope"], ["type", "email", "name", "email", "placeholder", "exemple@domaine.com", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "fa-solid", "fa-lock"], ["type", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary", "w-full", 3, "disabled"], ["class", "fa-solid fa-right-to-bracket", 4, "ngIf"], ["class", "error-alert", 4, "ngIf"], [1, "demo-box", 3, "click"], [1, "fa-solid", "fa-lightbulb", "gold-text"], [1, "auth-footer"], ["routerLink", "/register", 1, "gold-text"], [1, "fa-solid", "fa-right-to-bracket"], [1, "error-alert"], [1, "fa-solid", "fa-triangle-exclamation"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Murshid ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0645\u064F\u0631\u0634\u0650\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u0645\u0633\u0627\u062D\u0629 \u062A\u0639\u0644\u0651\u0645\u0643 \u0627\u0644\u0645\u062E\u0635\u0651\u0635\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LoginComponent_i_22_Template, 1, 0, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 3, 1, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_26_listener() {
            return ctx.fillDemoUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " \u062D\u0633\u0627\u0628 \u062A\u062C\u0631\u064A\u0628\u064A \u0633\u0631\u064A\u0639 : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "ahmed@example.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " (\u0627\u0646\u0642\u0631 \u0644\u0644\u062A\u0639\u0628\u0626\u0629)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17)(34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u0644\u064A\u0633 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0628\u0639\u062F\u061F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u0633\u062C\u0651\u0644 \u0645\u062C\u0627\u0646\u0627\u064B");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loading ? "\u062C\u0627\u0631\u064D \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644..." : "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 160px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  padding: 2.5rem 2rem;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.gold-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--primary-gold);\n  margin-bottom: 0.75rem;\n  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.4));\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.35rem;\n}\n\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.error-alert[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #FCA5A5;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.demo-box[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  background: rgba(212, 175, 55, 0.08);\n  border: 1px dashed rgba(212, 175, 55, 0.3);\n  padding: 0.75rem;\n  border-radius: var(--radius-md);\n  font-size: 0.85rem;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.demo-box[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.18);\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QyxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xufVxuXG4uYXV0aC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDQwcHg7XG4gIHBhZGRpbmc6IDIuNXJlbSAycmVtO1xufVxuXG4uYXV0aC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5nb2xkLWljb24ge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxMHB4IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjQpKTtcbn1cblxuLmF1dGgtaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjM1cmVtO1xufVxuXG4uYXV0aC1oZWFkZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5lcnJvci1hbGVydCB7XG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSwgNjgsIDY4LCAwLjMpO1xuICBjb2xvcjogI0ZDQTVBNTtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmRlbW8tYm94IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4wOCk7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDIxMiwgMTc1LCA1NSwgMC4zKTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5kZW1vLWJveDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjE4KTtcbn1cblxuLmF1dGgtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uYXV0aC1mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9619:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function RegisterComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 19);
  }
}
function RegisterComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
class RegisterComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.email = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
    this.dialecte = 'arabe';
    this.error = '';
    this.loading = false;
  }
  onRegister() {
    if (!this.email || !this.password || !this.firstName || !this.lastName) {
      this.error = 'يرجى تعبئة جميع الحقول المطلوبة';
      return;
    }
    this.loading = true;
    this.error = '';
    this.authService.register(this.email, this.password, this.firstName, this.lastName, this.dialecte).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.error = err.error?.message || "حدث خطأ أثناء التسجيل";
        this.loading = false;
      }
    });
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 38,
      vars: 8,
      consts: [[1, "auth-container"], [1, "auth-card", "glass-panel", "animate-fade-in"], [1, "auth-header"], [1, "fa-solid", "fa-user-plus", "gold-icon"], [1, "gradient-text"], [1, "auth-form", 3, "ngSubmit"], [1, "grid-2", 2, "gap", "0.75rem", "margin-bottom", "0.5rem"], [1, "form-group"], ["type", "text", "name", "firstName", "placeholder", "Ahmed", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "placeholder", "Ibrahim", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "fa-solid", "fa-envelope"], ["type", "email", "name", "email", "placeholder", "ahmed@example.com", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "fa-solid", "fa-lock"], ["type", "password", "name", "password", "placeholder", "Test@123456", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary", "w-full", 3, "disabled"], ["class", "fa-solid fa-check", 4, "ngIf"], ["class", "error-alert", 4, "ngIf"], [1, "auth-footer"], ["routerLink", "/login", 1, "gold-text"], [1, "fa-solid", "fa-check"], [1, "error-alert"], [1, "fa-solid", "fa-triangle-exclamation"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0627\u0646\u0636\u0645\u0651 \u0625\u0644\u0649 \u0645\u0631\u0634\u062F \u0648\u0627\u0628\u062F\u0623 \u0645\u0633\u0627\u0631\u0643 \u0645\u0639 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
            return ctx.onRegister();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.firstName, $event) || (ctx.firstName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.lastName, $event) || (ctx.lastName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7)(24, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RegisterComponent_i_29_Template, 1, 0, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RegisterComponent_div_32_Template, 3, 1, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17)(34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628\u061F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.firstName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.lastName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loading ? "\u062C\u0627\u0631\u064D \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628..." : "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 160px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  padding: 2.5rem 2rem;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.gold-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--primary-gold);\n  margin-bottom: 0.75rem;\n  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.4));\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.35rem;\n}\n\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.error-alert[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #FCA5A5;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.demo-box[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  background: rgba(212, 175, 55, 0.08);\n  border: 1px dashed rgba(212, 175, 55, 0.3);\n  padding: 0.75rem;\n  border-radius: var(--radius-md);\n  font-size: 0.85rem;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.demo-box[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.18);\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QyxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xufVxuXG4uYXV0aC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDQwcHg7XG4gIHBhZGRpbmc6IDIuNXJlbSAycmVtO1xufVxuXG4uYXV0aC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5nb2xkLWljb24ge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxMHB4IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjQpKTtcbn1cblxuLmF1dGgtaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjM1cmVtO1xufVxuXG4uYXV0aC1oZWFkZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5lcnJvci1hbGVydCB7XG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSwgNjgsIDY4LCAwLjMpO1xuICBjb2xvcjogI0ZDQTVBNTtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmRlbW8tYm94IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4wOCk7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDIxMiwgMTc1LCA1NSwgMC4zKTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5kZW1vLWJveDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjE4KTtcbn1cblxuLmF1dGgtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uYXV0aC1mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3767:
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/storage.service */ 9117);





class AuthService {
  constructor(http, storage) {
    this.http = http;
    this.storage = storage;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  register(email, password, firstName, lastName, dialecte = 'arabe') {
    const dto = {
      email,
      password,
      firstName,
      lastName,
      dialecte
    };
    return this.http.post(`${this.apiUrl}/auth/register`, dto).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      this.storage.setToken(response.token);
      this.storage.setUser(response);
    }));
  }
  login(email, password) {
    const dto = {
      email,
      password
    };
    return this.http.post(`${this.apiUrl}/auth/login`, dto).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      this.storage.setToken(response.token);
      this.storage.setUser(response);
    }));
  }
  getCurrentUser() {
    return this.http.get(`${this.apiUrl}/users/me`);
  }
  getUserStats() {
    return this.http.get(`${this.apiUrl}/users/me/stats`);
  }
  logout() {
    this.storage.removeToken();
  }
  isAuthenticated() {
    return !!this.storage.getToken();
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9117:
/*!**************************************************!*\
  !*** ./src/app/core/services/storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class StorageService {
  constructor() {
    this.TOKEN_KEY = 'jwt_token';
    this.USER_KEY = 'user_info';
  }
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
  setUser(user) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  getUser() {
    const u = localStorage.getItem(this.USER_KEY);
    return u ? JSON.parse(u) : null;
  }
  static {
    this.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2320:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _parcours_services_parcours_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parcours/services/parcours.service */ 3883);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/services/auth.service */ 3767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/progress-bar/progress-bar.component */ 6189);






const _c0 = a0 => ["/parcours", a0];
function DashboardComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u062E\u0635\u0651\u0635\u0629... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0633\u0627\u0631\u0627\u062A \u0646\u0634\u0637\u0629 \u062D\u0627\u0644\u064A\u0627\u064B");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0627\u0628\u062F\u0623 \u0628\u062A\u0648\u0644\u064A\u062F \u0623\u0648\u0644 \u0645\u0633\u0627\u0631 \u0645\u062E\u0635\u0651\u0635 \u0644\u0643 \u0645\u0639 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0627\u0644\u062E\u0627\u0635 \u0628\u0646\u0627.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u062A\u0648\u0644\u064A\u062F \u0645\u0633\u0627\u0631\u064A \u0627\u0644\u0623\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 37)(12, "div", 38)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u0627\u0644\u062A\u0642\u062F\u0651\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-progress-bar", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 40)(19, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0633\u0627\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", p_r1.matiere, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u0627\u0644\u0645\u0633\u062A\u0648\u0649 ", p_r1.niveauActuel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r1.titre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", p_r1.progressionPourcent || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", p_r1.progressionPourcent || 0)("showLabel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, p_r1.id));
  }
}
function DashboardComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_51_div_1_Template, 22, 10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.parcours);
  }
}
class DashboardComponent {
  constructor(parcoursService, authService) {
    this.parcoursService = parcoursService;
    this.authService = authService;
    this.parcours = [];
    this.user = null;
    this.totalPoints = 0;
    this.completedCount = 0;
    this.activeCount = 0;
    this.loading = true;
  }
  ngOnInit() {
    this.loadProfile();
    this.loadStats();
    this.loadParcours();
  }
  loadProfile() {
    this.authService.getCurrentUser().subscribe({
      next: u => this.user = u,
      error: () => {}
    });
  }
  loadParcours() {
    this.parcoursService.obtenirMesParcours().subscribe({
      next: data => {
        this.parcours = data;
        if (!this.completedCount) {
          this.completedCount = data.filter(p => p.status === 'TERMINE').length;
        }
        if (!this.activeCount) {
          this.activeCount = data.filter(p => p.status === 'EN_COURS').length;
        }
        this.loading = false;
      },
      error: err => {
        console.error('خطأ في تحميل المسارات', err);
        this.loading = false;
      }
    });
  }
  loadStats() {
    this.authService.getUserStats().subscribe({
      next: stats => {
        this.totalPoints = stats.totalPoints || 0;
        this.completedCount = stats.completedParcours || 0;
        this.activeCount = stats.activeParcours || 0;
      },
      error: err => console.error('خطأ في تحميل الإحصائيات', err)
    });
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_parcours_services_parcours_service__WEBPACK_IMPORTED_MODULE_0__.ParcoursService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 52,
      vars: 8,
      consts: [[1, "container", "animate-fade-in"], [1, "welcome-banner", "glass-panel"], [1, "welcome-text"], [1, "gold-text"], [1, "welcome-badge"], [1, "badge", "badge-gold"], [1, "fa-solid", "fa-star"], [1, "grid-3", "stats-grid"], [1, "stat-card", "glass-card"], [1, "stat-icon", "gold-glow"], [1, "fa-solid", "fa-gem"], [1, "stat-info"], [1, "stat-value", "gradient-text"], [1, "stat-icon", "emerald-glow"], [1, "fa-solid", "fa-circle-check"], [1, "stat-value"], [1, "stat-icon", "teal-glow"], [1, "fa-solid", "fa-book-bookmark"], [1, "section-container"], [1, "section-header"], ["routerLink", "/parcours/new", 1, "btn-primary"], [1, "fa-solid", "fa-plus-circle"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state glass-card", 4, "ngIf"], ["class", "grid-2 parcours-grid", 4, "ngIf"], [1, "loading-state"], [1, "fa-solid", "fa-spinner", "fa-spin", "gold-text"], [1, "empty-state", "glass-card"], [1, "fa-solid", "fa-compass", "gold-icon"], ["routerLink", "/parcours/new", 1, "btn-primary", 2, "margin-top", "1rem"], [1, "grid-2", "parcours-grid"], ["class", "parcours-card glass-card", 4, "ngFor", "ngForOf"], [1, "parcours-card", "glass-card"], [1, "card-top"], [1, "badge", "badge-emerald"], [1, "fa-solid", "fa-graduation-cap"], [1, "description"], [1, "progress-section"], [1, "progress-header"], [3, "value", "showLabel"], [1, "card-actions"], [1, "btn-secondary", "w-full", 3, "routerLink"], [1, "fa-solid", "fa-play"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "As-salamu alaykum, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " ! \uD83D\uDC4B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643 \u0641\u064A \u0645\u0633\u0627\u062D\u0629 \u062A\u0639\u0644\u0651\u0645\u0643 \u0627\u0644\u0645\u062E\u0635\u0651\u0635\u0629. \u0648\u0627\u0635\u0644 \u062A\u0637\u0648\u064A\u0631 \u0645\u0639\u0631\u0641\u062A\u0643 \u0645\u0639 \u0645\u0633\u0627\u0639\u062F \u0645\u0631\u0634\u062F \u0627\u0644\u0630\u0643\u064A.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4)(11, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11)(19, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0646\u0642\u0627\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 8)(24, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 11)(27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 8)(32, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 11)(35, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0646\u0634\u0637\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 18)(40, "div", 19)(41, "div")(42, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\u0645\u0633\u0627\u0631\u0627\u062A \u062A\u0639\u0644\u0651\u0645\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\u062A\u0627\u0628\u0639 \u062A\u0642\u062F\u0651\u0645\u0643 \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629 \u0648\u0623\u062C\u0631\u0650 \u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A\u0643 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " \u0645\u0633\u0627\u0631 \u0630\u0643\u064A \u062C\u062F\u064A\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, DashboardComponent_div_49_Template, 3, 0, "div", 22)(50, DashboardComponent_div_50_Template, 8, 0, "div", 23)(51, DashboardComponent_div_51_Template, 2, 1, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx.user == null ? null : ctx.user.firstName) || "\u0637\u0627\u0644\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062D\u0627\u0644\u064A: ", (ctx.user == null ? null : ctx.user.niveauActuel) || 1, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.totalPoints, " \u0646\u0642\u0637\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.completedCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.parcours.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.parcours.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent],
      styles: [".welcome-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 2.5rem;\n  margin-bottom: 2rem;\n  background: linear-gradient(135deg, rgba(14, 34, 27, 0.9) 0%, rgba(21, 50, 40, 0.9) 100%);\n  border: 1px solid var(--border-glass);\n}\n\n.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 0.5rem;\n}\n\n.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n\n.gold-glow[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.15);\n  color: var(--primary-gold);\n}\n\n.emerald-glow[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--emerald-glow);\n}\n\n.teal-glow[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.15);\n  color: var(--teal-accent);\n}\n\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.parcours-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.progress-section[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 0.4rem;\n  font-weight: 600;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: var(--text-muted);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5RkFBeUY7RUFDekYscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtYmFubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAycmVtIDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNCwgMzQsIDI3LCAwLjkpIDAlLCByZ2JhKDIxLCA1MCwgNDAsIDAuOSkgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcyk7XG59XG5cbi53ZWxjb21lLXRleHQgaDIge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLndlbGNvbWUtdGV4dCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uc3RhdHMtZ3JpZCB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5zdGF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuMjVyZW07XG59XG5cbi5zdGF0LWljb24ge1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5nb2xkLWdsb3cge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4xNSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xufVxuXG4uZW1lcmFsZC1nbG93IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMTUpO1xuICBjb2xvcjogdmFyKC0tZW1lcmFsZC1nbG93KTtcbn1cblxuLnRlYWwtZ2xvdyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjAsIDE4NCwgMTY2LCAwLjE1KTtcbiAgY29sb3I6IHZhcigtLXRlYWwtYWNjZW50KTtcbn1cblxuLnN0YXQtaW5mbyBoMyB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5zZWN0aW9uLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5wYXJjb3Vycy1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY2FyZC10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9ncmVzcy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLnByb2dyZXNzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jYXJkLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLXN0YXRlLCAuZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7258:
/*!**************************************************************!*\
  !*** ./src/app/parcours/create/parcours-create.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParcoursCreateComponent: () => (/* binding */ ParcoursCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_parcours_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/parcours.service */ 3883);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function ParcoursCreateComponent_i_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 18);
  }
}
function ParcoursCreateComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
class ParcoursCreateComponent {
  constructor(parcoursService, router) {
    this.parcoursService = parcoursService;
    this.router = router;
    this.matiere = 'Tajweed';
    this.loading = false;
    this.error = '';
  }
  onGenerer() {
    this.loading = true;
    this.error = '';
    this.parcoursService.genererParcours(this.matiere).subscribe({
      next: parcours => {
        this.router.navigate(['/parcours', parcours.id]);
      },
      error: err => {
        this.error = err.error?.message || "حدث خطأ أثناء التوليد بالذكاء الاصطناعي";
        this.loading = false;
      }
    });
  }
  static {
    this.ɵfac = function ParcoursCreateComponent_Factory(t) {
      return new (t || ParcoursCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_parcours_service__WEBPACK_IMPORTED_MODULE_0__.ParcoursService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ParcoursCreateComponent,
      selectors: [["app-parcours-create"]],
      decls: 30,
      vars: 5,
      consts: [[1, "auth-container"], [1, "auth-card", "glass-panel", "animate-fade-in", 2, "max-width", "500px"], [1, "auth-header"], [1, "fa-solid", "fa-wand-magic-sparkles", "gold-icon"], [1, "gradient-text"], [1, "auth-form", 3, "ngSubmit"], [1, "form-group"], [1, "fa-solid", "fa-book"], ["name", "matiere", 1, "form-select", 2, "font-size", "1.05rem", "padding", "1rem", 3, "ngModelChange", "ngModel"], ["value", "Tajweed"], ["value", "Fiqh"], ["value", "Hadith"], ["value", "Tafsir"], ["type", "submit", 1, "btn-primary", "w-full", 2, "padding", "1rem", 3, "disabled"], ["class", "fa-solid fa-robot", 4, "ngIf"], ["class", "error-alert", 4, "ngIf"], [1, "auth-footer"], ["routerLink", "/dashboard", 1, "btn-outline", "btn-sm"], [1, "fa-solid", "fa-robot"], [1, "error-alert"], [1, "fa-solid", "fa-triangle-exclamation"]],
      template: function ParcoursCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0645\u0648\u0644\u0651\u062F \u0627\u0644\u062A\u0639\u0644\u0651\u0645 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0633\u064A\u0639\u0645\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A LLaMA 3 \u0639\u0644\u0649 \u0625\u0639\u062F\u0627\u062F \u0628\u0631\u0646\u0627\u0645\u062C \u062A\u0639\u0644\u0651\u0645 \u0645\u062E\u0635\u0651\u0635 \u0644\u0643.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ParcoursCreateComponent_Template_form_ngSubmit_8_listener() {
            return ctx.onGenerer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \u0627\u062E\u062A\u0631 \u0645\u0627\u062F\u0629\u064B");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ParcoursCreateComponent_Template_select_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.matiere, $event) || (ctx.matiere = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Tajweed (\u062A\u062C\u0648\u064A\u062F \u0627\u0644\u0642\u0631\u0622\u0646) \u2014 \u0641\u0646 \u0627\u0644\u062A\u0631\u062A\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Fiqh (\u0627\u0644\u0641\u0642\u0647 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A) \u2014 \u0627\u0644\u0641\u0642\u0647 \u0648\u0627\u0644\u0639\u0645\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Hadith (\u0627\u0644\u062D\u062F\u064A\u062B \u0627\u0644\u0646\u0628\u0648\u064A) \u2014 \u0627\u0644\u0623\u062D\u0627\u062F\u064A\u062B \u0627\u0644\u0646\u0628\u0648\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Tafsir (\u062A\u0641\u0633\u064A\u0631 \u0627\u0644\u0642\u0631\u0622\u0646) \u2014 \u0627\u0644\u062A\u0641\u0633\u064A\u0631 \u0648\u0627\u0644\u062A\u062F\u0628\u0651\u0631");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ParcoursCreateComponent_i_23_Template, 1, 0, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ParcoursCreateComponent_div_26_Template, 3, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16)(28, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0625\u0644\u063A\u0627\u0621 \u0648\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.matiere);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loading ? "\u062C\u0627\u0631\u064D \u062A\u0648\u0644\u064A\u062F \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A..." : "\u062A\u0648\u0644\u064A\u062F \u0645\u0633\u0627\u0631\u064A \u0627\u0644\u0645\u062E\u0635\u0651\u0635");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 160px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  padding: 2.5rem 2rem;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.gold-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--primary-gold);\n  margin-bottom: 0.75rem;\n  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.4));\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.35rem;\n}\n\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.error-alert[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #FCA5A5;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.demo-box[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  background: rgba(212, 175, 55, 0.08);\n  border: 1px dashed rgba(212, 175, 55, 0.3);\n  padding: 0.75rem;\n  border-radius: var(--radius-md);\n  font-size: 0.85rem;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.demo-box[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.18);\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QyxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xufVxuXG4uYXV0aC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDQwcHg7XG4gIHBhZGRpbmc6IDIuNXJlbSAycmVtO1xufVxuXG4uYXV0aC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5nb2xkLWljb24ge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxMHB4IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjQpKTtcbn1cblxuLmF1dGgtaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjM1cmVtO1xufVxuXG4uYXV0aC1oZWFkZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5lcnJvci1hbGVydCB7XG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSwgNjgsIDY4LCAwLjMpO1xuICBjb2xvcjogI0ZDQTVBNTtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmRlbW8tYm94IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4wOCk7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDIxMiwgMTc1LCA1NSwgMC4zKTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5kZW1vLWJveDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjE4KTtcbn1cblxuLmF1dGgtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uYXV0aC1mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6370:
/*!**************************************************************!*\
  !*** ./src/app/parcours/detail/parcours-detail.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParcoursDetailComponent: () => (/* binding */ ParcoursDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_parcours_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/parcours.service */ 3883);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/progress-bar/progress-bar.component */ 6189);





const _c0 = a0 => ["/quiz", a0];
function ParcoursDetailComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u062A\u0627\u062D \u0644\u0644\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0631\u0643\u0651\u0632\u0629 \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u0641\u0642\u0631\u0627\u062A.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 23)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 25)(13, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_26_Template_button_click_13_listener() {
      const lecon_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openLessonModal(lecon_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u062F\u0631\u0633 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const lecon_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lecon_r2.titre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (lecon_r2.questions == null ? null : lecon_r2.questions.length) || 0, " \u0623\u0633\u0626\u0644\u0629");
  }
}
function ParcoursDetailComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.closeLessonModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 30)(3, "div")(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.closeLessonModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 34)(13, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.closeLessonModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.closeLessonModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0627\u0644\u062F\u0631\u0633 ", ctx_r2.selectedLesson.ordreSequence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.selectedLesson.titre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getSelectedLessonContent(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx_r2.selectedLesson.id));
  }
}
function ParcoursDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u0627\u0644\u062A\u0642\u062F\u0651\u0645 \u0627\u0644\u0639\u0627\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-progress-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15)(23, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ParcoursDetailComponent_div_0_div_26_Template, 16, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ParcoursDetailComponent_div_0_div_27_Template, 18, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.parcours.matiere);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("\u0627\u0644\u0645\u0633\u062A\u0648\u0649 ", ctx_r2.parcours.niveauActuel, " \u2794 ", ctx_r2.parcours.niveauCible, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.parcours.titre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.parcours.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.parcours.progressionPourcent || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.parcours.progressionPourcent || 0)("showLabel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u062F\u0631\u0648\u0633 \u0627\u0644\u0645\u0646\u0647\u062C (", (ctx_r2.parcours.lecons == null ? null : ctx_r2.parcours.lecons.length) || 0, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.parcours.lecons);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedLesson);
  }
}
class ParcoursDetailComponent {
  constructor(route, parcoursService) {
    this.route = route;
    this.parcoursService = parcoursService;
    this.parcours = null;
    this.selectedLesson = null;
    this.loading = true;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.parcoursService.obtenirParcours(id).subscribe({
        next: data => {
          data.lecons = [...(data.lecons || [])].sort((a, b) => (a.ordreSequence || 0) - (b.ordreSequence || 0));
          this.parcours = data;
          this.loading = false;
        },
        error: () => this.loading = false
      });
    }
  }
  openLessonModal(lecon) {
    this.selectedLesson = lecon;
  }
  closeLessonModal() {
    this.selectedLesson = null;
  }
  getSelectedLessonContent() {
    if (!this.selectedLesson) {
      return '';
    }
    return this.selectedLesson.contenu;
  }
  static {
    this.ɵfac = function ParcoursDetailComponent_Factory(t) {
      return new (t || ParcoursDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_parcours_service__WEBPACK_IMPORTED_MODULE_0__.ParcoursService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ParcoursDetailComponent,
      selectors: [["app-parcours-detail"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container animate-fade-in", 4, "ngIf"], [1, "container", "animate-fade-in"], [1, "detail-header", "glass-panel"], [1, "header-top"], ["routerLink", "/parcours", 1, "btn-outline", "btn-sm"], [1, "fa-solid", "fa-arrow-right"], [1, "header-badges"], [1, "badge", "badge-emerald"], [1, "badge", "badge-gold"], [1, "gradient-text"], [1, "description-full"], [1, "progression-box"], [1, "prog-info"], [1, "gold-text", "font-bold"], [3, "value", "showLabel"], [1, "lessons-section"], [1, "lessons-list"], ["class", "lesson-card glass-card", 4, "ngFor", "ngForOf"], ["class", "lesson-modal-overlay", 3, "click", 4, "ngIf"], [1, "lesson-card", "glass-card"], [1, "lesson-number"], [1, "lesson-body"], [1, "lesson-summary"], [1, "lesson-meta"], [1, "fa-solid", "fa-list-check", "gold-text"], [1, "lesson-action"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "fa-solid", "fa-book-open-reader"], [1, "lesson-modal-overlay", 3, "click"], [1, "lesson-modal", "glass-panel", 3, "click"], [1, "modal-header"], ["type", "button", "aria-label", "\u0625\u063A\u0644\u0627\u0642", 1, "modal-close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "modal-content", "arabic-font"], [1, "modal-actions"], ["type", "button", 1, "btn-outline", 3, "click"], [1, "btn-primary", 3, "click", "routerLink"], [1, "fa-solid", "fa-circle-play"]],
      template: function ParcoursDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ParcoursDetailComponent_div_0_Template, 28, 11, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.parcours);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__.ProgressBarComponent],
      styles: [".detail-header[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n\n.header-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n\n.description-full[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.05rem;\n  line-height: 1.6;\n  margin: 1rem 0 2rem 0;\n}\n\n.progression-box[_ngcontent-%COMP%] {\n  background: rgba(6, 18, 14, 0.6);\n  padding: 1.25rem;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n}\n\n.prog-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n\n.lessons-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.lessons-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n\n.lesson-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  padding: 1.75rem;\n}\n\n.lesson-number[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-full);\n  background: rgba(212, 175, 55, 0.15);\n  color: var(--primary-gold);\n  border: 1px solid var(--primary-gold);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n\n.lesson-body[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.lesson-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n}\n\n.lesson-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  line-height: 1.5;\n\n}\n\n.lesson-summary[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n\n.lesson-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.85rem;\n  margin-top: 0.85rem;\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.lesson-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.lesson-action[_ngcontent-%COMP%] {\n  align-self: center;\n  flex-shrink: 0;\n}\n\n.lesson-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  background: rgba(3, 10, 8, 0.72);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n\n.lesson-modal[_ngcontent-%COMP%] {\n  width: min(920px, 100%);\n  max-height: min(88vh, 900px);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-color: rgba(212, 175, 55, 0.34);\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.25rem;\n  padding: 1.5rem 1.75rem 1rem;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0.8rem;\n  font-size: 1.45rem;\n  line-height: 1.3;\n}\n\n.modal-close[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex: 0 0 40px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--border-light);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-main);\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--primary-gold);\n  border-color: var(--primary-gold);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  padding: 0 1.75rem 1.25rem;\n  overflow-y: auto;\n  white-space: pre-wrap;\n  color: var(--text-main);\n  font-size: 1rem;\n  line-height: 1.85;\n}\n\n.modal-content.arabic-font[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n  font-size: 1.2rem;\n}\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.85rem;\n  padding: 1rem 1.75rem 1.5rem;\n  border-top: 1px solid var(--border-light);\n  background: rgba(6, 18, 14, 0.36);\n}\n\n@media (max-width: 760px) {\n  .header-top[_ngcontent-%COMP%], .lesson-card[_ngcontent-%COMP%], .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .lesson-action[_ngcontent-%COMP%], .lesson-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .modal-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n\n  .lesson-modal-overlay[_ngcontent-%COMP%] {\n    align-items: stretch;\n    padding: 0.75rem;\n  }\n\n  .lesson-modal[_ngcontent-%COMP%] {\n    max-height: 94vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFyY291cnMvZGV0YWlsL3BhcmNvdXJzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5Q0FBeUM7RUFDekMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7OztJQUdFLHNCQUFzQjtFQUN4Qjs7RUFFQTs7OztJQUlFLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuXG4uaGVhZGVyLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uaGVhZGVyLWJhZGdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC43NXJlbTtcbn1cblxuLmRlc2NyaXB0aW9uLWZ1bGwge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luOiAxcmVtIDAgMnJlbSAwO1xufVxuXG4ucHJvZ3Jlc3Npb24tYm94IHtcbiAgYmFja2dyb3VuZDogcmdiYSg2LCAxOCwgMTQsIDAuNik7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG59XG5cbi5wcm9nLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxlc3NvbnMtc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5sZXNzb25zLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuMjVyZW07XG59XG5cbi5sZXNzb24tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEuNXJlbTtcbiAgcGFkZGluZzogMS43NXJlbTtcbn1cblxuLmxlc3Nvbi1udW1iZXIge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjE1KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ29sZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ29sZCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5sZXNzb24tYm9keSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmxlc3Nvbi1ib2R5IGgzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmxlc3Nvbi1ib2R5IHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxufVxuXG4ubGVzc29uLXN1bW1hcnkge1xuICBtYXgtd2lkdGg6IDcyMHB4O1xufVxuXG4ubGVzc29uLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC44NXJlbTtcbiAgbWFyZ2luLXRvcDogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmxlc3Nvbi1tZXRhIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjRyZW07XG59XG5cbi5sZXNzb24tYWN0aW9uIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmxlc3Nvbi1tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAxMCwgOCwgMC43Mik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG5cbi5sZXNzb24tbW9kYWwge1xuICB3aWR0aDogbWluKDkyMHB4LCAxMDAlKTtcbiAgbWF4LWhlaWdodDogbWluKDg4dmgsIDkwMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4zNCk7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMS4yNXJlbTtcbiAgcGFkZGluZzogMS41cmVtIDEuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG59XG5cbi5tb2RhbC1oZWFkZXIgaDIge1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLm1vZGFsLWNsb3NlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmxleDogMCAwIDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5tb2RhbC1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktZ29sZCk7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgcGFkZGluZzogMCAxLjc1cmVtIDEuMjVyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuODU7XG59XG5cbi5tb2RhbC1jb250ZW50LmFyYWJpYy1mb250IHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm1vZGFsLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDAuODVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMS43NXJlbSAxLjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYsIDE4LCAxNCwgMC4zNik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuaGVhZGVyLXRvcCxcbiAgLmxlc3Nvbi1jYXJkLFxuICAubW9kYWwtYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5sZXNzb24tYWN0aW9uLFxuICAubGVzc29uLWFjdGlvbiBidXR0b24sXG4gIC5tb2RhbC1hY3Rpb25zIGEsXG4gIC5tb2RhbC1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAubGVzc29uLW1vZGFsLW92ZXJsYXkge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gIH1cblxuICAubGVzc29uLW1vZGFsIHtcbiAgICBtYXgtaGVpZ2h0OiA5NHZoO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6138:
/*!**********************************************************!*\
  !*** ./src/app/parcours/list/parcours-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParcoursListComponent: () => (/* binding */ ParcoursListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_parcours_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/parcours.service */ 3883);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/progress-bar/progress-bar.component */ 6189);





const _c0 = a0 => ["/parcours", a0];
function ParcoursListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ParcoursListComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 16)(11, "div", 17)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0627\u0644\u062A\u0642\u062F\u0651\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "app-progress-bar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 20)(18, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \u0639\u0631\u0636 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1.matiere);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0627\u0644\u0645\u0633\u062A\u0648\u0649 ", p_r1.niveauActuel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1.titre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", p_r1.progressionPourcent || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", p_r1.progressionPourcent || 0)("showLabel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, p_r1.id));
  }
}
function ParcoursListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ParcoursListComponent_div_11_div_1_Template, 21, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.parcoursList);
  }
}
class ParcoursListComponent {
  constructor(parcoursService) {
    this.parcoursService = parcoursService;
    this.parcoursList = [];
    this.loading = true;
  }
  ngOnInit() {
    this.parcoursService.obtenirMesParcours().subscribe({
      next: data => {
        this.parcoursList = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  static {
    this.ɵfac = function ParcoursListComponent_Factory(t) {
      return new (t || ParcoursListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_parcours_service__WEBPACK_IMPORTED_MODULE_0__.ParcoursService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ParcoursListComponent,
      selectors: [["app-parcours-list"]],
      decls: 12,
      vars: 2,
      consts: [[1, "container", "animate-fade-in"], [1, "section-header"], [1, "gradient-text"], ["routerLink", "/parcours/new", 1, "btn-primary"], [1, "fa-solid", "fa-plus"], ["class", "loading-state", 4, "ngIf"], ["class", "grid-3 parcours-grid", 4, "ngIf"], [1, "loading-state"], [1, "fa-solid", "fa-spinner", "fa-spin", "gold-text"], [1, "grid-3", "parcours-grid"], ["class", "parcours-card glass-card", 4, "ngFor", "ngForOf"], [1, "parcours-card", "glass-card"], [1, "card-top"], [1, "badge", "badge-emerald"], [1, "badge", "badge-gold"], [1, "description"], [1, "progress-section"], [1, "progress-header"], [1, "gold-text"], [3, "value", "showLabel"], [1, "card-actions"], [1, "btn-secondary", "w-full", 3, "routerLink"], [1, "fa-solid", "fa-book-open"]],
      template: function ParcoursListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u062C\u0645\u064A\u0639 \u0645\u0633\u0627\u0631\u0627\u062A \u062A\u0639\u0644\u0651\u0645\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0627\u0633\u062A\u0643\u0634\u0641 \u0645\u0646\u0627\u0647\u062C\u0643 \u0627\u0644\u0645\u0648\u0644\u0651\u062F\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u062A\u0627\u0628\u0639 \u062A\u0639\u0644\u0651\u0645\u0643 \u0641\u064A \u0627\u0644\u0625\u0633\u0644\u0627\u0645.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u0645\u0633\u0627\u0631 \u062C\u062F\u064A\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ParcoursListComponent_div_10_Template, 3, 0, "div", 5)(11, ParcoursListComponent_div_11_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__.ProgressBarComponent],
      styles: [".welcome-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 2.5rem;\n  margin-bottom: 2rem;\n  background: linear-gradient(135deg, rgba(14, 34, 27, 0.9) 0%, rgba(21, 50, 40, 0.9) 100%);\n  border: 1px solid var(--border-glass);\n}\n\n.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 0.5rem;\n}\n\n.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n\n.gold-glow[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.15);\n  color: var(--primary-gold);\n}\n\n.emerald-glow[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--emerald-glow);\n}\n\n.teal-glow[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.15);\n  color: var(--teal-accent);\n}\n\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.parcours-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.progress-section[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 0.4rem;\n  font-weight: 600;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: var(--text-muted);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5RkFBeUY7RUFDekYscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtYmFubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAycmVtIDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNCwgMzQsIDI3LCAwLjkpIDAlLCByZ2JhKDIxLCA1MCwgNDAsIDAuOSkgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcyk7XG59XG5cbi53ZWxjb21lLXRleHQgaDIge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLndlbGNvbWUtdGV4dCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uc3RhdHMtZ3JpZCB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5zdGF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuMjVyZW07XG59XG5cbi5zdGF0LWljb24ge1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5nb2xkLWdsb3cge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4xNSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xufVxuXG4uZW1lcmFsZC1nbG93IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMTUpO1xuICBjb2xvcjogdmFyKC0tZW1lcmFsZC1nbG93KTtcbn1cblxuLnRlYWwtZ2xvdyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjAsIDE4NCwgMTY2LCAwLjE1KTtcbiAgY29sb3I6IHZhcigtLXRlYWwtYWNjZW50KTtcbn1cblxuLnN0YXQtaW5mbyBoMyB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5zZWN0aW9uLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5wYXJjb3Vycy1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY2FyZC10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9ncmVzcy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLnByb2dyZXNzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jYXJkLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLXN0YXRlLCAuZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3883:
/*!*******************************************************!*\
  !*** ./src/app/parcours/services/parcours.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParcoursService: () => (/* binding */ ParcoursService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class ParcoursService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/parcours`;
  }
  genererParcours(matiere) {
    return this.http.post(`${this.apiUrl}/generer`, {
      matiere
    });
  }
  obtenirParcours(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  obtenirMesParcours() {
    return this.http.get(`${this.apiUrl}/mes-parcours`);
  }
  obtenirProgression(id) {
    return this.http.get(`${this.apiUrl}/${id}/progression`);
  }
  static {
    this.ɵfac = function ParcoursService_Factory(t) {
      return new (t || ParcoursService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ParcoursService,
      factory: ParcoursService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1400:
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizComponent: () => (/* binding */ QuizComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/quiz.service */ 663);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function QuizComponent_div_0_div_13_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 15);
  }
}
function QuizComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0623\u062F\u062E\u0644 \u0625\u062C\u0627\u0628\u062A\u0643 \u0627\u0644\u0645\u0643\u062A\u0648\u0628\u0629:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function QuizComponent_div_0_div_13_Template_textarea_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.userAnswer, $event) || (ctx_r1.userAnswer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizComponent_div_0_div_13_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.submitAnswer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, QuizComponent_div_0_div_13_i_5_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.userAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.submitting || !ctx_r1.userAnswer.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.submitting ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A..." : "\u0625\u0631\u0633\u0627\u0644 \u0625\u062C\u0627\u0628\u062A\u064A");
  }
}
function QuizComponent_div_0_div_14_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizComponent_div_0_div_14_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.nextQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u062A\u0627\u0644\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function QuizComponent_div_0_div_14_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizComponent_div_0_div_14_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.nextQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0648\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function QuizComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u062A\u0642\u064A\u064A\u0645 \u0641\u0648\u0631\u064A \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, QuizComponent_div_0_div_14_button_10_Template, 3, 0, "button", 22)(11, QuizComponent_div_0_div_14_button_11_Template, 3, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" +", ctx_r1.points, " \u0646\u0642\u0627\u0637 \u0645\u0643\u062A\u0633\u0628\u0629 ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.evaluation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentQuestionIndex < ctx_r1.questions.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentQuestionIndex === ctx_r1.questions.length - 1);
  }
}
function QuizComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div")(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0648\u0627\u0644\u062A\u0645\u0631\u064A\u0646 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, QuizComponent_div_0_div_13_Template, 8, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, QuizComponent_div_0_div_14_Template, 12, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Le\u00E7on : ", ctx_r1.lecon == null ? null : ctx_r1.lecon.titre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \u0627\u0644\u0633\u0624\u0627\u0644 ", ctx_r1.currentQuestionIndex + 1, " \u0645\u0646 ", ctx_r1.questions.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.questions[ctx_r1.currentQuestionIndex].texte);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.submitted);
  }
}
function QuizComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0633\u0626\u0644\u0629 \u0645\u062A\u0627\u062D\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u062F\u0631\u0633.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class QuizComponent {
  constructor(route, router, quizService) {
    this.route = route;
    this.router = router;
    this.quizService = quizService;
    this.leconId = 0;
    this.lecon = null;
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.userAnswer = '';
    this.submitted = false;
    this.submitting = false;
    this.evaluation = '';
    this.points = 0;
    this.loading = true;
  }
  ngOnInit() {
    this.leconId = Number(this.route.snapshot.paramMap.get('leconId'));
    if (this.leconId) {
      this.loadQuizData();
    }
  }
  loadQuizData() {
    this.quizService.obtenirLeconDetails(this.leconId).subscribe({
      next: data => {
        this.lecon = data;
        this.questions = data.questions || [];
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  submitAnswer() {
    if (!this.userAnswer.trim()) return;
    const currentQ = this.questions[this.currentQuestionIndex];
    this.submitting = true;
    this.quizService.soumettre(currentQ.id, this.userAnswer).subscribe({
      next: response => {
        this.evaluation = response.evaluation;
        this.points = response.points;
        this.submitted = true;
        this.submitting = false;
      },
      error: () => this.submitting = false
    });
  }
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.userAnswer = '';
      this.submitted = false;
      this.evaluation = '';
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
  static {
    this.ɵfac = function QuizComponent_Factory(t) {
      return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__.QuizService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: QuizComponent,
      selectors: [["app-quiz"]],
      decls: 2,
      vars: 2,
      consts: [["class", "container animate-fade-in", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container", "animate-fade-in"], [1, "quiz-card", "glass-panel"], [1, "quiz-header"], [1, "badge", "badge-gold"], [1, "question-counter"], [1, "question-box"], [1, "question-text"], ["class", "answer-section", 4, "ngIf"], ["class", "evaluation-box glass-card animate-fade-in", 4, "ngIf"], [1, "answer-section"], ["rows", "4", "placeholder", "\u0627\u0643\u062A\u0628 \u0625\u062C\u0627\u0628\u062A\u0643 \u0647\u0646\u0627 \u0628\u062F\u0642\u0651\u0629...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], ["class", "fa-solid fa-paper-plane", 4, "ngIf"], [1, "fa-solid", "fa-paper-plane"], [1, "evaluation-box", "glass-card", "animate-fade-in"], [1, "eval-header"], [1, "points-badge"], [1, "fa-solid", "fa-trophy", "gold-text"], [1, "eval-body"], [1, "eval-actions"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "btn-primary", 3, "click"], [1, "fa-solid", "fa-arrow-left"], [1, "fa-solid", "fa-check-double"], [1, "container"], [1, "glass-card", "text-center", 2, "padding", "3rem"], ["routerLink", "/dashboard", 1, "btn-primary", 2, "margin-top", "1rem"]],
      template: function QuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QuizComponent_div_0_Template, 15, 6, "div", 0)(1, QuizComponent_div_1_Template, 6, 0, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.questions.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.questions.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: [".quiz-card[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.quiz-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  border-bottom: 1px solid var(--border-light);\n  padding-bottom: 1.25rem;\n}\n\n.quiz-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n.question-counter[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary-gold);\n  background: rgba(212, 175, 55, 0.15);\n  padding: 0.5rem 1rem;\n  border-radius: var(--radius-full);\n  font-size: 0.9rem;\n}\n\n.question-text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  line-height: 1.5;\n  margin-bottom: 1rem;\n  color: #FFF;\n}\n\n.answer-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n\n.answer-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n\n.evaluation-box[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(14, 34, 27, 0.9) 100%);\n  border: 1px solid var(--emerald-glow);\n}\n\n.eval-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n.points-badge[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.2);\n  color: var(--primary-gold);\n  font-weight: 800;\n  padding: 0.4rem 0.85rem;\n  border-radius: var(--radius-md);\n}\n\n.eval-body[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.6;\n  color: #E5E7EB;\n  margin-bottom: 1.5rem;\n}\n\n.eval-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRGQUE0RjtFQUM1RixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5xdWl6LWNhcmQge1xuICBwYWRkaW5nOiAyLjVyZW07XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucXVpei1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuLnF1aXotaGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLnF1ZXN0aW9uLWNvdW50ZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1nb2xkKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDE3NSwgNTUsIDAuMTUpO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnF1ZXN0aW9uLXRleHQge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5hbnN3ZXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYW5zd2VyLXNlY3Rpb24gbGFiZWwge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZXZhbHVhdGlvbi1ib3gge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSkgMCUsIHJnYmEoMTQsIDM0LCAyNywgMC45KSAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZW1lcmFsZC1nbG93KTtcbn1cblxuLmV2YWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucG9pbnRzLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDE3NSwgNTUsIDAuMik7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAwLjRyZW0gMC44NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbn1cblxuLmV2YWwtYm9keSB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgY29sb3I6ICNFNUU3RUI7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmV2YWwtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 663:
/*!***********************************************!*\
  !*** ./src/app/quiz/services/quiz.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizService: () => (/* binding */ QuizService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class QuizService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/question`;
  }
  obtenirQuestionsParLecon(leconId) {
    return this.http.get(`${this.apiUrl}/lecon/${leconId}`);
  }
  obtenirLeconDetails(leconId) {
    return this.http.get(`${this.apiUrl}/lecon-details/${leconId}`);
  }
  soumettre(questionId, reponse) {
    return this.http.post(`${this.apiUrl}/soumettre`, {
      questionId,
      reponse
    });
  }
  static {
    this.ɵfac = function QuizService_Factory(t) {
      return new (t || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: QuizService,
      factory: QuizService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1765:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 13,
      vars: 0,
      consts: [[1, "footer"], [1, "container", "footer-content"], [1, "footer-links"], ["href", "#"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A9 2026 Murshid (\u0645\u064F\u0631\u0634\u0650\u062F). \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629. \u0645\u0646\u0635\u0629 \u062A\u0639\u0644\u0651\u0645 \u0625\u0633\u0644\u0627\u0645\u064A \u062A\u0643\u064A\u0651\u0641\u064A\u0629 \u062A\u064F\u0631\u0634\u062F \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tajweed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fiqh");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hadith");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tafsir");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n      border-top: 1px solid var(--border-light);\n      margin-top: 4rem;\n      padding: 2rem 0;\n      color: var(--text-muted);\n      font-size: 0.875rem;\n    }\n    .footer-content[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: center;\n      justify-content: space-between;\n      gap: 1rem;\n    }\n    .footer-links[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 1.25rem;\n    }\n    .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: var(--text-muted);\n      text-decoration: none;\n      transition: var(--transition);\n    }\n    .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: var(--primary-gold);\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UseUNBQXlDO01BQ3pDLGdCQUFnQjtNQUNoQixlQUFlO01BQ2Ysd0JBQXdCO01BQ3hCLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsYUFBYTtNQUNiLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLFNBQVM7SUFDWDtJQUNBO01BQ0UsYUFBYTtNQUNiLFlBQVk7SUFDZDtJQUNBO01BQ0Usd0JBQXdCO01BQ3hCLHFCQUFxQjtNQUNyQiw2QkFBNkI7SUFDL0I7SUFDQTtNQUNFLDBCQUEwQjtJQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5mb290ZXIge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICB9XG4gICAgLmZvb3Rlci1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgIH1cbiAgICAuZm9vdGVyLWxpbmtzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEuMjVyZW07XG4gICAgfVxuICAgIC5mb290ZXItbGlua3MgYSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG4gICAgLmZvb3Rlci1saW5rcyBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9557:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/gesture-nav/gesture-nav.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GestureNavComponent: () => (/* binding */ GestureNavComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_game_murshid_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _gesture_gestures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gesture/gestures */ 9348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _gesture_gesture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gesture/gesture.service */ 2244);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);







const _c0 = ["video"];
const _c1 = ["canvas"];
function GestureNavComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 27);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r1.cursor.x * 100 + "vw")("top", ctx_r1.cursor.y * 100 + "vh");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("clicking", ctx_r1.clicking);
  }
}
function GestureNavComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u0647\u064A\u0626\u0629\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function GestureNavComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0646\u0634\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function GestureNavComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.error || "\u062E\u0637\u0623");
  }
}
function GestureNavComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u063A\u064A\u0631 \u0646\u0634\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function GestureNavComponent_div_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.handLabel(ctx_r1.current.handedness), " ");
  }
}
function GestureNavComponent_div_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u2192 ", ctx_r1.lastLabel, "");
  }
}
function GestureNavComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, GestureNavComponent_div_20_span_3_Template, 2, 1, "span", 34)(4, GestureNavComponent_div_20_span_4_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.current.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.current.handedness && ctx_r1.current.handedness !== "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.lastLabel);
  }
}
function GestureNavComponent_div_75_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](h_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](h_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](h_r3.time);
  }
}
function GestureNavComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0627\u0644\u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GestureNavComponent_div_75_li_4_Template, 7, 3, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.history);
  }
}
class GestureNavComponent {
  constructor(gesture, router) {
    this.gesture = gesture;
    this.router = router;
    this.GestureType = _gesture_gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType;
    this.enabled = false;
    this.status = 'idle';
    this.error = '';
    this.current = null;
    this.lastLabel = '';
    this.flash = false;
    this.clicking = false;
    this.cursor = null;
    this.history = [];
    this.settings = {
      holdFrames: 3,
      cooldownMs: 1200,
      swipeThreshold: 0.22,
      sound: true
    };
    this.actions = _gesture_gestures__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_GESTURE_ACTIONS;
    this.subs = [];
    this.audioCtx = null;
    this.subs.push(this.gesture.status$.subscribe(s => {
      this.status = s;
      this.enabled = s === 'running';
    }));
    this.subs.push(this.gesture.error$.subscribe(e => this.error = e));
    this.subs.push(this.gesture.settings$.subscribe(s => this.settings = s));
    this.subs.push(this.gesture.cursor$.subscribe(c => this.cursor = c));
    this.subs.push(this.gesture.gesture$.subscribe(g => {
      this.current = g;
      this.onRecognized(g);
    }));
  }
  toggle() {
    var _this = this;
    return (0,C_Users_user_Desktop_game_murshid_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.error = '';
      if (_this.enabled) {
        _this.gesture.stop();
        return;
      }
      yield _this.gesture.start(_this.videoRef.nativeElement, _this.canvasRef.nativeElement);
    })();
  }
  /** Close the panel and stop the camera. */
  close() {
    this.gesture.stop();
  }
  onRecognized(g) {
    const action = this.actions.find(a => a.gesture === g.type);
    if (!action) {
      return;
    }
    this.lastLabel = action.label ?? g.type;
    this.pushHistory(g.type, this.lastLabel);
    this.triggerFlash();
    if (this.settings.sound) {
      this.beep();
    }
    if (action.click) {
      this.dispatchClick();
    } else if (action.back) {
      window.history.back();
    } else if (action.forward) {
      window.history.forward();
    } else if (action.scroll) {
      window.scrollBy({
        top: action.scroll * 320,
        behavior: 'smooth'
      });
    } else if (action.commands) {
      this.router.navigate(action.commands);
    }
    // FIST (grab-scroll) and any action without nav props: feedback only.
  }
  /** Dispatch a real DOM click at the current virtual-cursor position. */
  dispatchClick() {
    if (!this.cursor) {
      return;
    }
    const x = this.cursor.x * window.innerWidth;
    const y = this.cursor.y * window.innerHeight;
    const target = document.elementFromPoint(x, y);
    this.clicking = true;
    setTimeout(() => this.clicking = false, 180);
    if (target) {
      target.click();
      target.focus?.();
    }
  }
  pushHistory(type, label) {
    const time = new Date().toLocaleTimeString();
    this.history = [{
      type,
      label,
      time
    }, ...this.history].slice(0, 6);
  }
  triggerFlash() {
    this.flash = true;
    setTimeout(() => this.flash = false, 250);
  }
  beep() {
    try {
      this.audioCtx = this.audioCtx ?? new (window.AudioContext || window.webkitAudioContext)();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.frequency.value = 660;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.2);
    } catch {
      /* audio not available */
    }
  }
  updateHold(v) {
    this.gesture.updateSettings({
      holdFrames: v
    });
  }
  updateCooldown(v) {
    this.gesture.updateSettings({
      cooldownMs: v
    });
  }
  updateSwipe(v) {
    this.gesture.updateSettings({
      swipeThreshold: v
    });
  }
  toggleSound() {
    this.gesture.updateSettings({
      sound: !this.settings.sound
    });
  }
  gestureLabel(type) {
    return this.actions.find(a => a.gesture === type)?.label ?? type;
  }
  handLabel(handedness) {
    return handedness === 'Right' ? 'اليد اليمنى' : handedness === 'Left' ? 'اليد اليسرى' : handedness;
  }
  ngOnDestroy() {
    this.gesture.stop();
    this.subs.forEach(s => s.unsubscribe());
  }
  static {
    this.ɵfac = function GestureNavComponent_Factory(t) {
      return new (t || GestureNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_gesture_gesture_service__WEBPACK_IMPORTED_MODULE_2__.GestureService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: GestureNavComponent,
      selectors: [["app-gesture-nav"]],
      viewQuery: function GestureNavComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.videoRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 76,
      vars: 37,
      consts: [["video", ""], ["canvas", ""], [1, "gesture-nav"], ["class", "virtual-cursor", 3, "clicking", "left", "top", 4, "ngIf"], [1, "gesture-toggle", 3, "click", "title"], [1, "fa-solid"], [1, "toggle-text"], [1, "gesture-panel", 3, "hidden"], ["title", "\u0625\u063A\u0644\u0627\u0642", "aria-label", "\u0625\u063A\u0644\u0627\u0642", 1, "close-btn", 3, "click"], [1, "camera-wrap"], ["autoplay", "", "playsinline", "", "muted", ""], ["width", "240", "height", "180"], [1, "panel-body"], [1, "status", 3, "ngSwitch"], ["class", "badge loading", 4, "ngSwitchCase"], ["class", "badge live", 4, "ngSwitchCase"], ["class", "badge error", 4, "ngSwitchCase"], ["class", "badge", 4, "ngSwitchDefault"], ["class", "current", 4, "ngIf"], [1, "settings", 3, "open"], ["type", "range", "min", "1", "max", "8", "step", "1", 3, "input", "value"], ["type", "range", "min", "300", "max", "3000", "step", "100", 3, "input", "value"], ["type", "range", "min", "0.1", "max", "0.5", "step", "0.01", 3, "input", "value"], [1, "switch"], ["type", "checkbox", 3, "change", "checked"], [1, "legend"], ["class", "history", 4, "ngIf"], [1, "virtual-cursor"], [1, "badge", "loading"], [1, "badge", "live"], [1, "badge", "error"], [1, "badge"], [1, "current"], [1, "gesture-name"], ["class", "hand-badge", 4, "ngIf"], ["class", "action-label", 4, "ngIf"], [1, "hand-badge"], [1, "action-label"], [1, "history"], [1, "history-title"], [4, "ngFor", "ngForOf"], [1, "h-type"], [1, "h-label"], [1, "h-time"]],
      template: function GestureNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GestureNavComponent_div_1_Template, 1, 6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestureNavComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 7)(7, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestureNavComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "video", 10, 0)(12, "canvas", 11, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12)(15, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, GestureNavComponent_span_16_Template, 2, 0, "span", 14)(17, GestureNavComponent_span_17_Template, 2, 0, "span", 15)(18, GestureNavComponent_span_18_Template, 2, 1, "span", 16)(19, GestureNavComponent_span_19_Template, 2, 0, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, GestureNavComponent_div_20_Template, 5, 3, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "details", 19)(22, "summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " \u0627\u0644\u062B\u0628\u0627\u062A (\u0625\u0637\u0627\u0631\u0627\u062A) : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function GestureNavComponent_Template_input_input_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.updateHold(+$event.target.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " \u0641\u062A\u0631\u0629 \u0627\u0644\u062A\u0647\u062F\u0626\u0629 (ms) : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function GestureNavComponent_Template_input_input_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.updateCooldown(+$event.target.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " \u062D\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u062A\u0645\u0631\u064A\u0631 : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function GestureNavComponent_Template_input_input_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.updateSwipe(+$event.target.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 23)(40, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function GestureNavComponent_Template_input_change_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleSound());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " \u0635\u0648\u062A \u0627\u0644\u062A\u0623\u0643\u064A\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ul", 25)(43, "li")(44, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\u270B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "li")(48, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\u261D\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "li")(52, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\u270C\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li")(56, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\uD83D\uDC4D");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "li")(60, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\uD83E\uDD0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "li")(64, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "\u270A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "li")(68, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "\u2194\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "li")(72, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\u2195\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, GestureNavComponent_div_75_Template, 5, 1, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.enabled && ctx.cursor);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx.enabled ? "\u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u062A\u0646\u0642\u0651\u0644 \u0628\u0627\u0644\u0625\u064A\u0645\u0627\u0621\u0627\u062A" : "\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u062A\u0646\u0642\u0651\u0644 \u0628\u0627\u0644\u0625\u064A\u0645\u0627\u0621\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-pressed", ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fa-hand", !ctx.enabled)("fa-hand-point-up", ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.enabled ? "\u0627\u0644\u0625\u064A\u0645\u0627\u0621\u0627\u062A \u0645\u0641\u0639\u0651\u0644\u0629" : "\u0627\u0644\u0625\u064A\u0645\u0627\u0621\u0627\u062A \u0645\u0639\u0637\u0651\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("flash", ctx.flash);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.status === "idle");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "loading");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "running");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "error");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.current && ctx.current.type !== ctx.GestureType.NONE);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("open", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.settings.holdFrames);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.settings.holdFrames);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.settings.cooldownMs);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.settings.cooldownMs);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.settings.swipeThreshold);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.settings.swipeThreshold);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.settings.sound);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.OPEN_HAND), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.POINT), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.PEACE), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.THUMBS_UP), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.PINCH), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.FIST), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.gestureLabel(ctx.GestureType.SWIPE_LEFT), " / ", ctx.gestureLabel(ctx.GestureType.SWIPE_RIGHT), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.gestureLabel(ctx.GestureType.SWIPE_UP), " / ", ctx.gestureLabel(ctx.GestureType.SWIPE_DOWN), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.history.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchDefault],
      styles: [".gesture-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 16px;\n  bottom: 16px;\n  z-index: 1000;\n  font-family: 'Cairo', 'Inter', sans-serif;\n}\n\n.gesture-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 999px;\n  background: #0f766e;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 6px 18px rgba(15, 118, 110, 0.4);\n  transition: transform 0.15s ease, background 0.15s ease;\n}\n\n.gesture-toggle[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.gesture-toggle.active[_ngcontent-%COMP%] {\n  background: #14b8a6;\n}\n\n.gesture-nav[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n\n\n.virtual-cursor[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50vw;\n  top: 50vh;\n  width: 22px;\n  height: 22px;\n  margin: -11px 0 0 -11px;\n  border: 2px solid #2dd4bf;\n  border-radius: 50%;\n  background: rgba(45, 212, 191, 0.25);\n  box-shadow: 0 0 0 4px rgba(45, 212, 191, 0.15);\n  pointer-events: none;\n  z-index: 2000;\n  transition: transform 0.05s linear, background 0.1s ease;\n}\n\n.virtual-cursor[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 4px;\n  height: 4px;\n  margin: -2px 0 0 -2px;\n  border-radius: 50%;\n  background: #2dd4bf;\n}\n\n.virtual-cursor.clicking[_ngcontent-%COMP%] {\n  transform: scale(0.7);\n  background: rgba(20, 184, 166, 0.55);\n  box-shadow: 0 0 0 8px rgba(20, 184, 166, 0.25);\n}\n\n.gesture-panel[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  width: 260px;\n  background: rgba(15, 23, 42, 0.92);\n  color: #e2e8f0;\n  border-radius: 14px;\n  padding: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);\n  backdrop-filter: blur(6px);\n  transition: box-shadow 0.15s ease, border-color 0.15s ease;\n  border: 2px solid transparent;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  background: rgba(148, 163, 184, 0.18);\n  color: #e2e8f0;\n  font-size: 13px;\n  line-height: 1;\n  cursor: pointer;\n  z-index: 5;\n  transition: background 0.15s ease;\n}\n\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  color: #fff;\n}\n\n.panel-body[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-y: auto;\n  margin-top: 8px;\n  padding-inline-end: 4px;\n}\n\n.panel-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n.panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(148, 163, 184, 0.12);\n  border-radius: 8px;\n}\n\n.panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #14b8a6;\n  border-radius: 8px;\n}\n\n.panel-body[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #14b8a6 rgba(148, 163, 184, 0.12);\n}\n\n.gesture-panel.flash[_ngcontent-%COMP%] {\n  border-color: #2dd4bf;\n  box-shadow: 0 0 0 4px rgba(45, 212, 191, 0.35), 0 10px 30px rgba(0, 0, 0, 0.45);\n}\n\n.camera-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 240px;\n  height: 180px;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #000;\n  margin: 0 auto;\n}\n\n.camera-wrap[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .camera-wrap[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 240px;\n  height: 180px;\n  object-fit: cover;\n}\n\n\n\n.camera-wrap[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n\n.status[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #334155;\n  color: #cbd5e1;\n}\n\n.badge.live[_ngcontent-%COMP%] {\n  background: #064e3b;\n  color: #6ee7b7;\n}\n\n.badge.loading[_ngcontent-%COMP%] {\n  background: #422006;\n  color: #fcd34d;\n}\n\n.badge.error[_ngcontent-%COMP%] {\n  background: #7f1d1d;\n  color: #fecaca;\n}\n\n.current[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  text-align: center;\n  font-size: 14px;\n}\n\n.gesture-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #5eead4;\n  letter-spacing: 0.5px;\n}\n\n.hand-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-inline-start: 6px;\n  font-size: 11px;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: #134e4a;\n  color: #99f6e4;\n}\n\n.action-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  margin-inline-start: 6px;\n}\n\n.legend[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 0;\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n.legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 3px 0;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n}\n\n.legend[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n\n.settings[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 12px;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n  padding-top: 8px;\n}\n\n.settings[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #5eead4;\n  font-weight: 600;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  color: #cbd5e1;\n}\n\n.settings[_ngcontent-%COMP%]   input[type='range'][_ngcontent-%COMP%] {\n  width: 100%;\n  accent-color: #14b8a6;\n  margin-top: 2px;\n}\n\n.settings[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.history[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n  padding-top: 8px;\n}\n\n.history-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 4px;\n}\n\n.history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  padding: 2px 0;\n  color: #cbd5e1;\n}\n\n.history[_ngcontent-%COMP%]   .h-type[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #5eead4;\n  font-weight: 700;\n}\n\n.history[_ngcontent-%COMP%]   .h-label[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: start;\n}\n\n.history[_ngcontent-%COMP%]   .h-time[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #64748b;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2VzdHVyZS1uYXYvZ2VzdHVyZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsOENBQThDO0VBQzlDLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQSw4REFBOEQ7QUFDOUQ7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyw4Q0FBOEM7RUFDOUMsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDJDQUEyQztFQUMzQywwQkFBMEI7RUFDMUIsMERBQTBEO0VBQzFELDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtFQUErRTtBQUNqRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQSxrRkFBa0Y7QUFDbEY7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLCtDQUErQztFQUMvQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmdlc3R1cmUtbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTZweDtcbiAgYm90dG9tOiAxNnB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBmb250LWZhbWlseTogJ0NhaXJvJywgJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cblxuLmdlc3R1cmUtdG9nZ2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICMwZjc2NmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggcmdiYSgxNSwgMTE4LCAxMTAsIDAuNCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG59XG5cbi5nZXN0dXJlLXRvZ2dsZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmdlc3R1cmUtdG9nZ2xlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxNGI4YTY7XG59XG5cbi5nZXN0dXJlLW5hdiBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogVmlydHVhbCBwb2ludGVyIGNvbnRyb2xsZWQgYnkgdGhlIGhhbmQgKGluZGV4IGZpbmdlcnRpcCkuICovXG4udmlydHVhbC1jdXJzb3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwdnc7XG4gIHRvcDogNTB2aDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAtMTFweCAwIDAgLTExcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZGQ0YmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg0NSwgMjEyLCAxOTEsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg0NSwgMjEyLCAxOTEsIDAuMTUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMjAwMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDVzIGxpbmVhciwgYmFja2dyb3VuZCAwLjFzIGVhc2U7XG59XG5cbi52aXJ0dWFsLWN1cnNvcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luOiAtMnB4IDAgMCAtMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyZGQ0YmY7XG59XG5cbi52aXJ0dWFsLWN1cnNvci5jbGlja2luZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMCwgMTg0LCAxNjYsIDAuNTUpO1xuICBib3gtc2hhZG93OiAwIDAgMCA4cHggcmdiYSgyMCwgMTg0LCAxNjYsIDAuMjUpO1xufVxuXG4uZ2VzdHVyZS1wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDI2MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuOTIpO1xuICBjb2xvcjogI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogOHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xOCk7XG4gIGNvbG9yOiAjZTJlOGYwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZTtcbn1cblxuLmNsb3NlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZjQ0NDQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucGFuZWwtYm9keSB7XG4gIG1heC1oZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiA0cHg7XG59XG5cbi5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzE0YjhhNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucGFuZWwtYm9keSB7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjMTRiOGE2IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xMik7XG59XG5cbi5nZXN0dXJlLXBhbmVsLmZsYXNoIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmRkNGJmO1xuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg0NSwgMjEyLCAxOTEsIDAuMzUpLCAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xufVxuXG4uY2FtZXJhLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYW1lcmEtd3JhcCB2aWRlbyxcbi5jYW1lcmEtd3JhcCBjYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4vKiBNaXJyb3Igb25seSB0aGUgcmF3IHZpZGVvOyB0aGUgc2tlbGV0b24gaXMgbWlycm9yZWQgaW4gY2FudmFzIHNwYWNlIChkcmF3KCkpLiAqL1xuLmNhbWVyYS13cmFwIHZpZGVvIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuXG4uc3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjMzM0MTU1O1xuICBjb2xvcjogI2NiZDVlMTtcbn1cblxuLmJhZGdlLmxpdmUge1xuICBiYWNrZ3JvdW5kOiAjMDY0ZTNiO1xuICBjb2xvcjogIzZlZTdiNztcbn1cblxuLmJhZGdlLmxvYWRpbmcge1xuICBiYWNrZ3JvdW5kOiAjNDIyMDA2O1xuICBjb2xvcjogI2ZjZDM0ZDtcbn1cblxuLmJhZGdlLmVycm9yIHtcbiAgYmFja2dyb3VuZDogIzdmMWQxZDtcbiAgY29sb3I6ICNmZWNhY2E7XG59XG5cbi5jdXJyZW50IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmdlc3R1cmUtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNWVlYWQ0O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5oYW5kLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMXB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICMxMzRlNGE7XG4gIGNvbG9yOiAjOTlmNmU0O1xufVxuXG4uYWN0aW9uLWxhYmVsIHtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDZweDtcbn1cblxuLmxlZ2VuZCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMTJweCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM5NGEzYjg7XG59XG5cbi5sZWdlbmQgbGkge1xuICBwYWRkaW5nOiAzcHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xMik7XG59XG5cbi5sZWdlbmQgYiB7XG4gIGNvbG9yOiAjZTJlOGYwO1xufVxuXG4uc2V0dGluZ3Mge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE0OCwgMTYzLCAxODQsIDAuMTIpO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4uc2V0dGluZ3Mgc3VtbWFyeSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM1ZWVhZDQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2V0dGluZ3MgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogI2NiZDVlMTtcbn1cblxuLnNldHRpbmdzIGlucHV0W3R5cGU9J3JhbmdlJ10ge1xuICB3aWR0aDogMTAwJTtcbiAgYWNjZW50LWNvbG9yOiAjMTRiOGE2O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zZXR0aW5ncyAuc3dpdGNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG5cbi5oaXN0b3J5IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xMik7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5oaXN0b3J5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzk0YTNiODtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uaGlzdG9yeSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhpc3RvcnkgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDJweCAwO1xuICBjb2xvcjogI2NiZDVlMTtcbn1cblxuLmhpc3RvcnkgLmgtdHlwZSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBjb2xvcjogIzVlZWFkNDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmhpc3RvcnkgLmgtbGFiZWwge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLXdpZHRoOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5oaXN0b3J5IC5oLXRpbWUge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgY29sb3I6ICM2NDc0OGI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3083:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../auth/services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);




function NavbarComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavbarComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_container_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class NavbarComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 13,
      vars: 3,
      consts: [["unauth", ""], [1, "navbar", "glass-panel"], [1, "nav-container"], ["routerLink", "/", 1, "brand"], [1, "fa-solid", "fa-kaaba", "gold-text"], [1, "gradient-text"], [1, "arabic-font", "gold-text", "brand-ar"], ["class", "nav-links", 4, "ngIf"], [1, "nav-actions"], [4, "ngIf", "ngIfElse"], [1, "nav-links"], ["routerLink", "/dashboard", "routerLinkActive", "active"], [1, "fa-solid", "fa-chart-line"], ["routerLink", "/parcours", "routerLinkActive", "active"], [1, "fa-solid", "fa-book-open"], ["routerLink", "/stats", "routerLinkActive", "active"], [1, "fa-solid", "fa-trophy"], [1, "btn-outline", "btn-sm", 3, "click"], [1, "fa-solid", "fa-right-from-bracket"], ["routerLink", "/login", 1, "btn-outline", "btn-sm"], ["routerLink", "/register", 1, "btn-primary", "btn-sm"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1)(1, "div", 2)(2, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Murshid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0645\u064F\u0631\u0634\u0650\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_div_8_Template, 10, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavbarComponent_ng_container_10_Template, 4, 0, "ng-container", 9)(11, NavbarComponent_ng_template_11_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const unauth_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.isAuthenticated());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.isAuthenticated())("ngIfElse", unauth_r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
      styles: [".navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  border-radius: 0 0 var(--radius-md) var(--radius-md);\n  margin-bottom: 2rem;\n  padding: 0.85rem 2rem;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 1.5rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.brand-ar[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin-left: 0.2rem;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: var(--transition);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.4rem 0.8rem;\n  border-radius: var(--radius-sm);\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #FFF;\n  background: rgba(16, 185, 129, 0.15);\n}\n\n.nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--primary-gold);\n}\n\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.1rem;\n  font-size: 0.85rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixhQUFhO0VBQ2Isb0RBQW9EO0VBQ3BELG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWRpdXMtbWQpIHZhcigtLXJhZGl1cy1tZCk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmc6IDAuODVyZW0gMnJlbTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJyYW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjZyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5icmFuZC1hciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xufVxuXG4ubmF2LWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5uYXYtbGlua3MgYSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbn1cblxuLm5hdi1saW5rcyBhOmhvdmVyLCAubmF2LWxpbmtzIGEuYWN0aXZlIHtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjE1KTtcbn1cblxuLm5hdi1saW5rcyBhLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdvbGQpO1xufVxuXG4ubmF2LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5idG4tc20ge1xuICBwYWRkaW5nOiAwLjVyZW0gMS4xcmVtO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6189:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/progress-bar/progress-bar.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBarComponent: () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function ProgressBarComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.value, "%");
  }
}
class ProgressBarComponent {
  constructor() {
    this.value = 0;
    this.showLabel = true;
  }
  static {
    this.ɵfac = function ProgressBarComponent_Factory(t) {
      return new (t || ProgressBarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressBarComponent,
      selectors: [["app-progress-bar"]],
      inputs: {
        value: "value",
        showLabel: "showLabel"
      },
      decls: 4,
      vars: 3,
      consts: [[1, "progress-bar-wrapper"], [1, "progress-bar-container"], [1, "progress-bar-fill"], ["class", "progress-label", 4, "ngIf"], [1, "progress-label"]],
      template: function ProgressBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProgressBarComponent_span_3_Template, 2, 1, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.value, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLabel);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".progress-bar-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 0.75rem;\n      width: 100%;\n    }\n    .progress-label[_ngcontent-%COMP%] {\n      font-size: 0.85rem;\n      font-weight: 700;\n      color: var(--primary-gold);\n      min-width: 40px;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osV0FBVztJQUNiO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLDBCQUEwQjtNQUMxQixlQUFlO0lBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnByb2dyZXNzLWJhci13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5wcm9ncmVzcy1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktZ29sZCk7XG4gICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2244:
/*!***************************************************!*\
  !*** ./src/app/shared/gesture/gesture.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GestureService: () => (/* binding */ GestureService)
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_game_murshid_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _gestures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestures */ 9348);
/* harmony import */ var _mediapipe_tasks_vision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mediapipe/tasks-vision */ 7314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);



// MediaPipe Tasks Vision — modern Google API for hand landmark detection.


const WASM_PATH = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm';
const MODEL_PATH = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
const SETTINGS_KEY = 'murshid.gesture.settings';
const PINCH_THRESHOLD = 0.045;
const SCROLL_GAIN = 1.6;
class GestureService {
  constructor(zone) {
    this.zone = zone;
    this._status$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('idle');
    this._gesture$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._cursor$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this._error$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._settings$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this.loadSettings());
    this.status$ = this._status$.asObservable();
    this.gesture$ = this._gesture$.asObservable();
    this.cursor$ = this._cursor$.asObservable();
    this.error$ = this._error$.asObservable();
    this.settings$ = this._settings$.asObservable();
    this.landmarker = null;
    this.stream = null;
    this.rafId = 0;
    this.video = null;
    this.canvas = null;
    this.ctx = null;
    this.drawingUtils = null;
    // Debounce / cooldown state.
    this.lastEmitted = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE;
    this.heldGesture = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE;
    this.heldCount = 0;
    this.lastEmitTime = 0;
    // Swipe tracking state (hand centre over time).
    this.swipeTracking = false;
    this.swipeStart = {
      x: 0,
      y: 0
    };
    this.swipeLocked = false;
    // Grab-to-scroll state (FIST held + vertical hand movement).
    this.prevFistY = null;
    this.detectLoop = () => {
      if (!this.video || !this.landmarker || this.video.readyState < 2) {
        this.rafId = requestAnimationFrame(this.detectLoop);
        return;
      }
      const now = performance.now();
      const result = this.landmarker.detectForVideo(this.video, now);
      const s = this.settings;
      if (result.landmarks && result.landmarks.length > 0) {
        const landmarks = result.landmarks[0];
        const raw = result.handednesses?.[0]?.[0]?.categoryName ?? 'Unknown';
        // MediaPipe assumes a pre-mirrored selfie frame; we feed the raw frame,
        // so swap Left<->Right to report the user's physical hand.
        const handedness = raw === 'Left' ? 'Right' : raw === 'Right' ? 'Left' : raw;
        const pose = this.classify(landmarks);
        const swipe = this.detectSwipe(landmarks, s.swipeThreshold, handedness);
        const gesture = swipe.type !== _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE ? swipe : pose;
        this.updateCursor(landmarks);
        this.updateGrabScroll(pose.type, landmarks);
        this.draw(landmarks);
        this.evaluate(gesture, handedness, s.holdFrames, s.cooldownMs);
      } else {
        this._cursor$.next(null);
        this.prevFistY = null;
        this.resetSwipe();
        this.evaluate({
          type: _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE,
          handedness: '',
          confidence: 0
        }, '', s.holdFrames, s.cooldownMs);
        if (this.ctx && this.canvas) {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
      this.rafId = requestAnimationFrame(this.detectLoop);
    };
  }
  get status() {
    return this._status$.value;
  }
  get settings() {
    return this._settings$.value;
  }
  updateSettings(patch) {
    const next = {
      ...this._settings$.value,
      ...patch
    };
    this._settings$.next(next);
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
    } catch {
      /* storage may be unavailable */
    }
  }
  loadSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) {
        return {
          ..._gestures__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_GESTURE_SETTINGS,
          ...JSON.parse(raw)
        };
      }
    } catch {
      /* ignore */
    }
    return _gestures__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_GESTURE_SETTINGS;
  }
  start(video, canvas) {
    var _this = this;
    return (0,C_Users_user_Desktop_game_murshid_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this._status$.value === 'running' || _this._status$.value === 'loading') {
        return;
      }
      _this._status$.next('loading');
      _this.video = video;
      _this.canvas = canvas ?? null;
      if (_this.canvas) {
        _this.ctx = _this.canvas.getContext('2d');
        _this.drawingUtils = _this.ctx ? new _mediapipe_tasks_vision__WEBPACK_IMPORTED_MODULE_2__.DrawingUtils(_this.ctx) : null;
      }
      try {
        if (!_this.landmarker) {
          const fileset = yield _mediapipe_tasks_vision__WEBPACK_IMPORTED_MODULE_2__.FilesetResolver.forVisionTasks(WASM_PATH);
          _this.landmarker = yield _mediapipe_tasks_vision__WEBPACK_IMPORTED_MODULE_2__.HandLandmarker.createFromOptions(fileset, {
            baseOptions: {
              modelAssetPath: MODEL_PATH,
              delegate: 'GPU'
            },
            runningMode: 'VIDEO',
            numHands: 1,
            minHandDetectionConfidence: 0.5,
            minHandPresenceConfidence: 0.5,
            minTrackingConfidence: 0.5
          });
        }
        _this.stream = yield navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: 640,
            height: 480
          },
          audio: false
        });
        video.srcObject = _this.stream;
        yield video.play();
        _this.resetSwipe();
        _this._status$.next('running');
        _this.zone.runOutsideAngular(() => _this.detectLoop());
      } catch (err) {
        _this._status$.next('error');
        const msg = err?.message ?? 'Échec du démarrage de la caméra / MediaPipe.';
        _this._error$.next(msg);
        _this.cleanup();
      }
    })();
  }
  stop() {
    this._status$.next('idle');
    this._cursor$.next(null);
    this.cleanup();
    this.lastEmitted = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE;
    this.heldGesture = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE;
    this.heldCount = 0;
    this.prevFistY = null;
    this.resetSwipe();
  }
  resetSwipe() {
    this.swipeTracking = false;
    this.swipeLocked = false;
    this.swipeStart = {
      x: 0,
      y: 0
    };
  }
  cleanup() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
    if (this.stream) {
      this.stream.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
    if (this.video) {
      this.video.srcObject = null;
    }
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
  /**
   * Virtual cursor: map the index-fingertip position to a normalized, mirrored
   * screen coordinate so the user can point at UI elements.
   */
  updateCursor(landmarks) {
    const tip = landmarks[8];
    const pos = {
      x: 1 - tip.x,
      y: tip.y
    };
    this._cursor$.next(pos);
  }
  /**
   * Grab-to-scroll: while a FIST is held, vertical hand movement scrolls the page.
   */
  updateGrabScroll(pose, landmarks) {
    if (pose === _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.FIST) {
      const y = landmarks[9].y;
      if (this.prevFistY !== null) {
        const dy = y - this.prevFistY;
        const delta = dy * window.innerHeight * SCROLL_GAIN;
        if (Math.abs(delta) > 0.5) {
          window.scrollBy({
            top: delta,
            behavior: 'auto'
          });
        }
      }
      this.prevFistY = y;
    } else {
      this.prevFistY = null;
    }
  }
  /**
   * Debounce the raw classification: require the same gesture for a few frames,
   * then emit on change with a cooldown so navigation isn't spammed.
   */
  evaluate(gesture, handedness, holdFrames, cooldownMs) {
    if (gesture.type === this.heldGesture) {
      this.heldCount++;
    } else {
      this.heldGesture = gesture.type;
      this.heldCount = 1;
    }
    if (this.heldCount < holdFrames) {
      return;
    }
    const stable = {
      ...gesture,
      handedness
    };
    const now = performance.now();
    if (stable.type !== this.lastEmitted && stable.type !== _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE && now - this.lastEmitTime >= cooldownMs) {
      this.lastEmitted = stable.type;
      this.lastEmitTime = now;
      this.zone.run(() => this._gesture$.next(stable));
    }
  }
  draw(landmarks) {
    if (!this.ctx || !this.canvas || !this.drawingUtils) {
      return;
    }
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.scale(-1, 1);
    this.ctx.translate(-this.canvas.width, 0);
    this.drawingUtils.drawConnectors(landmarks, _mediapipe_tasks_vision__WEBPACK_IMPORTED_MODULE_2__.HandLandmarker.HAND_CONNECTIONS, {
      color: '#2dd4bf',
      lineWidth: 3
    });
    this.drawingUtils.drawLandmarks(landmarks, {
      color: '#0f766e',
      radius: 3,
      lineWidth: 1
    });
    this.ctx.restore();
  }
  /**
   * Detect a directional swipe from the hand centre (middle-finger MCP).
   * Returns NONE unless a clear horizontal/vertical movement is registered.
   */
  detectSwipe(landmarks, threshold, handedness) {
    const centre = landmarks[9];
    if (!this.swipeTracking) {
      this.swipeTracking = true;
      this.swipeStart = {
        x: centre.x,
        y: centre.y
      };
      this.swipeLocked = false;
      return {
        type: _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE,
        handedness: '',
        confidence: 1
      };
    }
    const dx = centre.x - this.swipeStart.x;
    const dy = centre.y - this.swipeStart.y;
    const moved = Math.max(Math.abs(dx), Math.abs(dy));
    if (!this.swipeLocked) {
      if (moved >= threshold) {
        this.swipeLocked = true;
        const horizontal = Math.abs(dx) >= Math.abs(dy);
        const type = horizontal ? dx < 0 ? _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.SWIPE_LEFT : _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.SWIPE_RIGHT : dy < 0 ? _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.SWIPE_UP : _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.SWIPE_DOWN;
        return {
          type,
          handedness,
          confidence: 1
        };
      }
      return {
        type: _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE,
        handedness: '',
        confidence: 1
      };
    }
    // Lock released only when the hand returns near its start position.
    if (moved < threshold * 0.3) {
      this.swipeLocked = false;
      this.swipeStart = {
        x: centre.x,
        y: centre.y
      };
    }
    return {
      type: _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE,
      handedness: '',
      confidence: 1
    };
  }
  /**
   * Classify a single hand's 21 normalized landmarks into a coarse gesture.
   * Assumes the user faces the camera with an upright hand.
   */
  classify(landmarks) {
    const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
    const wrist = landmarks[0];
    const thumbTip = landmarks[4];
    const thumbIp = landmarks[3];
    const indexTip = landmarks[8];
    const indexPip = landmarks[6];
    const middleTip = landmarks[12];
    const middlePip = landmarks[10];
    const ringTip = landmarks[16];
    const ringPip = landmarks[14];
    const pinkyTip = landmarks[20];
    const pinkyPip = landmarks[18];
    // Pinch: thumb tip touches index tip — used as a "click".
    if (dist(thumbTip, indexTip) < PINCH_THRESHOLD) {
      return {
        type: _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.PINCH,
        handedness: '',
        confidence: 1
      };
    }
    const index = indexTip.y < indexPip.y - 0.02;
    const middle = middleTip.y < middlePip.y - 0.02;
    const ring = ringTip.y < ringPip.y - 0.02;
    const pinky = pinkyTip.y < pinkyPip.y - 0.02;
    // Thumb: extended when its tip is farther from the wrist than the IP joint.
    const thumb = dist(thumbTip, wrist) > dist(thumbIp, wrist) * 1.15;
    const count = [index, middle, ring, pinky].filter(Boolean).length;
    let type = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.NONE;
    if (count === 0 && !thumb) {
      type = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.FIST;
    } else if (count === 5 || count >= 4 && !thumb) {
      type = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.OPEN_HAND;
    } else if (index && !middle && !ring && !pinky) {
      type = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.POINT;
    } else if (index && middle && !ring && !pinky) {
      type = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.PEACE;
    } else if (index && !middle && !ring && pinky) {
      type = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.ROCK;
    } else if (thumb && count === 0) {
      // Thumbs up when the thumb tip is above the wrist, otherwise thumbs down.
      type = thumbTip.y < wrist.y ? _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.THUMBS_UP : _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.THUMBS_DOWN;
    } else if (thumb && count >= 3 && dist(thumbTip, indexTip) < 0.06) {
      type = _gestures__WEBPACK_IMPORTED_MODULE_1__.GestureType.OK;
    }
    return {
      type,
      handedness: '',
      confidence: 1
    };
  }
  ngOnDestroy() {
    this.cleanup();
  }
  static {
    this.ɵfac = function GestureService_Factory(t) {
      return new (t || GestureService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: GestureService,
      factory: GestureService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9348:
/*!********************************************!*\
  !*** ./src/app/shared/gesture/gestures.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_GESTURE_ACTIONS: () => (/* binding */ DEFAULT_GESTURE_ACTIONS),
/* harmony export */   DEFAULT_GESTURE_SETTINGS: () => (/* binding */ DEFAULT_GESTURE_SETTINGS),
/* harmony export */   GestureType: () => (/* binding */ GestureType)
/* harmony export */ });
var GestureType;
(function (GestureType) {
  GestureType["NONE"] = "NONE";
  GestureType["FIST"] = "FIST";
  GestureType["OPEN_HAND"] = "OPEN_HAND";
  GestureType["POINT"] = "POINT";
  GestureType["PEACE"] = "PEACE";
  GestureType["THUMBS_UP"] = "THUMBS_UP";
  GestureType["THUMBS_DOWN"] = "THUMBS_DOWN";
  GestureType["ROCK"] = "ROCK";
  GestureType["OK"] = "OK";
  GestureType["PINCH"] = "PINCH";
  GestureType["SWIPE_LEFT"] = "SWIPE_LEFT";
  GestureType["SWIPE_RIGHT"] = "SWIPE_RIGHT";
  GestureType["SWIPE_UP"] = "SWIPE_UP";
  GestureType["SWIPE_DOWN"] = "SWIPE_DOWN";
})(GestureType || (GestureType = {}));
/**
 * Default mapping between gestures and app actions.
 * Uses only routes that exist in AppRoutingModule, plus history/scroll/click actions.
 */
const DEFAULT_GESTURE_ACTIONS = [{
  gesture: GestureType.OPEN_HAND,
  commands: ['/dashboard'],
  label: 'لوحة التحكم'
}, {
  gesture: GestureType.POINT,
  commands: ['/parcours'],
  label: 'المسارات'
}, {
  gesture: GestureType.PEACE,
  commands: ['/stats'],
  label: 'الإحصائيات'
}, {
  gesture: GestureType.THUMBS_UP,
  back: true,
  label: 'السابق'
}, {
  gesture: GestureType.PINCH,
  click: true,
  label: 'نقرة (المؤشر)'
}, {
  gesture: GestureType.FIST,
  label: 'التمرير (إغلاق القبضة)'
}, {
  gesture: GestureType.SWIPE_LEFT,
  back: true,
  label: 'السابق (تمرير)'
}, {
  gesture: GestureType.SWIPE_RIGHT,
  forward: true,
  label: 'التالي (تمرير)'
}, {
  gesture: GestureType.SWIPE_UP,
  scroll: -1,
  label: 'تمرير لأعلى'
}, {
  gesture: GestureType.SWIPE_DOWN,
  scroll: 1,
  label: 'تمرير لأسفل'
}];
const DEFAULT_GESTURE_SETTINGS = {
  holdFrames: 3,
  cooldownMs: 1200,
  swipeThreshold: 0.22,
  sound: true
};

/***/ }),

/***/ 1336:
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1719:
/*!********************************************************!*\
  !*** ./src/app/shared/interceptors/jwt.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/storage.service */ 9117);






class JwtInterceptor {
  constructor() {
    this.storage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  }
  intercept(request, next) {
    const token = this.storage.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      if (error.status === 401) {
        this.storage.removeToken();
        this.router.navigate(['/login']);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 1000:
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatsComponent: () => (/* binding */ StatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class StatsComponent {
  constructor() {
    this.totalQuestionsAnswered = 14;
    this.successRate = 92;
    this.studyDaysStreak = 5;
  }
  static {
    this.ɵfac = function StatsComponent_Factory(t) {
      return new (t || StatsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatsComponent,
      selectors: [["app-stats"]],
      decls: 39,
      vars: 3,
      consts: [[1, "container", "animate-fade-in"], [1, "page-header"], [1, "gradient-text"], [1, "grid-3", "stats-grid"], [1, "stat-card", "glass-card"], [1, "stat-icon", "gold-glow"], [1, "fa-solid", "fa-fire"], [1, "stat-info"], [1, "stat-value", "gold-text"], [1, "stat-icon", "emerald-glow"], [1, "fa-solid", "fa-list-check"], [1, "stat-value"], [1, "stat-icon", "teal-glow"], [1, "fa-solid", "fa-bullseye"], [1, "glass-panel", 2, "padding", "2.5rem", "text-align", "center"], [1, "fa-solid", "fa-award", "gold-icon", 2, "font-size", "4rem", "margin-bottom", "1rem"], [2, "color", "var(--text-muted)", "max-width", "600px", "margin", "0.5rem auto 1.5rem auto"], ["routerLink", "/dashboard", 1, "btn-primary"]],
      template: function StatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0648\u0627\u0644\u062D\u0635\u064A\u0644\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u062A\u0627\u0628\u0639 \u0627\u0646\u062A\u0638\u0627\u0645\u0643 \u0648\u062A\u0637\u0648\u0651\u0631 \u0645\u0639\u0631\u0641\u062A\u0643 \u0627\u0644\u062F\u064A\u0646\u064A\u0629.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u062F\u0631\u0627\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4)(16, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7)(19, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0645\u062C\u0627\u0628\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4)(24, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7)(27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u062F\u0642\u0651\u0629 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0648\u0633\u0627\u0645 \u0627\u0644\u062A\u0645\u064A\u0651\u0632: \u0637\u0627\u0644\u0628 \u0645\u062C\u062A\u0647\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u062A\u0647\u0627\u0646\u064A\u0646\u0627 \u0639\u0644\u0649 \u0627\u0646\u062A\u0638\u0627\u0645\u0643! \u0637\u0644\u0628 \u0627\u0644\u0639\u0644\u0645 \u0627\u0644\u0634\u0631\u0639\u064A \u0628\u0631\u0643\u0629 \u0645\u062A\u0648\u0627\u0635\u0644\u0629. \u0648\u0627\u0635\u0644 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0631\u0648\u062D\u064A \u0648\u0627\u0644\u0641\u0643\u0631\u064A. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u062F\u0631\u0648\u0633\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.studyDaysStreak, " \u0623\u064A\u0627\u0645 \u0645\u062A\u062A\u0627\u0644\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalQuestionsAnswered);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.successRate, "%");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".welcome-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 2.5rem;\n  margin-bottom: 2rem;\n  background: linear-gradient(135deg, rgba(14, 34, 27, 0.9) 0%, rgba(21, 50, 40, 0.9) 100%);\n  border: 1px solid var(--border-glass);\n}\n\n.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 0.5rem;\n}\n\n.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n\n.gold-glow[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.15);\n  color: var(--primary-gold);\n}\n\n.emerald-glow[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--emerald-glow);\n}\n\n.teal-glow[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.15);\n  color: var(--teal-accent);\n}\n\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.parcours-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.progress-section[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 0.4rem;\n  font-weight: 600;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: var(--text-muted);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5RkFBeUY7RUFDekYscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtYmFubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAycmVtIDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNCwgMzQsIDI3LCAwLjkpIDAlLCByZ2JhKDIxLCA1MCwgNDAsIDAuOSkgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbGFzcyk7XG59XG5cbi53ZWxjb21lLXRleHQgaDIge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLndlbGNvbWUtdGV4dCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uc3RhdHMtZ3JpZCB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5zdGF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuMjVyZW07XG59XG5cbi5zdGF0LWljb24ge1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5nb2xkLWdsb3cge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4xNSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xufVxuXG4uZW1lcmFsZC1nbG93IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMTUpO1xuICBjb2xvcjogdmFyKC0tZW1lcmFsZC1nbG93KTtcbn1cblxuLnRlYWwtZ2xvdyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjAsIDE4NCwgMTY2LCAwLjE1KTtcbiAgY29sb3I6IHZhcigtLXRlYWwtYWNjZW50KTtcbn1cblxuLnN0YXQtaW5mbyBoMyB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5zZWN0aW9uLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5wYXJjb3Vycy1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY2FyZC10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9ncmVzcy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLnByb2dyZXNzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jYXJkLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLXN0YXRlLCAuZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: `http://${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}:8085/api`
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 1527:
/*!****************************************************************************!*\
  !*** ./node_modules/@mediapipe/tasks-vision/ lazy strict namespace object ***!
  \****************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 1527;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
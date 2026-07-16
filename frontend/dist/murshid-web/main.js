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
      styles: [".app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.app-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n@media (max-width: 768px) {\n  .app-content[_ngcontent-%COMP%] {\n    padding-bottom: 80px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNoZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5hcHAtY29udGVudCB7XG4gIGZsZXg6IDE7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXBwLWNvbnRlbnQge1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 160px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  padding: 2.5rem 2rem;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.gold-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--primary-gold);\n  margin-bottom: 0.75rem;\n  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.4));\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.35rem;\n}\n\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.error-alert[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #FCA5A5;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.demo-box[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  background: rgba(212, 175, 55, 0.08);\n  border: 1px dashed rgba(212, 175, 55, 0.3);\n  padding: 0.75rem;\n  border-radius: var(--radius-md);\n  font-size: 0.85rem;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.demo-box[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.18);\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n}\n\n@media (max-width: 480px) {\n  .auth-container[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n  }\n\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 1.75rem 1.25rem;\n  }\n\n  .auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QyxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbn1cblxuLmF1dGgtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ0MHB4O1xuICBwYWRkaW5nOiAyLjVyZW0gMnJlbTtcbn1cblxuLmF1dGgtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZ29sZC1pY29uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1nb2xkKTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTBweCByZ2JhKDIxMiwgMTc1LCA1NSwgMC40KSk7XG59XG5cbi5hdXRoLWhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4zNXJlbTtcbn1cblxuLmF1dGgtaGVhZGVyIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uZXJyb3ItYWxlcnQge1xuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjE1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksIDY4LCA2OCwgMC4zKTtcbiAgY29sb3I6ICNGQ0E1QTU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5kZW1vLWJveCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDE3NSwgNTUsIDAuMDgpO1xuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgyMTIsIDE3NSwgNTUsIDAuMyk7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uZGVtby1ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4xOCk7XG59XG5cbi5hdXRoLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLmF1dGgtZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMC43NXJlbTtcbiAgfVxuXG4gIC5hdXRoLWNhcmQge1xuICAgIHBhZGRpbmc6IDEuNzVyZW0gMS4yNXJlbTtcbiAgfVxuXG4gIC5hdXRoLWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 160px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  padding: 2.5rem 2rem;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.gold-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--primary-gold);\n  margin-bottom: 0.75rem;\n  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.4));\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.35rem;\n}\n\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.error-alert[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #FCA5A5;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.demo-box[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  background: rgba(212, 175, 55, 0.08);\n  border: 1px dashed rgba(212, 175, 55, 0.3);\n  padding: 0.75rem;\n  border-radius: var(--radius-md);\n  font-size: 0.85rem;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.demo-box[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.18);\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n}\n\n@media (max-width: 480px) {\n  .auth-container[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n  }\n\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 1.75rem 1.25rem;\n  }\n\n  .auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QyxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbn1cblxuLmF1dGgtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ0MHB4O1xuICBwYWRkaW5nOiAyLjVyZW0gMnJlbTtcbn1cblxuLmF1dGgtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZ29sZC1pY29uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1nb2xkKTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTBweCByZ2JhKDIxMiwgMTc1LCA1NSwgMC40KSk7XG59XG5cbi5hdXRoLWhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4zNXJlbTtcbn1cblxuLmF1dGgtaGVhZGVyIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uZXJyb3ItYWxlcnQge1xuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjE1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksIDY4LCA2OCwgMC4zKTtcbiAgY29sb3I6ICNGQ0E1QTU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5kZW1vLWJveCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDE3NSwgNTUsIDAuMDgpO1xuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgyMTIsIDE3NSwgNTUsIDAuMyk7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uZGVtby1ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4xOCk7XG59XG5cbi5hdXRoLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLmF1dGgtZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMC43NXJlbTtcbiAgfVxuXG4gIC5hdXRoLWNhcmQge1xuICAgIHBhZGRpbmc6IDEuNzVyZW0gMS4yNXJlbTtcbiAgfVxuXG4gIC5hdXRoLWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
      styles: [".welcome-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 2.5rem;\n  margin-bottom: 2rem;\n  background: linear-gradient(135deg, rgba(14, 34, 27, 0.9) 0%, rgba(21, 50, 40, 0.9) 100%);\n  border: 1px solid var(--border-glass);\n}\n\n.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 0.5rem;\n}\n\n.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n\n.gold-glow[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.15);\n  color: var(--primary-gold);\n}\n\n.emerald-glow[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--emerald-glow);\n}\n\n.teal-glow[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.15);\n  color: var(--teal-accent);\n}\n\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.parcours-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.progress-section[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 0.4rem;\n  font-weight: 600;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: var(--text-muted);\n}\n\n@media (max-width: 768px) {\n  .welcome-banner[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    text-align: center;\n  }\n\n  .welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n\n  .card-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .welcome-banner[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5RkFBeUY7RUFDekYscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDJyZW0gMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE0LCAzNCwgMjcsIDAuOSkgMCUsIHJnYmEoMjEsIDUwLCA0MCwgMC45KSAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcbn1cblxuLndlbGNvbWUtdGV4dCBoMiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ud2VsY29tZS10ZXh0IHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi5zdGF0cy1ncmlkIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnN0YXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLnN0YXQtaWNvbiB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmdvbGQtZ2xvdyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjE1KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ29sZCk7XG59XG5cbi5lbWVyYWxkLWdsb3cge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSk7XG4gIGNvbG9yOiB2YXIoLS1lbWVyYWxkLWdsb3cpO1xufVxuXG4udGVhbC1nbG93IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMCwgMTg0LCAxNjYsIDAuMTUpO1xuICBjb2xvcjogdmFyKC0tdGVhbC1hY2NlbnQpO1xufVxuXG4uc3RhdC1pbmZvIGgzIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3RhdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnNlY3Rpb24taGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zZWN0aW9uLWhlYWRlciBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnBhcmNvdXJzLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5jYXJkLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2dyZXNzLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4ucHJvZ3Jlc3MtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQtYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvYWRpbmctc3RhdGUsXG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53ZWxjb21lLWJhbm5lciB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC53ZWxjb21lLXRleHQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgfVxuXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAuc3RhdHMtZ3JpZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5jYXJkLXRvcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLndlbGNvbWUtYmFubmVyIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICB9XG5cbiAgLndlbGNvbWUtdGV4dCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 160px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  padding: 2.5rem 2rem;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.gold-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--primary-gold);\n  margin-bottom: 0.75rem;\n  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.4));\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.35rem;\n}\n\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.error-alert[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #FCA5A5;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.demo-box[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  background: rgba(212, 175, 55, 0.08);\n  border: 1px dashed rgba(212, 175, 55, 0.3);\n  padding: 0.75rem;\n  border-radius: var(--radius-md);\n  font-size: 0.85rem;\n  text-align: center;\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.demo-box[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.18);\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n}\n\n@media (max-width: 480px) {\n  .auth-container[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n  }\n\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 1.75rem 1.25rem;\n  }\n\n  .auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QyxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbn1cblxuLmF1dGgtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ0MHB4O1xuICBwYWRkaW5nOiAyLjVyZW0gMnJlbTtcbn1cblxuLmF1dGgtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZ29sZC1pY29uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1nb2xkKTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTBweCByZ2JhKDIxMiwgMTc1LCA1NSwgMC40KSk7XG59XG5cbi5hdXRoLWhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4zNXJlbTtcbn1cblxuLmF1dGgtaGVhZGVyIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uZXJyb3ItYWxlcnQge1xuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjE1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksIDY4LCA2OCwgMC4zKTtcbiAgY29sb3I6ICNGQ0E1QTU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5kZW1vLWJveCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDE3NSwgNTUsIDAuMDgpO1xuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgyMTIsIDE3NSwgNTUsIDAuMyk7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4uZGVtby1ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4xOCk7XG59XG5cbi5hdXRoLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLmF1dGgtZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMC43NXJlbTtcbiAgfVxuXG4gIC5hdXRoLWNhcmQge1xuICAgIHBhZGRpbmc6IDEuNzVyZW0gMS4yNXJlbTtcbiAgfVxuXG4gIC5hdXRoLWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_parcours_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/parcours.service */ 3883);
/* harmony import */ var _shared_services_speech_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/speech.service */ 368);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/progress-bar/progress-bar.component */ 6189);






const _c0 = a0 => ["/quiz", a0];
function ParcoursDetailComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u062A\u0627\u062D \u0644\u0644\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0631\u0643\u0651\u0632\u0629 \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u0641\u0642\u0631\u0627\u062A.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 23)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 25)(13, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_26_Template_button_click_13_listener() {
      const lecon_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.openLessonModal(lecon_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u062F\u0631\u0633 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const lecon_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lecon_r2.titre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (lecon_r2.questions == null ? null : lecon_r2.questions.length) || 0, " \u0623\u0633\u0626\u0644\u0629");
  }
}
function ParcoursDetailComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeLessonModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 30)(3, "div")(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 31)(9, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.readSelectedLesson());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeLessonModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 37)(16, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeLessonModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ParcoursDetailComponent_div_0_div_27_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeLessonModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u0627\u0644\u062F\u0631\u0633 ", ctx_r2.selectedLesson.ordreSequence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.selectedLesson.titre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("reading", ctx_r2.reading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fa-volume-high", !ctx_r2.reading)("fa-volume-xmark", ctx_r2.reading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getSelectedLessonContent(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx_r2.selectedLesson.id));
  }
}
function ParcoursDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u0627\u0644\u062A\u0642\u062F\u0651\u0645 \u0627\u0644\u0639\u0627\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "app-progress-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15)(23, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ParcoursDetailComponent_div_0_div_26_Template, 16, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ParcoursDetailComponent_div_0_div_27_Template, 21, 12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.parcours.matiere);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\u0627\u0644\u0645\u0633\u062A\u0648\u0649 ", ctx_r2.parcours.niveauActuel, " \u2794 ", ctx_r2.parcours.niveauCible, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.parcours.titre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.parcours.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.parcours.progressionPourcent || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.parcours.progressionPourcent || 0)("showLabel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u062F\u0631\u0648\u0633 \u0627\u0644\u0645\u0646\u0647\u062C (", (ctx_r2.parcours.lecons == null ? null : ctx_r2.parcours.lecons.length) || 0, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.parcours.lecons);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedLesson);
  }
}
class ParcoursDetailComponent {
  constructor(route, parcoursService, speech) {
    this.route = route;
    this.parcoursService = parcoursService;
    this.speech = speech;
    this.parcours = null;
    this.selectedLesson = null;
    this.loading = true;
    this.reading = false;
    this.speech.state$.subscribe(st => {
      this.reading = st.speaking;
    });
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
    this.speech.stop();
  }
  getSelectedLessonContent() {
    if (!this.selectedLesson) {
      return '';
    }
    return this.selectedLesson.contenu;
  }
  readSelectedLesson() {
    if (!this.selectedLesson) {
      return;
    }
    this.speech.toggle(this.selectedLesson.contenu);
  }
  static {
    this.ɵfac = function ParcoursDetailComponent_Factory(t) {
      return new (t || ParcoursDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_parcours_service__WEBPACK_IMPORTED_MODULE_0__.ParcoursService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_speech_service__WEBPACK_IMPORTED_MODULE_1__.SpeechService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ParcoursDetailComponent,
      selectors: [["app-parcours-detail"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container animate-fade-in", 4, "ngIf"], [1, "container", "animate-fade-in"], [1, "detail-header", "glass-panel"], [1, "header-top"], ["routerLink", "/parcours", 1, "btn-outline", "btn-sm"], [1, "fa-solid", "fa-arrow-right"], [1, "header-badges"], [1, "badge", "badge-emerald"], [1, "badge", "badge-gold"], [1, "gradient-text"], [1, "description-full"], [1, "progression-box"], [1, "prog-info"], [1, "gold-text", "font-bold"], [3, "value", "showLabel"], [1, "lessons-section"], [1, "lessons-list"], ["class", "lesson-card glass-card", 4, "ngFor", "ngForOf"], ["class", "lesson-modal-overlay", 3, "click", 4, "ngIf"], [1, "lesson-card", "glass-card"], [1, "lesson-number"], [1, "lesson-body"], [1, "lesson-summary"], [1, "lesson-meta"], [1, "fa-solid", "fa-list-check", "gold-text"], [1, "lesson-action"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "fa-solid", "fa-book-open-reader"], [1, "lesson-modal-overlay", 3, "click"], [1, "lesson-modal", "glass-panel", 3, "click"], [1, "modal-header"], [1, "modal-header-actions"], ["type", "button", "aria-label", "\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u062F\u0631\u0633", 1, "modal-read", 3, "click"], [1, "fa-solid"], ["type", "button", "aria-label", "\u0625\u063A\u0644\u0627\u0642", 1, "modal-close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "modal-content", "arabic-font"], [1, "modal-actions"], ["type", "button", 1, "btn-outline", 3, "click"], [1, "btn-primary", 3, "click", "routerLink"], [1, "fa-solid", "fa-circle-play"]],
      template: function ParcoursDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ParcoursDetailComponent_div_0_Template, 28, 11, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.parcours);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent],
      styles: [".detail-header[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n\n.header-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n\n.description-full[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.05rem;\n  line-height: 1.6;\n  margin: 1rem 0 2rem 0;\n}\n\n.progression-box[_ngcontent-%COMP%] {\n  background: rgba(6, 18, 14, 0.6);\n  padding: 1.25rem;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n}\n\n.prog-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n\n.lessons-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.lessons-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n\n.lesson-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  padding: 1.75rem;\n}\n\n.lesson-number[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-full);\n  background: rgba(212, 175, 55, 0.15);\n  color: var(--primary-gold);\n  border: 1px solid var(--primary-gold);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n\n.lesson-body[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.lesson-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n}\n\n.lesson-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  line-height: 1.5;\n\n}\n\n.lesson-summary[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n\n.lesson-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.85rem;\n  margin-top: 0.85rem;\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.lesson-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.lesson-action[_ngcontent-%COMP%] {\n  align-self: center;\n  flex-shrink: 0;\n}\n\n.lesson-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  background: rgba(3, 10, 8, 0.72);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n\n.lesson-modal[_ngcontent-%COMP%] {\n  width: min(920px, 100%);\n  max-height: min(88vh, 900px);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-color: rgba(212, 175, 55, 0.34);\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.25rem;\n  padding: 1.5rem 1.75rem 1rem;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0.8rem;\n  font-size: 1.45rem;\n  line-height: 1.3;\n}\n\n.modal-close[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex: 0 0 40px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--border-light);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--text-main);\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--primary-gold);\n  border-color: var(--primary-gold);\n}\n\n.modal-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n\n.modal-read[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex: 0 0 40px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--border-light);\n  background: rgba(212, 175, 55, 0.08);\n  color: var(--primary-gold);\n  cursor: pointer;\n  transition: var(--transition);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-read[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.2);\n  border-color: var(--primary-gold);\n}\n\n.modal-read.reading[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.25);\n  border-color: var(--primary-gold);\n  color: #FFF;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  padding: 0 1.75rem 1.25rem;\n  overflow-y: auto;\n  white-space: pre-wrap;\n  color: var(--text-main);\n  font-size: 1rem;\n  line-height: 1.85;\n}\n\n.modal-content.arabic-font[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n  font-size: 1.2rem;\n}\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.85rem;\n  padding: 1rem 1.75rem 1.5rem;\n  border-top: 1px solid var(--border-light);\n  background: rgba(6, 18, 14, 0.36);\n}\n\n@media (max-width: 768px) {\n  .detail-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .header-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n\n  .header-badges[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .description-full[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n\n  .lesson-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 1.25rem;\n    gap: 1rem;\n  }\n\n  .lesson-action[_ngcontent-%COMP%], .lesson-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n\n  .lesson-modal-overlay[_ngcontent-%COMP%] {\n    align-items: stretch;\n    padding: 0.75rem;\n  }\n\n  .lesson-modal[_ngcontent-%COMP%] {\n    max-height: 94vh;\n  }\n\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .modal-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n@media (max-width: 480px) {\n  .detail-header[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .lesson-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFyY291cnMvZGV0YWlsL3BhcmNvdXJzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyxvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlDQUFpQztFQUNqQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5Q0FBeUM7RUFDekMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1g7O0VBRUE7O0lBRUUsV0FBVztJQUNYLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG5cbi5oZWFkZXItdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5oZWFkZXItYmFkZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuXG4uZGVzY3JpcHRpb24tZnVsbCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW46IDFyZW0gMCAycmVtIDA7XG59XG5cbi5wcm9ncmVzc2lvbi1ib3gge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYsIDE4LCAxNCwgMC42KTtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbn1cblxuLnByb2ctaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubGVzc29ucy1zZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmxlc3NvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLmxlc3Nvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMS41cmVtO1xuICBwYWRkaW5nOiAxLjc1cmVtO1xufVxuXG4ubGVzc29uLW51bWJlciB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDE3NSwgNTUsIDAuMTUpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1nb2xkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1nb2xkKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmxlc3Nvbi1ib2R5IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ubGVzc29uLWJvZHkgaDMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ubGVzc29uLWJvZHkgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG59XG5cbi5sZXNzb24tc3VtbWFyeSB7XG4gIG1heC13aWR0aDogNzIwcHg7XG59XG5cbi5sZXNzb24tbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjg1cmVtO1xuICBtYXJnaW4tdG9wOiAwLjg1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubGVzc29uLW1ldGEgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNHJlbTtcbn1cblxuLmxlc3Nvbi1hY3Rpb24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubGVzc29uLW1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMS41cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDEwLCA4LCAwLjcyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbn1cblxuLmxlc3Nvbi1tb2RhbCB7XG4gIHdpZHRoOiBtaW4oOTIwcHgsIDEwMCUpO1xuICBtYXgtaGVpZ2h0OiBtaW4oODh2aCwgOTAwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjM0KTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAxLjVyZW0gMS43NXJlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbn1cblxuLm1vZGFsLWhlYWRlciBoMiB7XG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG4ubW9kYWwtY2xvc2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmbGV4OiAwIDAgNDBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLm1vZGFsLWNsb3NlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ29sZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1nb2xkKTtcbn1cblxuLm1vZGFsLWhlYWRlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLm1vZGFsLXJlYWQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmbGV4OiAwIDAgNDBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMTc1LCA1NSwgMC4wOCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tb2RhbC1yZWFkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDE3NSwgNTUsIDAuMik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1nb2xkKTtcbn1cblxuLm1vZGFsLXJlYWQucmVhZGluZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjI1KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBtYXJnaW46IDFyZW0gMCAwO1xuICBwYWRkaW5nOiAwIDEuNzVyZW0gMS4yNXJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS44NTtcbn1cblxuLm1vZGFsLWNvbnRlbnQuYXJhYmljLWZvbnQge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubW9kYWwtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMC44NXJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjc1cmVtIDEuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoNiwgMTgsIDE0LCAwLjM2KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAuaGVhZGVyLXRvcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cblxuICAuaGVhZGVyLWJhZGdlcyB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uLWZ1bGwge1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgfVxuXG4gIC5sZXNzb24tY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuXG4gIC5sZXNzb24tYWN0aW9uLFxuICAubGVzc29uLWFjdGlvbiBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmxlc3Nvbi1tb2RhbC1vdmVybGF5IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICB9XG5cbiAgLmxlc3Nvbi1tb2RhbCB7XG4gICAgbWF4LWhlaWdodDogOTR2aDtcbiAgfVxuXG4gIC5tb2RhbC1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLm1vZGFsLWFjdGlvbnMgYSxcbiAgLm1vZGFsLWFjdGlvbnMgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmRldGFpbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gIH1cblxuICAubGVzc29uLWNhcmQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
      styles: [".welcome-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 2.5rem;\n  margin-bottom: 2rem;\n  background: linear-gradient(135deg, rgba(14, 34, 27, 0.9) 0%, rgba(21, 50, 40, 0.9) 100%);\n  border: 1px solid var(--border-glass);\n}\n\n.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 0.5rem;\n}\n\n.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n\n.gold-glow[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.15);\n  color: var(--primary-gold);\n}\n\n.emerald-glow[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--emerald-glow);\n}\n\n.teal-glow[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.15);\n  color: var(--teal-accent);\n}\n\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.parcours-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.progress-section[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 0.4rem;\n  font-weight: 600;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: var(--text-muted);\n}\n\n@media (max-width: 768px) {\n  .welcome-banner[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    text-align: center;\n  }\n\n  .welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n\n  .card-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .welcome-banner[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5RkFBeUY7RUFDekYscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDJyZW0gMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE0LCAzNCwgMjcsIDAuOSkgMCUsIHJnYmEoMjEsIDUwLCA0MCwgMC45KSAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcbn1cblxuLndlbGNvbWUtdGV4dCBoMiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ud2VsY29tZS10ZXh0IHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi5zdGF0cy1ncmlkIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnN0YXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLnN0YXQtaWNvbiB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmdvbGQtZ2xvdyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjE1KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ29sZCk7XG59XG5cbi5lbWVyYWxkLWdsb3cge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSk7XG4gIGNvbG9yOiB2YXIoLS1lbWVyYWxkLWdsb3cpO1xufVxuXG4udGVhbC1nbG93IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMCwgMTg0LCAxNjYsIDAuMTUpO1xuICBjb2xvcjogdmFyKC0tdGVhbC1hY2NlbnQpO1xufVxuXG4uc3RhdC1pbmZvIGgzIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3RhdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnNlY3Rpb24taGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zZWN0aW9uLWhlYWRlciBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnBhcmNvdXJzLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5jYXJkLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2dyZXNzLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4ucHJvZ3Jlc3MtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQtYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvYWRpbmctc3RhdGUsXG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53ZWxjb21lLWJhbm5lciB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC53ZWxjb21lLXRleHQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgfVxuXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAuc3RhdHMtZ3JpZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5jYXJkLXRvcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLndlbGNvbWUtYmFubmVyIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICB9XG5cbiAgLndlbGNvbWUtdGV4dCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/quiz.service */ 663);
/* harmony import */ var _shared_services_speech_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/speech.service */ 368);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);






function QuizComponent_div_0_div_16_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 18);
  }
}
function QuizComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0623\u062F\u062E\u0644 \u0625\u062C\u0627\u0628\u062A\u0643 \u0627\u0644\u0645\u0643\u062A\u0648\u0628\u0629:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function QuizComponent_div_0_div_16_Template_textarea_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.userAnswer, $event) || (ctx_r1.userAnswer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizComponent_div_0_div_16_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.submitAnswer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, QuizComponent_div_0_div_16_i_5_Template, 1, 0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.userAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.submitting || !ctx_r1.userAnswer.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.submitting ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A..." : "\u0625\u0631\u0633\u0627\u0644 \u0625\u062C\u0627\u0628\u062A\u064A");
  }
}
function QuizComponent_div_0_div_17_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizComponent_div_0_div_17_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.nextQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u062A\u0627\u0644\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function QuizComponent_div_0_div_17_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizComponent_div_0_div_17_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.nextQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0648\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function QuizComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u062A\u0642\u064A\u064A\u0645 \u0641\u0648\u0631\u064A \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, QuizComponent_div_0_div_17_button_10_Template, 3, 0, "button", 25)(11, QuizComponent_div_0_div_17_button_11_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", ctx_r1.points, " \u0646\u0642\u0627\u0637 \u0645\u0643\u062A\u0633\u0628\u0629 ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.evaluation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentQuestionIndex < ctx_r1.questions.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentQuestionIndex === ctx_r1.questions.length - 1);
  }
}
function QuizComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div")(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0648\u0627\u0644\u062A\u0645\u0631\u064A\u0646 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizComponent_div_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.speakCurrentQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, QuizComponent_div_0_div_16_Template, 8, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, QuizComponent_div_0_div_17_Template, 12, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Le\u00E7on : ", ctx_r1.lecon == null ? null : ctx_r1.lecon.titre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u0627\u0644\u0633\u0624\u0627\u0644 ", ctx_r1.currentQuestionIndex + 1, " \u0645\u0646 ", ctx_r1.questions.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.questions[ctx_r1.currentQuestionIndex].texte);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("speaking", ctx_r1.speaking);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("fa-volume-high", !ctx_r1.speaking)("fa-volume-xmark", ctx_r1.speaking);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.submitted);
  }
}
function QuizComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0633\u0626\u0644\u0629 \u0645\u062A\u0627\u062D\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u062F\u0631\u0633.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class QuizComponent {
  constructor(route, router, quizService, speech) {
    this.route = route;
    this.router = router;
    this.quizService = quizService;
    this.speech = speech;
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
    this.speaking = false;
    this.speech.state$.subscribe(st => {
      this.speaking = st.speaking;
    });
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
  speakCurrentQuestion() {
    const currentQ = this.questions[this.currentQuestionIndex];
    if (!currentQ) {
      return;
    }
    this.speech.toggle(currentQ.texte);
  }
  static {
    this.ɵfac = function QuizComponent_Factory(t) {
      return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_quiz_service__WEBPACK_IMPORTED_MODULE_0__.QuizService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_speech_service__WEBPACK_IMPORTED_MODULE_1__.SpeechService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: QuizComponent,
      selectors: [["app-quiz"]],
      decls: 2,
      vars: 2,
      consts: [["class", "container animate-fade-in", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container", "animate-fade-in"], [1, "quiz-card", "glass-panel"], [1, "quiz-header"], [1, "badge", "badge-gold"], [1, "question-counter"], [1, "question-box"], [1, "question-title"], [1, "question-text"], ["type", "button", "aria-label", "\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0633\u0624\u0627\u0644", 1, "question-read", 3, "click"], [1, "fa-solid"], ["class", "answer-section", 4, "ngIf"], ["class", "evaluation-box glass-card animate-fade-in", 4, "ngIf"], [1, "answer-section"], ["rows", "4", "placeholder", "\u0627\u0643\u062A\u0628 \u0625\u062C\u0627\u0628\u062A\u0643 \u0647\u0646\u0627 \u0628\u062F\u0642\u0651\u0629...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], ["class", "fa-solid fa-paper-plane", 4, "ngIf"], [1, "fa-solid", "fa-paper-plane"], [1, "evaluation-box", "glass-card", "animate-fade-in"], [1, "eval-header"], [1, "points-badge"], [1, "fa-solid", "fa-trophy", "gold-text"], [1, "eval-body"], [1, "eval-actions"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "btn-primary", 3, "click"], [1, "fa-solid", "fa-arrow-left"], [1, "fa-solid", "fa-check-double"], [1, "container"], [1, "glass-card", "text-center", 2, "padding", "3rem"], ["routerLink", "/dashboard", 1, "btn-primary", 2, "margin-top", "1rem"]],
      template: function QuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QuizComponent_div_0_Template, 18, 12, "div", 0)(1, QuizComponent_div_1_Template, 6, 0, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.questions.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.questions.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      styles: [".quiz-card[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.quiz-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  border-bottom: 1px solid var(--border-light);\n  padding-bottom: 1.25rem;\n}\n\n.quiz-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n.question-counter[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary-gold);\n  background: rgba(212, 175, 55, 0.15);\n  padding: 0.5rem 1rem;\n  border-radius: var(--radius-full);\n  font-size: 0.9rem;\n  white-space: nowrap;\n}\n\n.question-text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  line-height: 1.5;\n  margin-bottom: 1rem;\n  color: #FFF;\n}\n\n.question-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.question-read[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--border-light);\n  background: rgba(212, 175, 55, 0.08);\n  color: var(--primary-gold);\n  cursor: pointer;\n  transition: var(--transition);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.question-read[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 55, 0.2);\n  border-color: var(--primary-gold);\n}\n\n.question-read.speaking[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.25);\n  border-color: var(--primary-gold);\n  color: #FFF;\n}\n\n.answer-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n\n.answer-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n\n.evaluation-box[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(14, 34, 27, 0.9) 100%);\n  border: 1px solid var(--emerald-glow);\n}\n\n.eval-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n\n.points-badge[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.2);\n  color: var(--primary-gold);\n  font-weight: 800;\n  padding: 0.4rem 0.85rem;\n  border-radius: var(--radius-md);\n}\n\n.eval-body[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.6;\n  color: #E5E7EB;\n  margin-bottom: 1.5rem;\n}\n\n.eval-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.85rem;\n}\n\n@media (max-width: 768px) {\n  .quiz-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .quiz-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n\n  .question-text[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n\n  .eval-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .eval-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n@media (max-width: 480px) {\n  .quiz-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .question-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaUNBQWlDO0VBQ2pDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRGQUE0RjtFQUM1RixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucXVpei1jYXJkIHtcbiAgcGFkZGluZzogMi41cmVtO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnF1aXotaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG59XG5cbi5xdWl6LWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5xdWVzdGlvbi1jb3VudGVyIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ29sZCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjE1KTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5xdWVzdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ucXVlc3Rpb24tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDFyZW07XG59XG5cbi5xdWVzdGlvbi1yZWFkIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDE3NSwgNTUsIDAuMDgpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1nb2xkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucXVlc3Rpb24tcmVhZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjIpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktZ29sZCk7XG59XG5cbi5xdWVzdGlvbi1yZWFkLnNwZWFraW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDE3NSwgNTUsIDAuMjUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktZ29sZCk7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uYW5zd2VyLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLmFuc3dlci1zZWN0aW9uIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmV2YWx1YXRpb24tYm94IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNiwgMTg1LCAxMjksIDAuMTUpIDAlLCByZ2JhKDE0LCAzNCwgMjcsIDAuOSkgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWVtZXJhbGQtZ2xvdyk7XG59XG5cbi5ldmFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucG9pbnRzLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsIDE3NSwgNTUsIDAuMik7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdvbGQpO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAwLjRyZW0gMC44NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbn1cblxuLmV2YWwtYm9keSB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgY29sb3I6ICNFNUU3RUI7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmV2YWwtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMC44NXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xdWl6LWNhcmQge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuXG4gIC5xdWl6LWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cblxuICAucXVlc3Rpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cblxuICAuZXZhbC1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmV2YWwtYWN0aW9ucyBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucXVpei1jYXJkIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICB9XG5cbiAgLnF1ZXN0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _gesture_gestures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gesture/gestures */ 9348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _gesture_gesture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gesture/gesture.service */ 2244);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_speech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/speech.service */ 368);








const _c0 = ["video"];
const _c1 = ["canvas"];
function GestureNavComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 29);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("left", ctx_r1.cursor.x * 100 + "vw")("top", ctx_r1.cursor.y * 100 + "vh");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("clicking", ctx_r1.clicking);
  }
}
function GestureNavComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u0647\u064A\u0626\u0629\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestureNavComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0646\u0634\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestureNavComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.error || "\u062E\u0637\u0623");
  }
}
function GestureNavComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u063A\u064A\u0631 \u0646\u0634\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestureNavComponent_div_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.handLabel(ctx_r1.current.handedness), " ");
  }
}
function GestureNavComponent_div_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u2192 ", ctx_r1.lastLabel, "");
  }
}
function GestureNavComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GestureNavComponent_div_20_span_3_Template, 2, 1, "span", 36)(4, GestureNavComponent_div_20_span_4_Template, 2, 1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.current.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.current.handedness && ctx_r1.current.handedness !== "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.lastLabel);
  }
}
function GestureNavComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestureNavComponent_div_24_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.stopReading());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " \u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u0627\u0644\u0644\u063A\u0629 : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function GestureNavComponent_div_24_Template_select_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.setSpeechLang($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Fran\u00E7ais");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Espa\u00F1ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.reading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.reading ? "\u062C\u0627\u0631\u064D \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0628\u0627\u0644\u0635\u0648\u062A" : "\u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0645\u062A\u0648\u0642\u0641\u0629", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.reading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.speechLang);
  }
}
function GestureNavComponent_div_83_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](h_r4.time);
  }
}
function GestureNavComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0627\u0644\u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GestureNavComponent_div_83_li_4_Template, 7, 3, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.history);
  }
}
class GestureNavComponent {
  constructor(gesture, router, speech) {
    this.gesture = gesture;
    this.router = router;
    this.speech = speech;
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
    this.reading = false;
    this.speechSupported = false;
    this.speechLang = 'fr-FR';
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
    this.speechSupported = this.speech.supported;
    this.speechLang = this.speech.lang;
    this.subs.push(this.speech.state$.subscribe(st => {
      this.reading = st.speaking;
      this.speechLang = st.lang;
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
    } else if (action.read) {
      this.toggleReading();
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
  /** Toggle spoken reading of the current page content with the voice. */
  toggleReading() {
    if (!this.speechSupported) {
      this.error = 'قراءة الصوت غير مدعومة في هذا المتصفح.';
      return;
    }
    this.speech.toggle(this.speech.readPageContent());
  }
  /** Stop reading immediately (button in the panel). */
  stopReading() {
    this.speech.stop();
  }
  setSpeechLang(lang) {
    this.speech.setLang(lang);
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
      return new (t || GestureNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_gesture_gesture_service__WEBPACK_IMPORTED_MODULE_2__.GestureService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_speech_service__WEBPACK_IMPORTED_MODULE_3__.SpeechService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: GestureNavComponent,
      selectors: [["app-gesture-nav"]],
      viewQuery: function GestureNavComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.videoRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 84,
      vars: 45,
      consts: [["video", ""], ["canvas", ""], [1, "gesture-nav"], ["class", "virtual-cursor", 3, "clicking", "left", "top", 4, "ngIf"], [1, "gesture-toggle", 3, "click", "title"], [1, "fa-solid"], [1, "toggle-text"], [1, "gesture-panel", 3, "hidden"], ["title", "\u0625\u063A\u0644\u0627\u0642", "aria-label", "\u0625\u063A\u0644\u0627\u0642", 1, "close-btn", 3, "click"], [1, "camera-wrap"], ["playsinline", "", "muted", ""], ["width", "240", "height", "180"], [1, "panel-body"], [1, "status", 3, "ngSwitch"], ["class", "badge loading", 4, "ngSwitchCase"], ["class", "badge live", 4, "ngSwitchCase"], ["class", "badge error", 4, "ngSwitchCase"], ["class", "badge", 4, "ngSwitchDefault"], ["class", "current", 4, "ngIf"], ["type", "button", 1, "read-page-btn", 3, "click", "disabled"], ["class", "reader", 4, "ngIf"], [1, "settings", 3, "open"], ["type", "range", "min", "1", "max", "8", "step", "1", 3, "input", "value"], ["type", "range", "min", "300", "max", "3000", "step", "100", 3, "input", "value"], ["type", "range", "min", "0.1", "max", "0.5", "step", "0.01", 3, "input", "value"], [1, "switch"], ["type", "checkbox", 3, "change", "checked"], [1, "legend"], ["class", "history", 4, "ngIf"], [1, "virtual-cursor"], [1, "badge", "loading"], [1, "badge", "live"], [1, "badge", "error"], [1, "badge"], [1, "current"], [1, "gesture-name"], ["class", "hand-badge", 4, "ngIf"], ["class", "action-label", 4, "ngIf"], [1, "hand-badge"], [1, "action-label"], [1, "reader"], [1, "reader-status"], [1, "dot"], [1, "reader-btn", 3, "click", "disabled"], [1, "reader-lang"], [3, "change", "value"], ["value", "fr-FR"], ["value", "ar-SA"], ["value", "en-US"], ["value", "es-ES"], [1, "history"], [1, "history-title"], [4, "ngFor", "ngForOf"], [1, "h-type"], [1, "h-label"], [1, "h-time"]],
      template: function GestureNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GestureNavComponent_div_1_Template, 1, 6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestureNavComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.toggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7)(7, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestureNavComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "video", 10, 0)(12, "canvas", 11, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12)(15, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, GestureNavComponent_span_16_Template, 2, 0, "span", 14)(17, GestureNavComponent_span_17_Template, 2, 0, "span", 15)(18, GestureNavComponent_span_18_Template, 2, 1, "span", 16)(19, GestureNavComponent_span_19_Template, 2, 0, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, GestureNavComponent_div_20_Template, 5, 3, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestureNavComponent_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.toggleReading());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, GestureNavComponent_div_24_Template, 17, 5, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "details", 21)(26, "summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " \u0627\u0644\u062B\u0628\u0627\u062A (\u0625\u0637\u0627\u0631\u0627\u062A) : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function GestureNavComponent_Template_input_input_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.updateHold(+$event.target.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " \u0641\u062A\u0631\u0629 \u0627\u0644\u062A\u0647\u062F\u0626\u0629 (ms) : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function GestureNavComponent_Template_input_input_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.updateCooldown(+$event.target.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " \u062D\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u062A\u0645\u0631\u064A\u0631 : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function GestureNavComponent_Template_input_input_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.updateSwipe(+$event.target.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "label", 25)(44, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function GestureNavComponent_Template_input_change_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.toggleSound());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " \u0635\u0648\u062A \u0627\u0644\u062A\u0623\u0643\u064A\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "ul", 27)(47, "li")(48, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "\u270B");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "li")(52, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\u261D\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "li")(56, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "\u270C\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "li")(60, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "\uD83D\uDC4D");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "li")(64, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "\uD83E\uDD0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "li")(68, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "\uD83D\uDC4C");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "li")(72, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "\u270A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "li")(76, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "\u2194\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "li")(80, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "\u2195\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, GestureNavComponent_div_83_Template, 5, 1, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.enabled && ctx.cursor);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.enabled ? "\u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u062A\u0646\u0642\u0651\u0644 \u0628\u0627\u0644\u0625\u064A\u0645\u0627\u0621\u0627\u062A" : "\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u062A\u0646\u0642\u0651\u0644 \u0628\u0627\u0644\u0625\u064A\u0645\u0627\u0621\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-pressed", ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("fa-hand", !ctx.enabled)("fa-hand-point-up", ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.enabled ? "\u0627\u0644\u0625\u064A\u0645\u0627\u0621\u0627\u062A \u0645\u0641\u0639\u0651\u0644\u0629" : "\u0627\u0644\u0625\u064A\u0645\u0627\u0621\u0627\u062A \u0645\u0639\u0637\u0651\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("flash", ctx.flash);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.status === "idle");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "loading");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "running");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "error");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.current && ctx.current.type !== ctx.GestureType.NONE);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.speechSupported);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("fa-volume-high", !ctx.reading)("fa-volume-xmark", ctx.reading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.reading ? "\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0642\u0631\u0627\u0621\u0629" : "\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0635\u0641\u062D\u0629", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.speechSupported);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("open", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.settings.holdFrames);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.settings.holdFrames);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.settings.cooldownMs);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.settings.cooldownMs);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.settings.swipeThreshold);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.settings.swipeThreshold);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.settings.sound);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.OPEN_HAND), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.POINT), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.PEACE), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.THUMBS_UP), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.PINCH), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.OK), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gestureLabel(ctx.GestureType.FIST), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.gestureLabel(ctx.GestureType.SWIPE_LEFT), " / ", ctx.gestureLabel(ctx.GestureType.SWIPE_RIGHT), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.gestureLabel(ctx.GestureType.SWIPE_UP), " / ", ctx.gestureLabel(ctx.GestureType.SWIPE_DOWN), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.history.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchDefault],
      styles: [".gesture-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 16px;\n  bottom: 16px;\n  z-index: 1000;\n  font-family: 'Cairo', 'Inter', sans-serif;\n}\n\n.gesture-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 999px;\n  background: #0f766e;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 6px 18px rgba(15, 118, 110, 0.4);\n  transition: transform 0.15s ease, background 0.15s ease;\n}\n\n.gesture-toggle[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.gesture-toggle.active[_ngcontent-%COMP%] {\n  background: #14b8a6;\n}\n\n.gesture-nav[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n\n\n.virtual-cursor[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50vw;\n  top: 50vh;\n  width: 22px;\n  height: 22px;\n  margin: -11px 0 0 -11px;\n  border: 2px solid #2dd4bf;\n  border-radius: 50%;\n  background: rgba(45, 212, 191, 0.25);\n  box-shadow: 0 0 0 4px rgba(45, 212, 191, 0.15);\n  pointer-events: none;\n  z-index: 2000;\n  transition: transform 0.05s linear, background 0.1s ease;\n}\n\n.virtual-cursor[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 4px;\n  height: 4px;\n  margin: -2px 0 0 -2px;\n  border-radius: 50%;\n  background: #2dd4bf;\n}\n\n.virtual-cursor.clicking[_ngcontent-%COMP%] {\n  transform: scale(0.7);\n  background: rgba(20, 184, 166, 0.55);\n  box-shadow: 0 0 0 8px rgba(20, 184, 166, 0.25);\n}\n\n.gesture-panel[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  width: 260px;\n  background: rgba(15, 23, 42, 0.92);\n  color: #e2e8f0;\n  border-radius: 14px;\n  padding: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);\n  backdrop-filter: blur(6px);\n  transition: box-shadow 0.15s ease, border-color 0.15s ease;\n  border: 2px solid transparent;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  background: rgba(148, 163, 184, 0.18);\n  color: #e2e8f0;\n  font-size: 13px;\n  line-height: 1;\n  cursor: pointer;\n  z-index: 5;\n  transition: background 0.15s ease;\n}\n\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  color: #fff;\n}\n\n.panel-body[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-y: auto;\n  margin-top: 8px;\n  padding-inline-end: 4px;\n}\n\n.panel-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n.panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(148, 163, 184, 0.12);\n  border-radius: 8px;\n}\n\n.panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #14b8a6;\n  border-radius: 8px;\n}\n\n.panel-body[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #14b8a6 rgba(148, 163, 184, 0.12);\n}\n\n.gesture-panel.flash[_ngcontent-%COMP%] {\n  border-color: #2dd4bf;\n  box-shadow: 0 0 0 4px rgba(45, 212, 191, 0.35), 0 10px 30px rgba(0, 0, 0, 0.45);\n}\n\n.camera-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 240px;\n  height: 180px;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #000;\n  margin: 0 auto;\n}\n\n.camera-wrap[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .camera-wrap[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 240px;\n  height: 180px;\n  object-fit: cover;\n}\n\n\n\n.camera-wrap[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n\n.status[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #334155;\n  color: #cbd5e1;\n}\n\n.badge.live[_ngcontent-%COMP%] {\n  background: #064e3b;\n  color: #6ee7b7;\n}\n\n.badge.loading[_ngcontent-%COMP%] {\n  background: #422006;\n  color: #fcd34d;\n}\n\n.badge.error[_ngcontent-%COMP%] {\n  background: #7f1d1d;\n  color: #fecaca;\n}\n\n.current[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  text-align: center;\n  font-size: 14px;\n}\n\n.gesture-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #5eead4;\n  letter-spacing: 0.5px;\n}\n\n.hand-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-inline-start: 6px;\n  font-size: 11px;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: #134e4a;\n  color: #99f6e4;\n}\n\n.action-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  margin-inline-start: 6px;\n}\n\n.legend[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 0;\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n.legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 3px 0;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n}\n\n.legend[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n\n.settings[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 12px;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n  padding-top: 8px;\n}\n\n.settings[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #5eead4;\n  font-weight: 600;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  color: #cbd5e1;\n}\n\n.settings[_ngcontent-%COMP%]   input[type='range'][_ngcontent-%COMP%] {\n  width: 100%;\n  accent-color: #14b8a6;\n  margin-top: 2px;\n}\n\n.settings[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.history[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n  padding-top: 8px;\n}\n\n.history-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 4px;\n}\n\n.history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  padding: 2px 0;\n  color: #cbd5e1;\n}\n\n.history[_ngcontent-%COMP%]   .h-type[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #5eead4;\n  font-weight: 700;\n}\n\n.history[_ngcontent-%COMP%]   .h-label[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: start;\n}\n\n.history[_ngcontent-%COMP%]   .h-time[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #64748b;\n}\n\n.read-page-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  margin-top: 10px;\n  padding: 0.6rem 0.75rem;\n  border-radius: 10px;\n  border: 1px solid rgba(45, 212, 191, 0.35);\n  background: rgba(19, 78, 74, 0.55);\n  color: #ccfbf1;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.read-page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(19, 78, 74, 0.8);\n  border-color: #2dd4bf;\n}\n\n.read-page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n@media (max-width: 480px) {\n  .gesture-panel[_ngcontent-%COMP%] {\n    width: calc(100vw - 32px);\n    max-width: 300px;\n  }\n\n  .gesture-toggle[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 0.85rem;\n  }\n}\n\n.reader[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n  padding-top: 8px;\n  font-size: 12px;\n  color: #cbd5e1;\n}\n\n.reader-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  color: #94a3b8;\n}\n\n.reader-status[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #64748b;\n  box-shadow: 0 0 0 3px rgba(100, 116, 139, 0.2);\n}\n\n.reader-status.active[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n}\n\n.reader-status.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.25);\n  animation: _ngcontent-%COMP%_pulse 1.2s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%,\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.35);\n    opacity: 0.6;\n  }\n}\n\n.reader-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  width: 100%;\n  padding: 7px 10px;\n  border: none;\n  border-radius: 8px;\n  background: #b91c1c;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s ease, opacity 0.15s ease;\n}\n\n.reader-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ef4444;\n}\n\n.reader-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n.reader-lang[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  color: #cbd5e1;\n}\n\n.reader-lang[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-inline-start: 6px;\n  background: #1e293b;\n  color: #e2e8f0;\n  border: 1px solid rgba(148, 163, 184, 0.25);\n  border-radius: 6px;\n  padding: 3px 6px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2VzdHVyZS1uYXYvZ2VzdHVyZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsOENBQThDO0VBQzlDLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQSw4REFBOEQ7QUFDOUQ7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyw4Q0FBOEM7RUFDOUMsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDJDQUEyQztFQUMzQywwQkFBMEI7RUFDMUIsMERBQTBEO0VBQzFELDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtFQUErRTtBQUNqRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQSxrRkFBa0Y7QUFDbEY7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLCtDQUErQztFQUMvQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFDL0MsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0MsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7O0lBRUUsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLmdlc3R1cmUtbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTZweDtcbiAgYm90dG9tOiAxNnB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBmb250LWZhbWlseTogJ0NhaXJvJywgJ0ludGVyJywgc2Fucy1zZXJpZjtcbn1cblxuLmdlc3R1cmUtdG9nZ2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICMwZjc2NmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggcmdiYSgxNSwgMTE4LCAxMTAsIDAuNCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG59XG5cbi5nZXN0dXJlLXRvZ2dsZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmdlc3R1cmUtdG9nZ2xlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxNGI4YTY7XG59XG5cbi5nZXN0dXJlLW5hdiBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogVmlydHVhbCBwb2ludGVyIGNvbnRyb2xsZWQgYnkgdGhlIGhhbmQgKGluZGV4IGZpbmdlcnRpcCkuICovXG4udmlydHVhbC1jdXJzb3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwdnc7XG4gIHRvcDogNTB2aDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAtMTFweCAwIDAgLTExcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZGQ0YmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg0NSwgMjEyLCAxOTEsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg0NSwgMjEyLCAxOTEsIDAuMTUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMjAwMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDVzIGxpbmVhciwgYmFja2dyb3VuZCAwLjFzIGVhc2U7XG59XG5cbi52aXJ0dWFsLWN1cnNvcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luOiAtMnB4IDAgMCAtMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyZGQ0YmY7XG59XG5cbi52aXJ0dWFsLWN1cnNvci5jbGlja2luZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMCwgMTg0LCAxNjYsIDAuNTUpO1xuICBib3gtc2hhZG93OiAwIDAgMCA4cHggcmdiYSgyMCwgMTg0LCAxNjYsIDAuMjUpO1xufVxuXG4uZ2VzdHVyZS1wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDI2MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuOTIpO1xuICBjb2xvcjogI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogOHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xOCk7XG4gIGNvbG9yOiAjZTJlOGYwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZTtcbn1cblxuLmNsb3NlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZjQ0NDQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucGFuZWwtYm9keSB7XG4gIG1heC1oZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiA0cHg7XG59XG5cbi5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzE0YjhhNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucGFuZWwtYm9keSB7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjMTRiOGE2IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xMik7XG59XG5cbi5nZXN0dXJlLXBhbmVsLmZsYXNoIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmRkNGJmO1xuICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg0NSwgMjEyLCAxOTEsIDAuMzUpLCAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xufVxuXG4uY2FtZXJhLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYW1lcmEtd3JhcCB2aWRlbyxcbi5jYW1lcmEtd3JhcCBjYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4vKiBNaXJyb3Igb25seSB0aGUgcmF3IHZpZGVvOyB0aGUgc2tlbGV0b24gaXMgbWlycm9yZWQgaW4gY2FudmFzIHNwYWNlIChkcmF3KCkpLiAqL1xuLmNhbWVyYS13cmFwIHZpZGVvIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuXG4uc3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjMzM0MTU1O1xuICBjb2xvcjogI2NiZDVlMTtcbn1cblxuLmJhZGdlLmxpdmUge1xuICBiYWNrZ3JvdW5kOiAjMDY0ZTNiO1xuICBjb2xvcjogIzZlZTdiNztcbn1cblxuLmJhZGdlLmxvYWRpbmcge1xuICBiYWNrZ3JvdW5kOiAjNDIyMDA2O1xuICBjb2xvcjogI2ZjZDM0ZDtcbn1cblxuLmJhZGdlLmVycm9yIHtcbiAgYmFja2dyb3VuZDogIzdmMWQxZDtcbiAgY29sb3I6ICNmZWNhY2E7XG59XG5cbi5jdXJyZW50IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmdlc3R1cmUtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNWVlYWQ0O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5oYW5kLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMXB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICMxMzRlNGE7XG4gIGNvbG9yOiAjOTlmNmU0O1xufVxuXG4uYWN0aW9uLWxhYmVsIHtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDZweDtcbn1cblxuLmxlZ2VuZCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMTJweCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM5NGEzYjg7XG59XG5cbi5sZWdlbmQgbGkge1xuICBwYWRkaW5nOiAzcHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xMik7XG59XG5cbi5sZWdlbmQgYiB7XG4gIGNvbG9yOiAjZTJlOGYwO1xufVxuXG4uc2V0dGluZ3Mge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE0OCwgMTYzLCAxODQsIDAuMTIpO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4uc2V0dGluZ3Mgc3VtbWFyeSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM1ZWVhZDQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2V0dGluZ3MgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogI2NiZDVlMTtcbn1cblxuLnNldHRpbmdzIGlucHV0W3R5cGU9J3JhbmdlJ10ge1xuICB3aWR0aDogMTAwJTtcbiAgYWNjZW50LWNvbG9yOiAjMTRiOGE2O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zZXR0aW5ncyAuc3dpdGNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG5cbi5oaXN0b3J5IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xMik7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5oaXN0b3J5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzk0YTNiODtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uaGlzdG9yeSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhpc3RvcnkgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDJweCAwO1xuICBjb2xvcjogI2NiZDVlMTtcbn1cblxuLmhpc3RvcnkgLmgtdHlwZSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBjb2xvcjogIzVlZWFkNDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmhpc3RvcnkgLmgtbGFiZWwge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLXdpZHRoOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5oaXN0b3J5IC5oLXRpbWUge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi5yZWFkLXBhZ2UtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ1LCAyMTIsIDE5MSwgMC4zNSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTksIDc4LCA3NCwgMC41NSk7XG4gIGNvbG9yOiAjY2NmYmYxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5yZWFkLXBhZ2UtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxOSwgNzgsIDc0LCAwLjgpO1xuICBib3JkZXItY29sb3I6ICMyZGQ0YmY7XG59XG5cbi5yZWFkLXBhZ2UtYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41NTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5nZXN0dXJlLXBhbmVsIHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cblxuICAuZ2VzdHVyZS10b2dnbGUge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxufVxuXG4ucmVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xMik7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNjYmQ1ZTE7XG59XG5cbi5yZWFkZXItc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOTRhM2I4O1xufVxuXG4ucmVhZGVyLXN0YXR1cyAuZG90IHtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzY0NzQ4YjtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTAwLCAxMTYsIDEzOSwgMC4yKTtcbn1cblxuLnJlYWRlci1zdGF0dXMuYWN0aXZlIHtcbiAgY29sb3I6ICM2ZWU3Yjc7XG59XG5cbi5yZWFkZXItc3RhdHVzLmFjdGl2ZSAuZG90IHtcbiAgYmFja2dyb3VuZDogIzIyYzU1ZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMzQsIDE5NywgOTQsIDAuMjUpO1xuICBhbmltYXRpb246IHB1bHNlIDEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjM1KTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbn1cblxuLnJlYWRlci1idG4ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNiOTFjMWM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZSwgb3BhY2l0eSAwLjE1cyBlYXNlO1xufVxuXG4ucmVhZGVyLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICNlZjQ0NDQ7XG59XG5cbi5yZWFkZXItYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40NTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnJlYWRlci1sYW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6ICNjYmQ1ZTE7XG59XG5cbi5yZWFkZXItbGFuZyBzZWxlY3Qge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA2cHg7XG4gIGJhY2tncm91bmQ6ICMxZTI5M2I7XG4gIGNvbG9yOiAjZTJlOGYwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OCwgMTYzLCAxODQsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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




function NavbarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.closeMobile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_13_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.closeMobile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_13_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.closeMobile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx_r2.mobileOpen);
  }
}
function NavbarComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_container_15_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function NavbarComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class NavbarComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.mobileOpen = false;
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }
  closeMobile() {
    this.mobileOpen = false;
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
      decls: 18,
      vars: 8,
      consts: [["unauth", ""], [1, "navbar", "glass-panel"], [1, "nav-container"], ["routerLink", "/", 1, "brand"], [1, "fa-solid", "fa-kaaba", "gold-text"], [1, "gradient-text"], [1, "arabic-font", "gold-text", "brand-ar"], ["aria-label", "Toggle navigation", 1, "nav-toggle", 3, "click"], [1, "hamburger"], ["class", "nav-links", 3, "open", 4, "ngIf"], [1, "nav-actions"], [4, "ngIf", "ngIfElse"], [1, "nav-links"], ["routerLink", "/dashboard", "routerLinkActive", "active", 3, "click"], [1, "fa-solid", "fa-chart-line"], ["routerLink", "/parcours", "routerLinkActive", "active", 3, "click"], [1, "fa-solid", "fa-book-open"], ["routerLink", "/stats", "routerLinkActive", "active", 3, "click"], [1, "fa-solid", "fa-trophy"], [1, "btn-outline", "btn-sm", 3, "click"], [1, "fa-solid", "fa-right-from-bracket"], ["routerLink", "/login", 1, "btn-outline", "btn-sm"], ["routerLink", "/register", 1, "btn-primary", "btn-sm"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1)(1, "div", 2)(2, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Murshid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0645\u064F\u0631\u0634\u0650\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.toggleMobile());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span")(11, "span")(12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavbarComponent_div_13_Template, 10, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavbarComponent_ng_container_15_Template, 4, 0, "ng-container", 11)(16, NavbarComponent_ng_template_16_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const unauth_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.mobileOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.mobileOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.isAuthenticated());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.mobileOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.isAuthenticated())("ngIfElse", unauth_r5);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
      styles: [".navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  border-radius: 0 0 var(--radius-md) var(--radius-md);\n  margin-bottom: 2rem;\n  padding: 0.85rem 2rem;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 1.5rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.brand-ar[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin-left: 0.2rem;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: var(--transition);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.4rem 0.8rem;\n  border-radius: var(--radius-sm);\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #FFF;\n  background: rgba(16, 185, 129, 0.15);\n}\n\n.nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--primary-gold);\n}\n\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.1rem;\n  font-size: 0.85rem;\n}\n\n.nav-toggle[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: var(--text-main);\n}\n\n.hamburger[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  width: 24px;\n}\n\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 2px;\n  background: var(--text-main);\n  border-radius: 2px;\n  transition: var(--transition);\n}\n\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(-45deg) translate(5px, -5px);\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    border-radius: 0 0 var(--radius-md) var(--radius-md);\n  }\n\n  .nav-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav-links[_ngcontent-%COMP%], .nav-actions[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: var(--bg-surface);\n    border-bottom: 1px solid var(--border-light);\n    padding: 1rem;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);\n  }\n\n  .nav-links.open[_ngcontent-%COMP%], .nav-actions.open[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    border-radius: var(--radius-sm);\n    justify-content: flex-start;\n  }\n\n  .nav-actions[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n\n  .nav-actions[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%], .nav-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixhQUFhO0VBQ2Isb0RBQW9EO0VBQ3BELG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixvREFBb0Q7RUFDdEQ7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsNkJBQTZCO0lBQzdCLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osMkNBQTJDO0VBQzdDOztFQUVBOztJQUVFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBOztJQUVFLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWRpdXMtbWQpIHZhcigtLXJhZGl1cy1tZCk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmc6IDAuODVyZW0gMnJlbTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJyYW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjZyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5icmFuZC1hciB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xufVxuXG4ubmF2LWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi5uYXYtbGlua3MgYSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbn1cblxuLm5hdi1saW5rcyBhOmhvdmVyLFxuLm5hdi1saW5rcyBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSk7XG59XG5cbi5uYXYtbGlua3MgYS5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1nb2xkKTtcbn1cblxuLm5hdi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uYnRuLXNtIHtcbiAgcGFkZGluZzogMC41cmVtIDEuMXJlbTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4ubmF2LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xufVxuXG4uaGFtYnVyZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG4uaGFtYnVyZ2VyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtbWFpbik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5oYW1idXJnZXIuYWN0aXZlIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDVweCk7XG59XG5cbi5oYW1idXJnZXIuYWN0aXZlIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmhhbWJ1cmdlci5hY3RpdmUgc3BhbjpudGgtY2hpbGQoMykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIC01cHgpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWRpdXMtbWQpIHZhcigtLXJhZGl1cy1tZCk7XG4gIH1cblxuICAubmF2LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubmF2LWxpbmtzLFxuICAubmF2LWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXN1cmZhY2UpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDAuNzVyZW07XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgfVxuXG4gIC5uYXYtbGlua3Mub3BlbixcbiAgLm5hdi1hY3Rpb25zLm9wZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAubmF2LWxpbmtzIGEge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5uYXYtYWN0aW9ucyB7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICB9XG5cbiAgLm5hdi1hY3Rpb25zIC5idG4tb3V0bGluZSxcbiAgLm5hdi1hY3Rpb25zIC5idG4tcHJpbWFyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
}, {
  gesture: GestureType.OK,
  read: true,
  label: 'تشغيل/إيقاف القراءة بالصوت'
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

/***/ 368:
/*!***************************************************!*\
  !*** ./src/app/shared/services/speech.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeechService: () => (/* binding */ SpeechService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


const DEFAULT_LANG = 'fr-FR';
const STORAGE_KEY = 'murshid.speech.lang';
/**
 * Text-to-speech helper wrapping the Web Speech API (SpeechSynthesis).
 * Used to read page content aloud and to toggle reading with a gesture.
 */
class SpeechService {
  constructor(zone) {
    this.zone = zone;
    this._state$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      speaking: false,
      lang: this.loadLang()
    });
    this.state$ = this._state$.asObservable();
    this.lastText = '';
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        // Voices may load asynchronously; nothing else needed here.
      };
      this.syncSpeakingState();
    }
  }
  get speaking() {
    return this._state$.value.speaking;
  }
  get lang() {
    return this._state$.value.lang;
  }
  get supported() {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }
  setLang(lang) {
    this._state$.next({
      ...this._state$.value,
      lang
    });
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage may be unavailable */
    }
  }
  /** Read the given text aloud. Cancels any ongoing speech first. */
  speak(text, lang = this.lang) {
    if (!this.supported || !text?.trim()) {
      return;
    }
    window.speechSynthesis.cancel();
    this.lastText = text;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.onstart = () => this.zone.run(() => this._state$.next({
      speaking: true,
      lang
    }));
    utter.onend = () => this.zone.run(() => this.syncSpeakingState());
    utter.onerror = () => this.zone.run(() => this.syncSpeakingState());
    window.speechSynthesis.speak(utter);
  }
  /** Stop any ongoing speech. */
  stop() {
    if (!this.supported) {
      return;
    }
    window.speechSynthesis.cancel();
    this.syncSpeakingState();
  }
  /**
   * Toggle reading of the given text. If already speaking, stop; otherwise read.
   * Reuses the last text when `text` is omitted.
   */
  toggle(text) {
    if (this.speaking) {
      this.stop();
      return;
    }
    const toRead = (text ?? this.lastText ?? '').trim();
    if (toRead) {
      this.speak(toRead);
    }
  }
  /** Collect the readable text of the main content area. */
  readPageContent() {
    if (typeof document === 'undefined') {
      return '';
    }
    const root = document.querySelector('main') ?? document.querySelector('.content') ?? document.querySelector('router-outlet')?.parentElement ?? document.body;
    if (!root) {
      return '';
    }
    const clone = root.cloneNode(true);
    clone.querySelectorAll('script, style, noscript, app-gesture-nav, nav, header, footer').forEach(el => el.remove());
    return (clone.textContent ?? '').replace(/\s+/g, ' ').trim();
  }
  syncSpeakingState() {
    const speaking = this.supported && window.speechSynthesis.speaking;
    this._state$.next({
      speaking,
      lang: this.lang
    });
  }
  loadLang() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return raw;
      }
    } catch {
      /* ignore */
    }
    return DEFAULT_LANG;
  }
  static {
    this.ɵfac = function SpeechService_Factory(t) {
      return new (t || SpeechService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SpeechService,
      factory: SpeechService.ɵfac,
      providedIn: 'root'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class StatsComponent {
  constructor(authService) {
    this.authService = authService;
    this.totalQuestionsAnswered = 0;
    this.successRate = 0;
    this.studyDaysStreak = 0;
    this.loading = true;
  }
  ngOnInit() {
    this.authService.getUserStats().subscribe({
      next: stats => {
        this.totalQuestionsAnswered = stats.questionsAnswered || 0;
        this.successRate = stats.successRate || 0;
        this.studyDaysStreak = stats.studyDaysStreak || 0;
        this.loading = false;
      },
      error: err => {
        console.error('خطأ في تحميل الإحصائيات', err);
        this.loading = false;
      }
    });
  }
  static {
    this.ɵfac = function StatsComponent_Factory(t) {
      return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StatsComponent,
      selectors: [["app-stats"]],
      decls: 39,
      vars: 3,
      consts: [[1, "container", "animate-fade-in"], [1, "page-header"], [1, "gradient-text"], [1, "grid-3", "stats-grid"], [1, "stat-card", "glass-card"], [1, "stat-icon", "gold-glow"], [1, "fa-solid", "fa-fire"], [1, "stat-info"], [1, "stat-value", "gold-text"], [1, "stat-icon", "emerald-glow"], [1, "fa-solid", "fa-list-check"], [1, "stat-value"], [1, "stat-icon", "teal-glow"], [1, "fa-solid", "fa-bullseye"], [1, "glass-panel", 2, "padding", "2.5rem", "text-align", "center"], [1, "fa-solid", "fa-award", "gold-icon", 2, "font-size", "4rem", "margin-bottom", "1rem"], [2, "color", "var(--text-muted)", "max-width", "600px", "margin", "0.5rem auto 1.5rem auto"], ["routerLink", "/dashboard", 1, "btn-primary"]],
      template: function StatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0648\u0627\u0644\u062D\u0635\u064A\u0644\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u062A\u0627\u0628\u0639 \u0627\u0646\u062A\u0638\u0627\u0645\u0643 \u0648\u062A\u0637\u0648\u0651\u0631 \u0645\u0639\u0631\u0641\u062A\u0643 \u0627\u0644\u062F\u064A\u0646\u064A\u0629.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u062F\u0631\u0627\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4)(16, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0645\u062C\u0627\u0628\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4)(24, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7)(27, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u062F\u0642\u0651\u0629 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u0648\u0633\u0627\u0645 \u0627\u0644\u062A\u0645\u064A\u0651\u0632: \u0637\u0627\u0644\u0628 \u0645\u062C\u062A\u0647\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " \u062A\u0647\u0627\u0646\u064A\u0646\u0627 \u0639\u0644\u0649 \u0627\u0646\u062A\u0638\u0627\u0645\u0643! \u0637\u0644\u0628 \u0627\u0644\u0639\u0644\u0645 \u0627\u0644\u0634\u0631\u0639\u064A \u0628\u0631\u0643\u0629 \u0645\u062A\u0648\u0627\u0635\u0644\u0629. \u0648\u0627\u0635\u0644 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0631\u0648\u062D\u064A \u0648\u0627\u0644\u0641\u0643\u0631\u064A. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u062F\u0631\u0648\u0633\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.studyDaysStreak, " \u0623\u064A\u0627\u0645 \u0645\u062A\u062A\u0627\u0644\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalQuestionsAnswered);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.successRate, "%");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".welcome-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 2.5rem;\n  margin-bottom: 2rem;\n  background: linear-gradient(135deg, rgba(14, 34, 27, 0.9) 0%, rgba(21, 50, 40, 0.9) 100%);\n  border: 1px solid var(--border-glass);\n}\n\n.welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 0.5rem;\n}\n\n.welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n\n.gold-glow[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 55, 0.15);\n  color: var(--primary-gold);\n}\n\n.emerald-glow[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--emerald-glow);\n}\n\n.teal-glow[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.15);\n  color: var(--teal-accent);\n}\n\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.parcours-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.progress-section[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 0.4rem;\n  font-weight: 600;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: var(--text-muted);\n}\n\n@media (max-width: 768px) {\n  .welcome-banner[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    text-align: center;\n  }\n\n  .welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n\n  .card-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .welcome-banner[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .welcome-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5RkFBeUY7RUFDekYscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDJyZW0gMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE0LCAzNCwgMjcsIDAuOSkgMCUsIHJnYmEoMjEsIDUwLCA0MCwgMC45KSAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdsYXNzKTtcbn1cblxuLndlbGNvbWUtdGV4dCBoMiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ud2VsY29tZS10ZXh0IHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi5zdGF0cy1ncmlkIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnN0YXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLnN0YXQtaWNvbiB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmdvbGQtZ2xvdyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLCAxNzUsIDU1LCAwLjE1KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ29sZCk7XG59XG5cbi5lbWVyYWxkLWdsb3cge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSk7XG4gIGNvbG9yOiB2YXIoLS1lbWVyYWxkLWdsb3cpO1xufVxuXG4udGVhbC1nbG93IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMCwgMTg0LCAxNjYsIDAuMTUpO1xuICBjb2xvcjogdmFyKC0tdGVhbC1hY2NlbnQpO1xufVxuXG4uc3RhdC1pbmZvIGgzIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3RhdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnNlY3Rpb24taGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zZWN0aW9uLWhlYWRlciBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnBhcmNvdXJzLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5jYXJkLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2dyZXNzLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4ucHJvZ3Jlc3MtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQtYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvYWRpbmctc3RhdGUsXG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53ZWxjb21lLWJhbm5lciB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC53ZWxjb21lLXRleHQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgfVxuXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAuc3RhdHMtZ3JpZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5jYXJkLXRvcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLndlbGNvbWUtYmFubmVyIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICB9XG5cbiAgLndlbGNvbWUtdGV4dCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
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

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<header class=\"sticky-top\"> \n\n  <div class=\"container\">\n \n   <nav id=\"navbar\" class=\"navbar navbar-expand-sm navbar-light\">\n                                 \n                <div class=\"navbar col-6 mr-auto\">\n                                <h4 id=\"brand\" class=\"navbar mr-auto\">The<span>Kims</span>Web &nbsp; &nbsp;<fa name=\"stethoscope\" size=\"lg\" class=\"mx-auto\"></fa></h4>\n                                \n                                <h4 id=\"site\" class=\"navbar ml-auto\">Admin Site</h4>\n                </div>\n                        \n \n     <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#menu\">\n             <span class=\"navbar-toggler-icon\"></span>\n     </button>\n \n     <div class=\"collapse navbar-collapse \" id=\"menu\">\n \n             <ul id=\"navbar-nav\" class=\"nav ml-auto\">\n \n                     <li class=\"nav-item\"><a (click)=\"home()\" class=\"nav-link\">Home</a></li>\n                     <li id=\"dropdown\" class=\"nav-item dropdown\">\n                        \n                        <a class=\"nav-link \" data-toggle=\"dropdown\">\n                            <fa name=\"user\" size=\"lg\"></fa>\n                            \n                        </a>\n                        \n                        <div class=\"dropdown-menu\">\n                            <small id=\"user\" class=\"dropdown-item\">{{adminUser}}</small>\n                            <hr>\n                            <a id=\"logout\" href=\"/kimsapp/login\" (click)=\"logOut()\" class=\"dropdown-item\">LogOut</a>\n\n                        </div>\n\n                        \n                    </li>\n                                     \n \n             </ul>\n \n     </div>\n \n </nav>\n \n \n  </div>\n \n </header>\n\n <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\n/*-----------------------------------------------------*/\n.container-fluid, .container {\n  width: 100%; }\nheader {\n  background-color: #35424a;\n  text-align: center;\n  padding: 3px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n  border-bottom: #e8491d 3px solid; }\nheader #brand {\n    font-family: Montserrat;\n    font-size: 16px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #17a2b8;\n    text-shadow: 5px 5px 3px black; }\nheader #brand span {\n      font-size: 24px;\n      color: #e8491d;\n      text-shadow: 5px 5px 3px black; }\nheader #brand fa {\n      margin-left: 2em;\n      color: #e8491d; }\nheader #site {\n    font-size: 16px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #17a2b8;\n    text-shadow: 5px 5px 3px black; }\nheader .navbar {\n    margin: 0;\n    padding: 0; }\nheader .navbar .nav li a {\n      cursor: pointer;\n      color: #17a2b8;\n      font-weight: bolder;\n      text-transform: uppercase;\n      text-shadow: 5px 5px 3px black; }\nheader .navbar .nav li a:hover {\n      font-weight: bolder; }\nheader .navbar .nav #dropdown a {\n      color: #e8491d;\n      cursor: pointer;\n      text-shadow: 5px 5px 3px black; }\nheader .navbar .nav #dropdown .dropdown-menu:hover, header .navbar .nav #dropdown a:hover + .dropdown-menu {\n      display: block; }\nheader .navbar .nav #dropdown .dropdown-menu {\n      background-color: #e8491d;\n      top: 4.5em;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      display: none; }\nheader .navbar .nav #dropdown .dropdown-menu #user {\n        cursor: default;\n        color: black;\n        font-size: 16px;\n        font-weight: bolder;\n        text-transform: capitalize;\n        text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3); }\nheader .navbar .nav #dropdown .dropdown-menu #user:hover {\n        background-color: #e8491d; }\nheader .navbar .nav #dropdown .dropdown-menu hr {\n        margin: 0; }\nheader .navbar .nav #dropdown .dropdown-menu #logout {\n        color: #6c757d;\n        text-transform: lowercase;\n        text-transform: capitalize;\n        text-align: center;\n        font-weight: bolder;\n        font-size: 14px;\n        text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.1); }\nheader .navbar .nav #dropdown .dropdown-menu #logout:hover {\n        cursor: pointer;\n        background-color: #35424a;\n        color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFRoZUNvZGVcXG1lYW5BcHBcXGtpbXNhcHAvc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBQTtBQUNBLHNFQUFBO0FBc0NJLHdEQUFBO0FBQ0E7RUFDSSxXQUFXLEVBQUE7QUFHZjtFQUNJLHlCQXZDVTtFQXdDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUF5QztFQUN6QyxnQ0FBd0MsRUFBQTtBQUw1QztJQVFRLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQXZDSztJQXdDTCw4QkFBeUMsRUFBQTtBQWJqRDtNQWdCWSxlQUFlO01BQ2YsY0F4REs7TUF5REwsOEJBQXlDLEVBQUE7QUFsQnJEO01Bc0JZLGdCQUFnQjtNQUNoQixjQTlESyxFQUFBO0FBdUNqQjtJQThCUSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQTVESztJQTZETCw4QkFBeUMsRUFBQTtBQWxDakQ7SUF1Q1EsU0FBUztJQUNULFVBQVUsRUFBQTtBQXhDbEI7TUE2Q29CLGVBQWU7TUFDZixjQXpFUDtNQTBFTyxtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLDhCQUF5QyxFQUFBO0FBakQ3RDtNQW9Eb0IsbUJBQW1CLEVBQUE7QUFwRHZDO01BMERvQixjQWpHSDtNQWtHRyxlQUFlO01BQ2YsOEJBQXlDLEVBQUE7QUE1RDdEO01BK0RvQixjQUFjLEVBQUE7QUEvRGxDO01Bb0VnQix5QkEzR0M7TUE0R0QsVUFBVTtNQUNWLHdDQUFnQztjQUFoQyxnQ0FBZ0M7TUFDaEMsYUFBYSxFQUFBO0FBdkU3QjtRQTBFb0IsZUFBZTtRQUNmLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQiwyQ0FBMEMsRUFBQTtBQS9FOUQ7UUFrRm9CLHlCQXpISCxFQUFBO0FBdUNqQjtRQXFGb0IsU0FBUyxFQUFBO0FBckY3QjtRQXdGb0IsY0FySEY7UUFzSEUseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZiwyQ0FBMEMsRUFBQTtBQTlGOUQ7UUFpR29CLGVBQWU7UUFDZix5QkF4SU47UUF5SU0sWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0gR2xvYmFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogQnJlYWtwb2ludHM6IHhzOiAwLCAgc206IDU3NnB4OyBtZDogNzY4cHg7IGxnOiA5OTJweDsgeGw6IDEyMDBweDsgKi9cclxuXHJcbiRjb2xvcnM6IChcclxuICAgIGJnOiAjYzBjMGMwLFxyXG4gICAgZmV2b3JpdGU6ICNlODQ5MWQsXHJcbiAgICB0aGVtZTogIzM1NDI0YSxcclxuICAgIHByaW1hcnk6ICMwMDdiZmYsXHJcbiAgICBwcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCMwMDVERkYsIDQwJSksXHJcbiAgICBwcmltYXJ5LWRhcms6IGRhcmtlbigjMDA1REZGLCA0MCUpLFxyXG4gICAgYWNjZW50OiAjRkZGNkJCLFxyXG4gICAgZ2lybGlzaDogcmdiKDE5NSwgMTUsIDIwMSksXHJcbiAgICBmb3JtOiBsaWdodGVuKCMzNTQyNGEsIDQwJSksXHJcbiAgICBncmF5OiAjNmM3NTdkLFxyXG4gICAgZ3JheS1kYXJrOiAjMzQzYTQwLFxyXG4gICAgc2Vjb25kYXJ5OiAjNmM3NTdkLFxyXG4gICAgc3VjY2VzczogIzI4YTc0NSxcclxuICAgIGluZm86ICMxN2EyYjgsXHJcbiAgICB3YXJuaW5nOiAjZmZjMTA3LFxyXG4gICAgZGFuZ2VyOiAjZGMzNTQ1LFxyXG4gICAgbGlnaHQ6ICNmOGY5ZmEsXHJcbiAgICBkYXJrOiAjMzQzYTQwXHJcblxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKXtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzICwgJGNvbG9yLW5hbWUpXHJcbn1cclxuXHJcbiRkZXNrdG9wOiA3NjhweDtcclxuJG9wYWNpdHk6IC45O1xyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZCwgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcih0aGVtZSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBjb2xvcihmZXZvcml0ZSkgM3B4IHNvbGlkO1xyXG5cclxuICAgICAgICAjYnJhbmR7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogY29sb3IoaW5mbyk7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGZldm9yaXRlKTtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmYXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IoZmV2b3JpdGUpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICNzaXRle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogY29sb3IoaW5mbyk7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgIC5uYXZ7XHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcihpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNkcm9wZG93bntcclxuICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IoZmV2b3JpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudTpob3ZlciwgYTpob3ZlciArIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihmZXZvcml0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0LjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAjdXNlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3VzZXI6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGZldm9yaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI2xvZ291dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKHNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAjbG9nb3V0OmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(router) {
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.adminUser = localStorage.getItem("adminUser");
    };
    AdminComponent.prototype.home = function () {
        this.router.navigate(["/kimsapp/admin"]);
    };
    AdminComponent.prototype.logOut = function () {
        window.localStorage.removeItem("adminToken");
        window.localStorage.removeItem("adminUser");
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/ahome/ahome.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/ahome/ahome.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <form id=\"home_form\" class=\"col-sm-12 col-md-6 mx-auto rounded \">\n\n        <h1>Home Page</h1>\n        <h4>Choose Section</h4>\n\n        <ul>\n            <li><a href=\"/kimsapp/admin/monitor\">Monitor</a></li>\n            <li><a href=\"/kimsapp/admin/medicalDb\">Medical Records</a></li>\n            <li><a href=\"/kimsapp/admin/userDb\">Users</a></li>\n            <li><a href=\"/kimsapp/admin/register\">Register</a></li>\n            \n        </ul>\n\n    </form>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/ahome/ahome.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/ahome/ahome.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\nform {\n  background-color: #4a5d68;\n  padding: 1em 2em 1em 2em;\n  margin: 1em 0 0 0;\n  width: 90%;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\n@media (min-width: 768px) {\n    form {\n      width: 30%; } }\nform h1 {\n    font-size: 20px;\n    font-weight: bold;\n    color: #e8491d;\n    text-shadow: 5px 5px 3px black; }\nform h4 {\n    font-size: 18px;\n    font-weight: bold; }\nform ul {\n    list-style-type: none; }\nform ul li {\n      margin: 2em 0 1em 0; }\nform ul li a {\n        color: #17a2b8;\n        font-size: 16px;\n        font-weight: bold; }\nform ul li a:hover {\n        cursor: pointer;\n        font-weight: bolder;\n        font-size: 18px;\n        color: #ffc107; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWhvbWUvQzpcXFRoZUNvZGVcXG1lYW5BcHBcXGtpbXNhcHAvc3JjXFxhcHBcXGFkbWluXFxhaG9tZVxcYWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQUE7QUFDQSxzRUFBQTtBQTZDQTtFQUNJLHlCQW5DMkI7RUFvQzNCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLDBDQUF5QyxFQUFBO0FBWHpDO0lBTUo7TUFRUSxVQUFVLEVBQUEsRUErQmpCO0FBdkNEO0lBWVEsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQXZEYTtJQXdEYiw4QkFBeUMsRUFBQTtBQWZqRDtJQWtCUSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7QUFuQnpCO0lBc0JRLHFCQUFxQixFQUFBO0FBdEI3QjtNQXdCWSxtQkFBbUIsRUFBQTtBQXhCL0I7UUEwQmdCLGNBdkRDO1FBd0RELGVBQWU7UUFDZixpQkFBaUIsRUFBQTtBQTVCakM7UUErQmdCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGNBOURJLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9haG9tZS9haG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBHbG9iYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiBCcmVha3BvaW50czogeHM6IDAsICBzbTogNTc2cHg7IG1kOiA3NjhweDsgbGc6IDk5MnB4OyB4bDogMTIwMHB4OyAqL1xyXG5cclxuJGNvbG9yczogKFxyXG4gICAgYmc6ICNjMGMwYzAsXHJcbiAgICBmZXZvcml0ZTogI2U4NDkxZCxcclxuICAgIHByaW1hcnk6ICMwMDdiZmYsXHJcbiAgICBwcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCMwMDVERkYsIDQwJSksXHJcbiAgICBoZWFkIDogZGFya2VuKCNlODQ5MWQsIDEwJSksXHJcbiAgICBwcmltYXJ5LWRhcms6IGRhcmtlbigjMDA1REZGLCA0MCUpLFxyXG4gICAgYWNjZW50OiAjRkZGNkJCLFxyXG4gICAgZ2lybGlzaDogcmdiKDE5NSwgMTUsIDIwMSksXHJcbiAgICBmb3JtOiBsaWdodGVuKCMzNTQyNGEsIDEwJSksXHJcbiAgICBncmF5OiAjNmM3NTdkLFxyXG4gICAgZ3JheS1kYXJrOiAjMzQzYTQwLFxyXG4gICAgc2Vjb25kYXJ5OiAjNmM3NTdkLFxyXG4gICAgc3VjY2VzczogIzI4YTc0NSxcclxuICAgIGluZm86ICMxN2EyYjgsXHJcbiAgICB3YXJuaW5nOiAjZmZjMTA3LFxyXG4gICAgZGFuZ2VyOiAjZGMzNTQ1LFxyXG4gICAgbGlnaHQ6ICNmOGY5ZmEsXHJcbiAgICBkYXJrOiAjMzQzYTQwXHJcblxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKXtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzICwgJGNvbG9yLW5hbWUpXHJcbn1cclxuXHJcbiRkZXNrdG9wOiA3NjhweDtcclxuJGRlc2t0b3Bfc206IDM2NHB4O1xyXG4kb3BhY2l0eTogLjk7XHJcblxyXG5AbWl4aW4gZGVza3RvcF9zbSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcF9zbX0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBcclxufVxyXG5cclxuXHJcbmZvcm17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihmb3JtKTtcclxuICAgIHBhZGRpbmc6IDFlbSAyZW0gMWVtIDJlbTtcclxuICAgIG1hcmdpbjogMWVtIDAgMCAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG5cclxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcihmZXZvcml0ZSk7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMmVtIDAgMWVtIDA7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IoaW5mbyk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcih3YXJuaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/ahome/ahome.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/ahome/ahome.component.ts ***!
  \************************************************/
/*! exports provided: AhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhomeComponent", function() { return AhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AhomeComponent = /** @class */ (function () {
    function AhomeComponent() {
    }
    AhomeComponent.prototype.ngOnInit = function () {
    };
    AhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ahome',
            template: __webpack_require__(/*! ./ahome.component.html */ "./src/app/admin/ahome/ahome.component.html"),
            styles: [__webpack_require__(/*! ./ahome.component.scss */ "./src/app/admin/ahome/ahome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AhomeComponent);
    return AhomeComponent;
}());



/***/ }),

/***/ "./src/app/admin/filedb/filedb.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/filedb/filedb.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"card-group\">\n\n    <form id=\"filedb_form\" class=\"form mx-auto rounded\">\n    \n      <h1>Medical Records Database</h1>\n      <h4><strong>Click to open the File :</strong></h4>\n      <hr>\n      <ul class=\"list-group\">\n\n          <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Total<span class=\"badge\">{{archivednumber}}</span></li>\n    \n      </ul>\n      <hr>\n      <ol >\n\n          <li *ngFor=\"let archivedfile of archivedfiles\" (click)=\"openfile(archivedfile.patientNo)\">\n              \n              {{archivedfile.name}} : {{archivedfile.patientNo}}\n\n          </li>\n          \n      </ol>    \n    <hr>\n    </form>\n\n    \n        <form id=\"open_form\" class=\"form mx-auto rounded\" [hidden]=\"hideform\">\n\n            <h1><strong>Medical Record</strong></h1>\n            \n            <hr>\n           \n            <label id=\"h_name\">Name: <strong id=\"pham_name\" class=\"text-warning\"  >{{name}}</strong></label> <br>\n\n            <label id=\"h_patientNo\">PatientNo: <strong id=\"pham_patientNo\" class=\"text-warning\"  >{{patientNo}}</strong></label>\n            &nbsp;&nbsp;&nbsp;\n            <label id=\"h_age\">Age: <strong id=\"pham_age\" class=\"text-warning\"  >{{age}}</strong></label>\n\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <label id=\"h_gender\">Gender: <strong id=\"pham_gender\" class=\"text-warning\"  >{{gender}}</strong></label> <br>\n\n            <label id=\"l_signs\" class=\"mt-1\"><strong>Signs & Symptoms</strong></label> <br>\n            <textarea id=\"pham_t_signs\" class=\"form-control form-control-sm\" name=\"signs\" cols=\"40\" rows=\"3\" placeholder=\"The patient was okay.. very healthy.\"  readonly=\"readonly\">{{signs}}</textarea> <br>\n\n            <label id=\"l_tests\" class=\"mt-1\"><strong>Tests</strong></label> <br>\n            <textarea id=\"pham_t_tests\" class=\"form-control form-control-sm\" name=\"tests\" cols=\"40\" rows=\"3\" placeholder=\"No tests done !\"  readonly=\"readonly\">{{tests}}</textarea> <br>\n\n            <label id=\"l_testsResults\" class=\"mt-1\"><strong>Tests' Results</strong></label> <br>\n            <textarea id=\"pham_t_testsResults\" class=\"form-control form-control-sm\" name=\"results\" cols=\"40\" rows=\"3\" placeholder=\"So definately, there was no results...\" readonly=\"readonly\">{{results}}</textarea> <br>\n\n            <label id=\"l_dx\" class=\"mt-1\"><strong>Diagnosis</strong></label> <br>\n            <textarea id=\"pham_t_dx\" class=\"form-control form-control-sm\" cols=\"40\" name=\"dx\" rows=\"3\" placeholder=\"No diagnosis perfomed !\" readonly=\"readonly\">{{dx}}</textarea> <br>          \n\n            <button id=\"btn_save\" type=\"button\" class=\"btn btn-sm btn-danger m-3\" (click)=\"deleteMED()\" > Delete </button>\n            <button id=\"btn_save\" type=\"button\" class=\"btn btn-sm btn-success m-3\" disabled=\"disabled\"> Forward </button>\n            <button id=\"btn_save\" type=\"button\" class=\"btn btn-sm btn-primary m-3\" disabled=\"disabled\"> Print </button>\n            \n\n            <hr>\n\n    </form>\n      \n  \n    \n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/admin/filedb/filedb.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/filedb/filedb.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\nform {\n  background-color: #4a5d68;\n  padding: 1em 2em 0 2em;\n  margin: 1em 0 0 0;\n  height: 0%;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\nform h1 {\n    font-size: 20px;\n    font-weight: bold;\n    color: #e8491d;\n    text-shadow: 5px 5px 3px black; }\nform h4 {\n    font-size: 12px;\n    font-weight: bold; }\nform ul li {\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    color: #17a2b8; }\nform ul li span {\n      background-color: #e8491d;\n      font-weight: 900;\n      color: black; }\nform ol {\n    list-style-type: none;\n    padding-left: 0; }\nform ol li {\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n      color: #17a2b8;\n      margin: 0 0 0 0;\n      padding: 0 0 0 1em;\n      height: 2em;\n      display: flex;\n      flex-direction: row;\n      align-items: flex-end; }\nform ol li:hover {\n      cursor: pointer;\n      color: #ffc107;\n      font-weight: bold;\n      height: 3em; }\nform #h_name, form #h_age, form #h_gender, form #l_signs, form #l_tests, form #l_testsResults, form #l_dx {\n    text-transform: capitalize;\n    font-size: 13px;\n    color: #000000; }\nform textarea {\n    color: #ffc107;\n    background-color: #4a5d68;\n    border: solid 1px #17a2b8;\n    border-radius: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZmlsZWRiL0M6XFxUaGVDb2RlXFxtZWFuQXBwXFxraW1zYXBwL3NyY1xcYXBwXFxhZG1pblxcZmlsZWRiXFxmaWxlZGIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQUE7QUFDQSxzRUFBQTtBQTZDQTtFQUNRLHlCQXBDdUI7RUFxQ3ZCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLDBDQUF5QyxFQUFBO0FBTGpEO0lBUVksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQW5EUztJQW9EVCw4QkFBeUMsRUFBQTtBQVhyRDtJQWNZLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtBQWY3QjtJQW9CZ0IsMENBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixjQXBEQyxFQUFBO0FBOEJqQjtNQXlCb0IseUJBbEVDO01BbUVELGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7QUEzQmhDO0lBZ0NZLHFCQUFxQjtJQUNyQixlQUFlLEVBQUE7QUFqQzNCO01Bb0NnQiwwQ0FBeUM7TUFDekMsY0FuRUM7TUFvRUQsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixxQkFBcUIsRUFBQTtBQTNDckM7TUE4Q2dCLGVBQWU7TUFDZixjQTVFSTtNQTZFSixpQkFBaUI7TUFDakIsV0FBVyxFQUFBO0FBakQzQjtJQXNEWSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGNBQWMsRUFBQTtBQXhEMUI7SUE0RFksY0F6RlE7SUEwRlIseUJBaEdtQjtJQWlHbkIseUJBNUZLO0lBNkZMLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZmlsZWRiL2ZpbGVkYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBHbG9iYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiBCcmVha3BvaW50czogeHM6IDAsICBzbTogNTc2cHg7IG1kOiA3NjhweDsgbGc6IDk5MnB4OyB4bDogMTIwMHB4OyAqL1xyXG5cclxuJGNvbG9yczogKFxyXG4gICAgYmc6ICNjMGMwYzAsXHJcbiAgICBmZXZvcml0ZTogI2U4NDkxZCxcclxuICAgIHByaW1hcnk6ICMwMDdiZmYsXHJcbiAgICBwcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCMwMDVERkYsIDQwJSksXHJcbiAgICBwcmltYXJ5LWRhcms6IGRhcmtlbigjMDA1REZGLCA0MCUpLFxyXG4gICAgYWNjZW50OiAjRkZGNkJCLFxyXG4gICAgZ2lybGlzaDogcmdiKDE5NSwgMTUsIDIwMSksXHJcbiAgICBmb3JtOiBsaWdodGVuKCMzNTQyNGEsIDEwJSksXHJcbiAgICBncmF5OiAjNmM3NTdkLFxyXG4gICAgZ3JheS1kYXJrOiAjMzQzYTQwLFxyXG4gICAgc2Vjb25kYXJ5OiAjNmM3NTdkLFxyXG4gICAgc3VjY2VzczogIzI4YTc0NSxcclxuICAgIGluZm86ICMxN2EyYjgsXHJcbiAgICB3YXJuaW5nOiAjZmZjMTA3LFxyXG4gICAgZGFuZ2VyOiAjZGMzNTQ1LFxyXG4gICAgbGlnaHQ6ICNmOGY5ZmEsXHJcbiAgICBkYXJrOiAjMzQzYTQwXHJcblxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKXtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzICwgJGNvbG9yLW5hbWUpXHJcbn1cclxuXHJcblxyXG4kZGVza3RvcDogNzY4cHg7XHJcbiRkZXNrdG9wX3NtOiAzNjRweDtcclxuJG9wYWNpdHk6IC45O1xyXG5cclxuQG1peGluIGRlc2t0b3Bfc20ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3Bfc219KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5mb3Jte1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGZvcm0pO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAyZW0gMCAyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gMCAwIDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICBcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IGNvbG9yKGZldm9yaXRlKTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcihpbmZvKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGZldm9yaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMWVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcih3YXJuaW5nKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzZW07XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNoX25hbWUsICNoX2FnZSwgI2hfZ2VuZGVyLCAjbF9zaWducywgI2xfdGVzdHMsICNsX3Rlc3RzUmVzdWx0cywgI2xfZHgge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgICBjb2xvcjogY29sb3Iod2FybmluZyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGZvcm0pO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBjb2xvcihpbmZvKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/filedb/filedb.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/filedb/filedb.component.ts ***!
  \**************************************************/
/*! exports provided: FiledbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiledbComponent", function() { return FiledbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stats.service */ "./src/app/services/stats.service.ts");
/* harmony import */ var src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notify.service */ "./src/app/services/notify.service.ts");




var FiledbComponent = /** @class */ (function () {
    function FiledbComponent(statsService, notifyService) {
        this.statsService = statsService;
        this.notifyService = notifyService;
        this.hideform = true;
    }
    FiledbComponent.prototype.ngOnInit = function () {
        var _this = this;
        // on reload
        this.statsService.onreloadMED().subscribe(
        //do nothing
        );
        // medical db
        this.statsService.medicalDb().subscribe(function (data) {
            _this.archivednumber = data.archivednumber;
            _this.archivedfiles = data.archivedfiles;
        }, function (error) { console.error("Error", error); });
    };
    // open file
    FiledbComponent.prototype.openfile = function (id) {
        var _this = this;
        var patientNo = { patientNo: id };
        this.statsService.openmedical(patientNo).subscribe(function (data) {
            _this.name = data[0].name;
            _this.patientNo = data[0].patientNo;
            _this.age = data[0].age;
            _this.gender = data[0].gender;
            _this.signs = data[0].signs;
            _this.tests = data[0].tests;
            _this.results = data[0].results;
            _this.dx = data[0].dx;
            _this.hideform = false;
        }, function (error) { console.error("Error", error); });
    };
    ;
    // delete file
    FiledbComponent.prototype.deleteMED = function () {
        var _this = this;
        this.statsService.deleteMED().subscribe(function (data) {
            _this.notifyService.showSuccess("File deleted!", "Success");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.error("Error", error); });
    };
    ;
    FiledbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filedb',
            template: __webpack_require__(/*! ./filedb.component.html */ "./src/app/admin/filedb/filedb.component.html"),
            styles: [__webpack_require__(/*! ./filedb.component.scss */ "./src/app/admin/filedb/filedb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"],
            src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], FiledbComponent);
    return FiledbComponent;
}());



/***/ }),

/***/ "./src/app/admin/monitor/monitor.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/monitor/monitor.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<form id=\"monitor_form\" class=\"form col-sm-12 col-md-6 mx-auto rounded\">\n\n  <h1>Monitor</h1>\n  <h4><strong>Patients waiting for services in :</strong></h4>\n  <hr>\n\n  <ul class=\"list-group\">\n\n      <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Examination (from Adm)<span class=\"badge badge-success\">{{fromAdm}}</span></li>\n\n      <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Laboratory<span class=\"badge badge-warning\">{{toLab}}</span></li>\n\n      <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Examination (from Lab)<span class=\"badge badge-success\">{{fromLab}}</span></li>\n\n      <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Xray<span class=\"badge badge-danger\">{{toXray}}</span></li>\n\n      <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Examination (from Xray)<span class=\"badge badge-success\">{{fromXray}}</span></li>\n\n      <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Pharmacy<span class=\"badge badge-info\">{{toPharmacy}}</span></li>\n\n  </ul>\n\n  <hr>\n\n  <h4><strong>Database :</strong></h4>\n  \n  <ul class=\"list-group\">\n\n      <li id=\"archived\" class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Medical Records Archived<span class=\"badge\">{{archived}}</span></li>\n\n  </ul>\n\n\n</form>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/monitor/monitor.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/monitor/monitor.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\nform {\n  background-color: #4a5d68;\n  padding: 1em 2em 2em 2em;\n  margin: 1em 0 0 0;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\nform h1 {\n    font-size: 20px;\n    font-weight: bold;\n    color: #e8491d;\n    text-shadow: 5px 5px 3px black; }\nform h4 {\n    font-size: 12px;\n    font-weight: bold; }\nform ul li {\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n    color: #17a2b8; }\nform ul li span {\n      width: 10%;\n      font-weight: 900; }\nform ul #archived {\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    color: #17a2b8; }\nform ul #archived span {\n      background-color: #e8491d;\n      font-weight: 900;\n      color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbW9uaXRvci9DOlxcVGhlQ29kZVxcbWVhbkFwcFxca2ltc2FwcC9zcmNcXGFwcFxcYWRtaW5cXG1vbml0b3JcXG1vbml0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQUE7QUFDQSxzRUFBQTtBQThDQTtFQUNRLHlCQXBDdUI7RUFxQ3ZCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsMENBQXlDLEVBQUE7QUFKakQ7SUFPWSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBbkRTO0lBb0RULDhCQUF5QyxFQUFBO0FBVnJEO0lBYVksZUFBZTtJQUNmLGlCQUFpQixFQUFBO0FBZDdCO0lBa0JnQiwwQ0FBeUM7SUFDekMsY0FqREMsRUFBQTtBQThCakI7TUFxQm9CLFVBQVU7TUFDVixnQkFBZ0IsRUFBQTtBQXRCcEM7SUEyQmdCLDBDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsY0EzREMsRUFBQTtBQThCakI7TUFnQ29CLHlCQTFFQztNQTJFRCxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbW9uaXRvci9tb25pdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tIEdsb2JhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIEJyZWFrcG9pbnRzOiB4czogMCwgIHNtOiA1NzZweDsgbWQ6IDc2OHB4OyBsZzogOTkycHg7IHhsOiAxMjAwcHg7ICovXHJcblxyXG4kY29sb3JzOiAoXHJcbiAgICBiZzogI2MwYzBjMCxcclxuICAgIGZldm9yaXRlOiAjZTg0OTFkLFxyXG4gICAgdGhlbWU6ICMzNTQyNGEsXHJcbiAgICBwcmltYXJ5OiAjMDA3YmZmLFxyXG4gICAgcHJpbWFyeS1saWdodDogbGlnaHRlbigjMDA1REZGLCA0MCUpLFxyXG4gICAgcHJpbWFyeS1kYXJrOiBkYXJrZW4oIzAwNURGRiwgNDAlKSxcclxuICAgIGFjY2VudDogI0ZGRjZCQixcclxuICAgIGdpcmxpc2g6IHJnYigxOTUsIDE1LCAyMDEpLFxyXG4gICAgZm9ybTogbGlnaHRlbigjMzU0MjRhLCAxMCUpLFxyXG4gICAgZ3JheTogIzZjNzU3ZCxcclxuICAgIGdyYXktZGFyazogIzM0M2E0MCxcclxuICAgIHNlY29uZGFyeTogIzZjNzU3ZCxcclxuICAgIHN1Y2Nlc3M6ICMyOGE3NDUsXHJcbiAgICBpbmZvOiAjMTdhMmI4LFxyXG4gICAgd2FybmluZzogI2ZmYzEwNyxcclxuICAgIGRhbmdlcjogI2RjMzU0NSxcclxuICAgIGxpZ2h0OiAjZjhmOWZhLFxyXG4gICAgZGFyazogIzM0M2E0MFxyXG5cclxuKTtcclxuXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSl7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycyAsICRjb2xvci1uYW1lKVxyXG59XHJcblxyXG5cclxuJGRlc2t0b3A6IDc2OHB4O1xyXG4kZGVza3RvcF9zbTogMzY0cHg7XHJcbiRvcGFjaXR5OiAuOTtcclxuXHJcbkBtaXhpbiBkZXNrdG9wX3NtIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wX3NtfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBcclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuZm9ybXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihmb3JtKTtcclxuICAgICAgICBwYWRkaW5nOiAxZW0gMmVtIDJlbSAyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gMCAwIDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcihmZXZvcml0ZSk7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IoaW5mbyk7XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjYXJjaGl2ZWR7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZmV2b3JpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/monitor/monitor.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/monitor/monitor.component.ts ***!
  \****************************************************/
/*! exports provided: MonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorComponent", function() { return MonitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stats.service */ "./src/app/services/stats.service.ts");



var MonitorComponent = /** @class */ (function () {
    function MonitorComponent(statsService) {
        this.statsService = statsService;
    }
    MonitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // monitor
        this.statsService.monitor().subscribe(function (data) {
            _this.fromAdm = data.fromAdm;
            _this.toLab = data.toLab;
            _this.fromLab = data.fromLab;
            _this.toXray = data.toXray;
            _this.fromXray = data.fromXray;
            _this.toPharmacy = data.toPharmacy;
            _this.archived = data.archived;
        }, function (error) { console.error("Error", error); });
    };
    MonitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitor',
            template: __webpack_require__(/*! ./monitor.component.html */ "./src/app/admin/monitor/monitor.component.html"),
            styles: [__webpack_require__(/*! ./monitor.component.scss */ "./src/app/admin/monitor/monitor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"]])
    ], MonitorComponent);
    return MonitorComponent;
}());



/***/ }),

/***/ "./src/app/admin/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<!--------------------------------------------------------------------------------------------------------------->\n  <section>\n\n    <ul class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a id=\"reg1\">Clinician Registration From</a></li>\n      <li class=\"breadcrumb-item\"><a id=\"reg2\">Admin Registration Form</a></li>\n    </ul>\n\n  </section>\n\n\n<!-------------- CLINICIAN REGISTRATION FORM ------------------------------------------------------------------------->\n\n    <form id=\"reg_cli_form\" class=\"form col-sm-12 col-md-6 mx-auto rounded \"\n    #reg_cli_form=\"ngForm\"\n    (submit)=\"registerClinician()\"\n    \n    >\n\n        <h1>Register Clinician</h1>\n        \n        <hr>\n        \n        \n\n        <input id=\"cliFirstname\" type=\"text\" class=\"form-control form-control-sm rounded\" [(ngModel)]=\"regCli.firstName\"\n        name=\"firstName\" #firstName=\"ngModel\"\n        [class.is-invalid]=\"firstName.invalid && firstName.touched\"  \n        placeholder=\"Firstname\" required>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"firstName.valid || firstName.untouched\">FirstName is Required</small>\n        \n\n\n\n        <input id=\"cliSurname\" type=\"text\" class=\"form-control form-control-sm rounded\"\n         [(ngModel)]=\"regCli.surname\" name=\"surname\"\n         #surname=\"ngModel\"\n          [class.is-invalid]=\"surname.invalid && surname.touched\" \n         placeholder=\"Surname\" required>\n         <small class=\"text-danger ml-2\" [class.d-none]=\"surname.valid || surname.untouched\">Surname is Required</small>\n        \n        \n        <input id=\"cliLastname\" type=\"text\" class=\"form-control form-control-sm rounded\" \n        #lastName=\"ngModel\"\n          [class.is-invalid]=\"lastName.invalid && lastName.touched\"\n        [(ngModel)]=\"regCli.lastName\" name=\"lastName\" placeholder=\"Lastname\" required>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"lastName.valid || lastName.untouched\">LastName is Required</small>\n\n        <br><br>\n\n\n\n        \n        \n        <input id=\"cliNationalId\" type=\"text\" class=\"form-control form-control-sm rounded\" \n        [(ngModel)]=\"regCli.nationalId\" name=\"nationalId\" \n        #nationalId=\"ngModel\"\n          [class.is-invalid]=\"nationalId.invalid && nationalId.touched\"\n        placeholder=\"National Id No.\" required>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"nationalId.valid || nationalId.untouched\">National Id is Required</small>\n\n        <br><br>\n\n\n \n        <label class=\"text-info mt-2\">Gender</label> <br>\n        <label class=\"text-info\">Male</label>\n        <input id=\"cliMale\" type=\"radio\" [(ngModel)]=\"regCli.gender\" name=\"gender\" value=\"male\"  required> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;\n        <label class=\"text-info\">Female</label>\n        <input id=\"cliFemale\" type=\"radio\" [(ngModel)]=\"regCli.gender\" name=\"gender\" value=\"female\" required> <br> <br>\n\n\n\n      \n\n       \n         \n\n\n        \n        <input id=\"cliphone\" type=\"tel\" class=\"form-control form-control-sm rounded\"\n         [(ngModel)]=\"regCli.phone\" name=\"phone\" \n         #phone=\"ngModel\"\n          [class.is-invalid]=\"phone.invalid && phone.touched\"\n         placeholder=\"phone\" required>\n         <small class=\"text-danger ml-2\" [class.d-none]=\"phone.valid || phone.untouched\">Phone is Required</small>\n\n         <br><br>\n\n\n\n\n\n\n        \n\n        <select id=\"cliSpecialize\" class=\"form-control form-control-sm rounded\" \n        [(ngModel)]=\"regCli.specialize\" name=\"specialize\"\n        #specialize=\"ngModel\"\n          [class.is-invalid]=\"specialize.invalid && specialize.touched\"\n         required>\n\n\n\n          <option value=\"\" disabled selected hidden >Select Specialization</option>\n          <option value=\"Records Tech\">Records Tech</option>\n          <option value=\"Clinical Officer\">Clinical Office</option>\n          <option value=\"Lab Tech\">Lab Tech</option>\n          <option value=\"Xray Tech\">Xray Tech</option>\n          <option value=\"Pharmacist Tech\">Pharmacist Tech</option>\n\n\n        </select>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"specialize.valid || specialize.untouched\">Specialization is Required</small>\n\n         <br><br>\n\n        \n        <input id=\"cliProfNo\" type=\"tel\" class=\"form-control form-control-sm rounded\" \n        [(ngModel)]=\"regCli.profNo\" name=\"profNo\" \n        #profNo=\"ngModel\"\n          [class.is-invalid]=\"profNo.invalid && profNo.touched\"\n        placeholder=\"Profession No\" required>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"profNo.valid || profNo.untouched\">Profession Number is Required</small>\n\n        <br><br>\n\n        <hr>\n\n        \n        <input id=\"climail\" type=\"email\" class=\"form-control form-control-sm rounded\"\n         [(ngModel)]=\"regCli.mail\" name=\"mail\" \n         #mail=\"ngModel\"\n         pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\n          [class.is-invalid]=\"mail.invalid && mail.touched\"\n         placeholder=\"Email\" required> \n        \n          <div *ngIf=\"mail.errors && (mail.invalid && mail.touched)\">\n              <small class=\"text-danger ml-2\" *ngIf=\"mail.errors.required\">Email is Required</small>\n              <small class=\"text-danger ml-2\" *ngIf=\"mail.errors.pattern\">Email should be in this format \"job@gmail.com\"</small>\n          </div>\n\n         <br><br>\n\n\n\n\n        \n\n\n        <input id=\"clipassword\" type=\"password\" class=\"form-control form-control-sm rounded\"\n         [(ngModel)]=\"regCli.password\" name=\"password\"\n         #password=\"ngModel\"\n         pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\"\n          [class.is-invalid]=\"password.invalid && password.touched\"\n         placeholder=\"Password\" required>\n\n         <div *ngIf=\"password.errors && (password.invalid && password.touched)\">\n            <small class=\"text-danger ml-2\" *ngIf=\"password.errors.required\">Password is Required</small>\n            <small class=\"text-danger ml-2\" *ngIf=\"password.errors.pattern\">Password ( UpperCase, LowerCase, Number/SpecialChar and min of 8 Chars )</small>\n        </div>\n      \n\n         <br><br>\n\n\n\n\n\n\n\n        <button id=\"btn_cli\" type=\"submit\"  class=\"btn btn-success m-3\" [disabled]=\"!reg_cli_form.valid\" > Submit </button>\n        \n\n\n\n\n    </form>\n\n\n    <!------------ ADMIN REGISTRATION FORM -------------------------------------------------------------------------------->\n\n\n\n    <form id=\"reg_adm_form\" class=\"form col-sm-12 col-md-6 mx-auto rounded \"\n    #reg_adm_form=\"ngForm\"\n    (submit)=\"registerAdmin()\"\n    >\n\n        <h1>Register Admin</h1>\n        \n        <hr>\n        \n        \n        <input id=\"adminFirstname\" type=\"text\" class=\"form-control form-control-sm rounded\"\n        #adminFirstname=\"ngModel\"\n        [class.is-invalid]=\"adminFirstname.invalid && adminFirstname.touched\"\n        [(ngModel)]=\"regAdm.firstName\" name=\"firstName\" placeholder=\"Firstname\" required>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"adminFirstname.valid || adminFirstname.untouched\">FirstName is Required</small>\n        \n\n\n        \n        <input id=\"adminSurname\" type=\"text\" class=\"form-control form-control-sm rounded\"\n        #adminSurname=\"ngModel\"\n        [class.is-invalid]=\"adminSurname.invalid && adminSurname.touched\"\n        [(ngModel)]=\"regAdm.surname\" name=\"surname\" placeholder=\"Surname\" required>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"adminSurname.valid || adminSurname.untouched\">Surname is Required</small>\n        \n        \n        <input id=\"adminLastname\" type=\"text\" class=\"form-control form-control-sm rounded\"\n        #adminLastname=\"ngModel\"\n        [class.is-invalid]=\"adminLastname.invalid && adminLastname.touched\"\n        [(ngModel)]=\"regAdm.lastName\" name=\"lastName\" placeholder=\"Lastname\" required> \n        <small class=\"text-danger ml-2\" [class.d-none]=\"adminLastname.valid || adminLastname.untouched\">LastName is Required</small>\n        \n        <br><br>\n        \n      \n        <input id=\"admNationalId\" type=\"text\" class=\"form-control form-control-sm rounded\" \n        #admNationalId=\"ngModel\"\n        [class.is-invalid]=\"admNationalId.invalid && admNationalId.touched\"\n        [(ngModel)]=\"regAdm.nationalId\" name=\"nationalId\" placeholder=\"National Id No\" required>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"admNationalId.valid || admNationalId.untouched\">National Id is Required</small>\n        \n        <br><br>\n\n\n\n        <label class=\"text-info mt-2\">Gender</label> <br>\n        <label class=\"text-info\">Male</label>\n        <input id=\"adminMale\" type=\"radio\" [(ngModel)]=\"regAdm.gender\" name=\"gender\" value=\"male\"  required> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;\n        <label class=\"text-info\">Female</label>\n        <input id=\"adminFemale\" type=\"radio\" [(ngModel)]=\"regAdm.gender\" name=\"gender\" value=\"female\" required> <br> <br>\n        \n\n\n\n     \n        \n\n      \n        <input id=\"admphone\" type=\"tel\" class=\"form-control form-control-sm rounded\" \n        #admphone=\"ngModel\"\n        [class.is-invalid]=\"admphone.invalid && admphone.touched\"\n        [(ngModel)]=\"regAdm.phone\" name=\"phone\" placeholder=\"phone\" required> \n        <small class=\"text-danger ml-2\" [class.d-none]=\"admphone.valid || admphone.untouched\">Phone Number is Required</small>\n        \n        <br><br>\n\n\n\n\n   \n        <select id=\"admDept\" class=\"form-control form-control-sm rounded\" \n        #admDept=\"ngModel\"\n        [class.is-invalid]=\"admDept.invalid && admDept.touched\"\n        [(ngModel)]=\"regAdm.department\" name=\"department\" required>\n        \n          <option value=\"\" disabled selected hidden>Select Department.</option>\n          <option value=\"medical\">Medical</option>\n          <option value=\"administrative\">Administrative</option>\n        \n        </select>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"admDept.valid || admDept.untouched\">Department is Required</small>\n        \n        <br><br>\n\n\n\n\n\n     \n        <input id=\"admOfficeNo\" type=\"tel\" class=\"form-control form-control-sm rounded\"\n        #admOfficeNo=\"ngModel\"\n        [class.is-invalid]=\"admOfficeNo.invalid && admOfficeNo.touched\"\n        [(ngModel)]=\"regAdm.officeNo\" name=\"officeNo\" placeholder=\"Office Number\" required> \n        <small class=\"text-danger ml-2\" [class.d-none]=\"admOfficeNo.valid || admOfficeNo.untouched\">Office Number is Required</small>\n        \n        <br><br>\n\n\n\n\n        <hr>\n\n     \n\n        <input id=\"admmail\" type=\"email\" class=\"form-control form-control-sm rounded\" \n        #admmail=\"ngModel\"\n        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\n        [class.is-invalid]=\"admmail.invalid && admmail.touched\"\n        [(ngModel)]=\"regAdm.mail\" name=\"mail\" placeholder=\"Email\" required> \n        <div *ngIf=\"admmail.errors && (admmail.invalid && admmail.touched)\">\n            <small class=\"text-danger ml-2\" *ngIf=\"admmail.errors.required\">Email is Required</small>\n            <small class=\"text-danger ml-2\" *ngIf=\"admmail.errors.pattern\">Email should be in this format \"job@gmail.com\"</small>\n        </div>\n        <br><br>\n\n\n\n     \n        <input id=\"admpassword\" type=\"password\" class=\"form-control form-control-sm rounded\" \n        #admpassword=\"ngModel\"\n        pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\"\n        [class.is-invalid]=\"admpassword.invalid && admpassword.touched\"\n        [(ngModel)]=\"regAdm.password\" name=\"password\" placeholder=\"Password\" required>\n\n        <div *ngIf=\"admpassword.errors && (admpassword.invalid && admpassword.touched)\">\n            <small class=\"text-danger ml-2\" *ngIf=\"admpassword.errors.required\">Password is Required</small>\n            <small class=\"text-danger ml-2\" *ngIf=\"admpassword.errors.pattern\">Password ( UpperCase, LowerCase, Number/SpecialChar and min of 8 Chars )</small>\n        </div>\n\n\n        <br><br>\n\n        <button id=\"btn_admin\" type=\"submit\" [disabled]=\"!reg_adm_form.valid\" class=\"btn btn-success m-3\"  > Submit </button>\n        \n\n    </form>\n\n\n  \n\n</div>"

/***/ }),

/***/ "./src/app/admin/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\nsection .breadcrumb {\n  align-content: center; }\nsection .breadcrumb li {\n    color: #2c9cdd;\n    cursor: pointer; }\nsection .breadcrumb li:hover {\n    font-size: 15px;\n    font-weight: bolder; }\nform {\n  background-color: #4a5d68;\n  padding: 1em 2em 0 2em;\n  margin: 1em 0 0 0;\n  height: 0%;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\nform h1 {\n    font-size: 20px;\n    font-weight: bold;\n    color: #e8491d;\n    text-shadow: 5px 5px 3px black; }\nform h4 {\n    font-size: 12px;\n    font-weight: bold; }\nform input, form select {\n    border: none;\n    border-bottom: solid #e8491d 2px;\n    margin: 1em 0 0 0;\n    background-color: #4a5d68;\n    color: #17a2b8; }\nform small {\n    font-size: 12px; }\nform input::-webkit-input-placeholder {\n    color: #6c757d; }\nform input::-ms-input-placeholder {\n    color: #6c757d; }\nform input::placeholder {\n    color: #6c757d; }\nform input::after {\n    border-bottom: solid #17a2b8 2px; }\nform input[type=text], form input[type=email], form input[type=tel], form input[type=password], form select {\n    width: 15em; }\nform select:required:invalid {\n    color: #6c757d; }\nform option[value=\"\"][disabled] {\n    display: none; }\nform option {\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVnaXN0ZXIvQzpcXFRoZUNvZGVcXG1lYW5BcHBcXGtpbXNhcHAvc3JjXFxhcHBcXGFkbWluXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQUE7QUFDQSxzRUFBQTtBQThDQTtFQUdRLHFCQUFxQixFQUFBO0FBSDdCO0lBTVksY0FBd0I7SUFDeEIsZUFBZSxFQUFBO0FBUDNCO0lBVVksZUFBZTtJQUNmLG1CQUFtQixFQUFBO0FBSy9CO0VBQ0kseUJBckQyQjtFQXNEM0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsMENBQXlDLEVBQUE7QUFMN0M7SUFRUSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBcEVhO0lBcUViLDhCQUF5QyxFQUFBO0FBWGpEO0lBY1EsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0FBZnpCO0lBbUJRLFlBQVk7SUFDWixnQ0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLHlCQTFFdUI7SUEyRXZCLGNBcEVTLEVBQUE7QUE2Q2pCO0lBNEJRLGVBQWUsRUFBQTtBQTVCdkI7SUErQlEsY0E5RWMsRUFBQTtBQStDdEI7SUErQlEsY0E5RWMsRUFBQTtBQStDdEI7SUErQlEsY0E5RWMsRUFBQTtBQStDdEI7SUFrQ1EsZ0NBQW9DLEVBQUE7QUFsQzVDO0lBcUNRLFdBQVcsRUFBQTtBQXJDbkI7SUF3Q1EsY0F6RlMsRUFBQTtBQWlEakI7SUEyQ1EsYUFBYSxFQUFBO0FBM0NyQjtJQThDUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBHbG9iYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiBCcmVha3BvaW50czogeHM6IDAsICBzbTogNTc2cHg7IG1kOiA3NjhweDsgbGc6IDk5MnB4OyB4bDogMTIwMHB4OyAqL1xyXG5cclxuJGNvbG9yczogKFxyXG4gICAgYmc6ICNjMGMwYzAsXHJcbiAgICBmZXZvcml0ZTogI2U4NDkxZCxcclxuICAgIHByaW1hcnk6ICMwMDdiZmYsXHJcbiAgICBwcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCMwMDVERkYsIDQwJSksXHJcbiAgICBwcmltYXJ5LWRhcms6IGRhcmtlbigjMDA1REZGLCA0MCUpLFxyXG4gICAgYWNjZW50OiAjRkZGNkJCLFxyXG4gICAgZ2lybGlzaDogcmdiKDE5NSwgMTUsIDIwMSksXHJcbiAgICBmb3JtOiBsaWdodGVuKCMzNTQyNGEsIDEwJSksXHJcbiAgICBpbnB1dDogbGlnaHRlbigjMzU0MjRhLCA0MCUpLFxyXG4gICAgYnJlYWQ6IGxpZ2h0ZW4oIzM1NDI0YSwgNDAlKSxcclxuICAgIGdyYXk6ICM2Yzc1N2QsXHJcbiAgICBncmF5LWRhcms6ICMzNDNhNDAsXHJcbiAgICBzZWNvbmRhcnk6ICM2Yzc1N2QsXHJcbiAgICBzdWNjZXNzOiAjMjhhNzQ1LFxyXG4gICAgaW5mbzogIzE3YTJiOCxcclxuICAgIHdhcm5pbmc6ICNmZmMxMDcsXHJcbiAgICBkYW5nZXI6ICNkYzM1NDUsXHJcbiAgICBsaWdodDogI2Y4ZjlmYSxcclxuICAgIGRhcms6ICMzNDNhNDBcclxuXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUpe1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMgLCAkY29sb3ItbmFtZSlcclxufVxyXG5cclxuXHJcbiRkZXNrdG9wOiA3NjhweDtcclxuJGRlc2t0b3Bfc206IDM2NHB4O1xyXG4kb3BhY2l0eTogLjk7XHJcblxyXG5AbWl4aW4gZGVza3RvcF9zbSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcF9zbX0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBcclxufVxyXG5cclxuc2VjdGlvbntcclxuICAgIFxyXG4gICAgLmJyZWFkY3J1bWJ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDQ0LCAxNTYsIDIyMSk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihmb3JtKTtcclxuICAgIHBhZGRpbmc6IDFlbSAyZW0gMCAyZW07XHJcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgIFxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcihmZXZvcml0ZSk7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQsIHNlbGVjdHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgY29sb3IoZmV2b3JpdGUpIDJweDtcclxuICAgICAgICBtYXJnaW46IDFlbSAwIDAgMDsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZm9ybSk7XHJcbiAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHNtYWxse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIGlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgICAgICBjb2xvcjogY29sb3Ioc2Vjb25kYXJ5KTtcclxuICAgIH1cclxuICAgIGlucHV0OjphZnRlcntcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCBjb2xvcihpbmZvKSAycHhcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBzZWxlY3R7XHJcbiAgICAgICAgd2lkdGg6IDE1ZW07XHJcbiAgICB9XHJcbiAgICBzZWxlY3Q6cmVxdWlyZWQ6aW52YWxpZCB7XHJcbiAgICAgICAgY29sb3I6IGNvbG9yKGdyYXkpO1xyXG4gICAgfVxyXG4gICAgb3B0aW9uW3ZhbHVlPVwiXCJdW2Rpc2FibGVkXXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgb3B0aW9uIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notify.service */ "./src/app/services/notify.service.ts");




var RegisterComponent = /** @class */ (function () {
    //--------------------------------------------  
    function RegisterComponent(usersService, notifyService) {
        this.usersService = usersService;
        this.notifyService = notifyService;
    }
    //-------------------------------------------- 
    RegisterComponent.prototype.ngOnInit = function () {
        this.regCli = {
            firstName: "", surname: "", lastName: "", nationalId: "", gender: "",
            phone: "", specialize: "", profNo: "", mail: "", password: ""
        };
        this.regAdm = {
            firstName: "", surname: "", lastName: "", nationalId: "", gender: "",
            phone: "", department: "", officeNo: "", mail: "", password: ""
        };
    };
    //------------ Clinician Registration ---------------------- 
    RegisterComponent.prototype.registerClinician = function () {
        var _this = this;
        this.usersService.regClinician(this.regCli).subscribe(function (data) {
            _this.notifyService.showSuccess("Clinician User Added", "Successfull !!");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) {
            _this.notifyService.showError("Could not Register", "Failed !!");
            console.error("Error", error);
        });
    };
    ;
    //------------ Admin Registration ---------------------- 
    RegisterComponent.prototype.registerAdmin = function () {
        var _this = this;
        this.usersService.regAdmin(this.regAdm).subscribe(function (data) {
            _this.notifyService.showSuccess("Admin User Added", "Successfull !!");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) {
            _this.notifyService.showError("Could not Register", "Failed !!");
            console.error("Error", error);
        });
    };
    ;
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/admin/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/admin/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/admin/userdb/userdb.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/userdb/userdb.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"card-group\">\n  \n      <form id=\"userdb_form\" class=\"form mx-auto rounded\">\n      \n        <h1>Clinicians Database</h1>\n        <h4><strong>Click to see Profile :</strong></h4>\n        <hr>\n        <ul class=\"list-group\">\n\n          <li id=\"total\" class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Total<span class=\"badge\">{{clinician}}</span></li>\n    \n      </ul>\n      <hr>\n      <ol >\n\n          <li *ngFor=\"let clinicianprofile of clinicianprofiles\" (click)=\"openclinicianprofile(clinicianprofile.userNo)\">\n              \n              {{clinicianprofile.firstName}} {{clinicianprofile.surname}} {{clinicianprofile.lastName}} : {{clinicianprofile.userNo}}\n\n          </li>\n          \n      </ol>    \n    <hr>  \n      \n      </form>\n  <!---------------------------------------------------------------------------------------->\n\n  <!--------------------------------------------------------------------------------------->\n      <form id=\"cliProfile_form\" class=\"form mx-auto rounded\" [hidden]=\"hideformclinician\">\n      \n          <h4><strong>Clinician Profile</strong></h4>\n          <hr>\n          <ul class=\"list-group\">\n\n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Full Name :<span class=\"badge\">{{name}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">User ID :<span class=\"badge\">{{userNo}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">National ID :<span class=\"badge\">{{nationalId}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">gender :<span class=\"badge\">{{gender}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Tel :<span class=\"badge\">{{phone}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Specialization :<span class=\"badge\">{{specialize}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Profession No :<span class=\"badge\">{{profNo}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Email :<span class=\"badge\">{{mail}}</span></li>\n        \n        \n        </ul>\n\n            <button class=\"btn btn-sm btn-danger m-3\" (click)=\"deleteUSERCLI()\"> Delete </button>\n        \n        </form>\n<!-------------------------------------------------------------------------------->\n\n        <form id=\"admProfile_form\" class=\"form mx-auto rounded\" [hidden]=\"hideformadmin\">\n      \n          <h4><strong>Admin Profile</strong></h4>\n          <hr>\n          <ul class=\"list-group\">\n\n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Full Name :<span class=\"badge\">{{name}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">User ID :<span class=\"badge\">{{userNo}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">National ID :<span class=\"badge\">{{nationalId}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">gender :<span class=\"badge\">{{gender}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Tel :<span class=\"badge\">{{phone}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Department :<span class=\"badge\">{{department}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Office No :<span class=\"badge\">{{officeNo}}</span></li>\n        \n            <li class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Email :<span class=\"badge\">{{mail}}</span></li>\n        \n        </ul>\n\n            <button class=\"btn btn-sm btn-danger m-3\" (click)=\"deleteUSERADM()\"> Delete </button>\n        \n        </form>\n<!------------------------------------------------------------------------------------------->\n        <form id=\"userdb_form\" class=\"form mx-auto rounded\">\n      \n          <h1>Admin Database</h1>\n          <h4><strong>Click to see Profile :</strong></h4>\n          <hr>\n          <ul class=\"list-group\">\n  \n            <li id=\"total\" class=\"list-group-item bg-transparent d-flex justify-content-between align-items-center\">Total<span class=\"badge\">{{admin}}</span></li>\n      \n        </ul>\n        <hr>\n        <ol >\n  \n            <li *ngFor=\"let adminprofile of adminprofiles\" (click)=\"openadminprofile(adminprofile.userNo)\">\n                \n              {{adminprofile.firstName}} {{adminprofile.surname}} {{adminprofile.lastName}} : {{adminprofile.userNo}}\n  \n            </li>\n            \n        </ol>    \n      <hr>  \n        \n        </form>\n    \n      \n      </div>\n  \n    </div>"

/***/ }),

/***/ "./src/app/admin/userdb/userdb.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/userdb/userdb.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\nform {\n  background-color: #4a5d68;\n  padding: 1em 2em 0 2em;\n  margin: 1em 0 0 0;\n  height: 0%;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  width: 25em; }\n@media (min-width: 364px) {\n    form {\n      width: 90%; } }\n@media (min-width: 768px) {\n    form {\n      width: 60%; } }\n@media (min-width: 992px) {\n    form {\n      width: 25%; } }\nform h1 {\n    font-size: 20px;\n    font-weight: bold;\n    color: #e8491d;\n    text-shadow: 5px 5px 3px black; }\nform h4 {\n    font-size: 12px;\n    font-weight: bold;\n    margin: 1em 0 0 2em; }\nform ul li {\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n    font-weight: bold;\n    color: #17a2b8; }\nform ul li span {\n      background-color: #e8491d;\n      font-weight: 900;\n      color: black; }\nform ol {\n    list-style-type: none;\n    padding-left: 0; }\nform ol li {\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n      color: #17a2b8;\n      margin: 0 0 0 0;\n      padding: 0 1em 0 1em;\n      height: 2em;\n      display: flex;\n      flex-direction: row;\n      align-items: flex-end; }\nform ol li:hover {\n      cursor: pointer;\n      color: #ffc107;\n      font-weight: bold;\n      height: 3em; }\n#total span {\n  background-color: #17a2b8; }\n#cliProfile_form, #admProfile_form {\n  text-align: center;\n  width: 25em; }\n@media (min-width: 364px) {\n    #cliProfile_form, #admProfile_form {\n      width: 100%; } }\n@media (min-width: 768px) {\n    #cliProfile_form, #admProfile_form {\n      width: 60%;\n      float: center; } }\n@media (min-width: 992px) {\n    #cliProfile_form, #admProfile_form {\n      width: 40%; } }\n#cliProfile_form h4, #admProfile_form h4 {\n    font-size: 15px;\n    font-weight: bold;\n    color: #17a2b8;\n    text-shadow: 5px 5px 3px black; }\n#cliProfile_form ul li, #admProfile_form ul li {\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n    color: #17a2b8; }\n#cliProfile_form ul li span, #admProfile_form ul li span {\n      font-weight: 700;\n      font-size: 13px;\n      background-color: transparent;\n      color: #17a2b8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcmRiL0M6XFxUaGVDb2RlXFxtZWFuQXBwXFxraW1zYXBwL3NyY1xcYXBwXFxhZG1pblxcdXNlcmRiXFx1c2VyZGIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQUE7QUFDQSxzRUFBQTtBQW1EQTtFQUNRLHlCQTFDdUI7RUEyQ3ZCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLDBDQUF5QztFQUN6QyxXQUFXLEVBQUE7QUF4QmY7SUFrQko7TUFVWSxVQUFVLEVBQUEsRUEyRHJCO0FBakZHO0lBWUo7TUFjWSxVQUFVLEVBQUEsRUF1RHJCO0FBM0VHO0lBTUo7TUFrQlksVUFBVSxFQUFBLEVBbURyQjtBQXJFRDtJQXNCWSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBdkVTO0lBd0VULDhCQUF5QyxFQUFBO0FBekJyRDtJQTRCWSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0FBOUIvQjtJQW1DZ0IsMENBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixjQXpFQyxFQUFBO0FBb0NqQjtNQXdDb0IseUJBdkZDO01Bd0ZELGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7QUExQ2hDO0lBK0NZLHFCQUFxQjtJQUNyQixlQUFlLEVBQUE7QUFoRDNCO01BbURnQiwwQ0FBeUM7TUFDekMsY0F4RkM7TUF5RkQsZUFBZTtNQUNmLG9CQUFvQjtNQUNwQixXQUFXO01BQ1gsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixxQkFBcUIsRUFBQTtBQTFEckM7TUE2RGdCLGVBQWU7TUFDZixjQWpHSTtNQWtHSixpQkFBaUI7TUFDakIsV0FBVyxFQUFBO0FBTTNCO0VBRVEseUJBNUdTLEVBQUE7QUFnSGpCO0VBQ1Esa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtBQWhHZjtJQThGSjtNQUtZLFdBQVcsRUFBQSxFQWtDbEI7QUEvSEQ7SUF3Rko7TUFTWSxVQUFVO01BQ1YsYUFBYSxFQUFBLEVBNkJwQjtBQXpIRDtJQWtGSjtNQWNZLFVBQVUsRUFBQSxFQXlCakI7QUF2Q0w7SUFrQlksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQXBJSztJQXFJTCw4QkFBeUMsRUFBQTtBQXJCckQ7SUEyQmdCLDBDQUF5QztJQUN6QyxjQTVJQyxFQUFBO0FBZ0hqQjtNQThCb0IsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZiw2QkFBNkI7TUFDN0IsY0FqSkgsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJkYi91c2VyZGIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0gR2xvYmFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogQnJlYWtwb2ludHM6IHhzOiAwLCAgc206IDU3NnB4OyBtZDogNzY4cHg7IGxnOiA5OTJweDsgeGw6IDEyMDBweDsgKi9cclxuXHJcbiRjb2xvcnM6IChcclxuICAgIGJnOiAjYzBjMGMwLFxyXG4gICAgZmV2b3JpdGU6ICNlODQ5MWQsXHJcbiAgICBwcmltYXJ5OiAjMDA3YmZmLFxyXG4gICAgcHJpbWFyeS1saWdodDogbGlnaHRlbigjMDA1REZGLCA0MCUpLFxyXG4gICAgcHJpbWFyeS1kYXJrOiBkYXJrZW4oIzAwNURGRiwgNDAlKSxcclxuICAgIGFjY2VudDogI0ZGRjZCQixcclxuICAgIGdpcmxpc2g6IHJnYigxOTUsIDE1LCAyMDEpLFxyXG4gICAgZm9ybTogbGlnaHRlbigjMzU0MjRhLCAxMCUpLFxyXG4gICAgZ3JheTogIzZjNzU3ZCxcclxuICAgIGdyYXktZGFyazogIzM0M2E0MCxcclxuICAgIHNlY29uZGFyeTogIzZjNzU3ZCxcclxuICAgIHN1Y2Nlc3M6ICMyOGE3NDUsXHJcbiAgICBpbmZvOiAjMTdhMmI4LFxyXG4gICAgd2FybmluZzogI2ZmYzEwNyxcclxuICAgIGRhbmdlcjogI2RjMzU0NSxcclxuICAgIGxpZ2h0OiAjZjhmOWZhLFxyXG4gICAgZGFyazogIzM0M2E0MFxyXG5cclxuKTtcclxuXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSl7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycyAsICRjb2xvci1uYW1lKVxyXG59XHJcblxyXG4kZGVza3RvcF9sZzogOTkycHg7IFxyXG4kZGVza3RvcDogNzY4cHg7XHJcbiRkZXNrdG9wX3NtOiAzNjRweDtcclxuJG9wYWNpdHk6IC45O1xyXG5cclxuQG1peGluIGRlc2t0b3Bfc20ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3Bfc219KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wX2xnIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wX2xnfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBcclxufVxyXG5cclxuXHJcbmZvcm17XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZm9ybSk7XHJcbiAgICAgICAgcGFkZGluZzogMWVtIDJlbSAwIDJlbTtcclxuICAgICAgICBtYXJnaW46IDFlbSAwIDAgMDtcclxuICAgICAgICBoZWlnaHQ6IDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgICAgIHdpZHRoOiAyNWVtO1xyXG5cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcF9zbXtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTsgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9we1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlOyAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3BfbGd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogY29sb3IoZmV2b3JpdGUpO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMWVtIDAgMCAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZmV2b3JpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9se1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuXHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IoaW5mbyk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbSAwIDFlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3Iod2FybmluZyk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM2VtO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG59XHJcbiN0b3RhbHtcclxuICAgIHNwYW57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoaW5mbyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNjbGlQcm9maWxlX2Zvcm0sICNhZG1Qcm9maWxlX2Zvcm0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMjVlbTtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcF9zbXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3BfbGd7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVse1xyXG5cclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcihpbmZvKTtcclxuICAgICAgICAgICAgICAgIHNwYW57ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/admin/userdb/userdb.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/userdb/userdb.component.ts ***!
  \**************************************************/
/*! exports provided: UserdbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdbComponent", function() { return UserdbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stats.service */ "./src/app/services/stats.service.ts");
/* harmony import */ var src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notify.service */ "./src/app/services/notify.service.ts");




var UserdbComponent = /** @class */ (function () {
    function UserdbComponent(statsService, notifyService) {
        this.statsService = statsService;
        this.notifyService = notifyService;
        this.hideformclinician = true;
        this.hideformadmin = true;
    }
    UserdbComponent.prototype.ngOnInit = function () {
        var _this = this;
        // on reload
        this.statsService.onreloadUSER().subscribe(
        //do nothing
        );
        // User db
        this.statsService.userDb().subscribe(function (data) {
            _this.clinician = data.clinician;
            _this.clinicianprofiles = data.clinicianprofiles;
            _this.admin = data.admin;
            _this.adminprofiles = data.adminprofiles;
        }, function (error) { console.error("Error", error); });
    };
    // open Clinician Profile
    UserdbComponent.prototype.openclinicianprofile = function (id) {
        var _this = this;
        var userNo = { userNo: id };
        this.statsService.openuserclinician(userNo).subscribe(function (data) {
            _this.name = data[0].name;
            _this.userNo = data[0].userNo;
            _this.nationalId = data[0].nationalId;
            _this.gender = data[0].gender;
            _this.phone = data[0].phone;
            _this.specialize = data[0].specialize;
            _this.profNo = data[0].profNo;
            _this.mail = data[0].mail;
            _this.hideformclinician = false;
            _this.hideformadmin = true;
        }, function (error) { console.error("Error", error); });
    };
    ;
    // open file
    UserdbComponent.prototype.openadminprofile = function (id) {
        var _this = this;
        var userNo = { userNo: id };
        this.statsService.openuseradmin(userNo).subscribe(function (data) {
            _this.name = data[0].name;
            _this.userNo = data[0].userNo;
            _this.nationalId = data[0].nationalId;
            _this.gender = data[0].gender;
            _this.phone = data[0].phone;
            _this.department = data[0].department;
            _this.officeNo = data[0].officeNo;
            _this.mail = data[0].mail;
            _this.hideformclinician = true;
            _this.hideformadmin = false;
        }, function (error) { console.error("Error", error); });
    };
    ;
    // delete clinician
    UserdbComponent.prototype.deleteUSERCLI = function () {
        var _this = this;
        this.statsService.deleteUSERCLI().subscribe(function (data) {
            _this.notifyService.showSuccess("User deleted!", "Success");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.error("Error", error); });
    };
    ;
    // delete Admin
    UserdbComponent.prototype.deleteUSERADM = function () {
        var _this = this;
        this.statsService.deleteUSERADM().subscribe(function (data) {
            _this.notifyService.showSuccess("User deleted!", "Success");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.error("Error", error); });
    };
    ;
    UserdbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userdb',
            template: __webpack_require__(/*! ./userdb.component.html */ "./src/app/admin/userdb/userdb.component.html"),
            styles: [__webpack_require__(/*! ./userdb.component.scss */ "./src/app/admin/userdb/userdb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"],
            src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], UserdbComponent);
    return UserdbComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _clinician_clinician_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clinician/clinician.component */ "./src/app/clinician/clinician.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _clinician_chome_chome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clinician/chome/chome.component */ "./src/app/clinician/chome/chome.component.ts");
/* harmony import */ var _clinician_admission_admission_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clinician/admission/admission.component */ "./src/app/clinician/admission/admission.component.ts");
/* harmony import */ var _clinician_examination_examination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clinician/examination/examination.component */ "./src/app/clinician/examination/examination.component.ts");
/* harmony import */ var _clinician_laboratory_laboratory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clinician/laboratory/laboratory.component */ "./src/app/clinician/laboratory/laboratory.component.ts");
/* harmony import */ var _clinician_xray_xray_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clinician/xray/xray.component */ "./src/app/clinician/xray/xray.component.ts");
/* harmony import */ var _clinician_pharmacy_pharmacy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clinician/pharmacy/pharmacy.component */ "./src/app/clinician/pharmacy/pharmacy.component.ts");
/* harmony import */ var _admin_ahome_ahome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/ahome/ahome.component */ "./src/app/admin/ahome/ahome.component.ts");
/* harmony import */ var _admin_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/monitor/monitor.component */ "./src/app/admin/monitor/monitor.component.ts");
/* harmony import */ var _admin_filedb_filedb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/filedb/filedb.component */ "./src/app/admin/filedb/filedb.component.ts");
/* harmony import */ var _admin_userdb_userdb_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/userdb/userdb.component */ "./src/app/admin/userdb/userdb.component.ts");
/* harmony import */ var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/register/register.component */ "./src/app/admin/register/register.component.ts");
/* harmony import */ var _auth_clinician_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/clinician.guard */ "./src/app/auth/clinician.guard.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/admin.guard */ "./src/app/auth/admin.guard.ts");



















var routes = [
    /*--------- Login Route ------------*/
    { path: "kimsapp", redirectTo: "kimsapp/login", pathMatch: "full" },
    { path: "", redirectTo: "kimsapp/login", pathMatch: "full" },
    { path: "kimsapp/login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    /*================ Clinical Component ============*/
    /*--------------- Home Clinician ---------------*/
    { path: "kimsapp/clinician", component: _clinician_clinician_component__WEBPACK_IMPORTED_MODULE_4__["ClinicianComponent"], canActivate: [_auth_clinician_guard__WEBPACK_IMPORTED_MODULE_17__["ClinicianGuard"]],
        children: [{ path: "", component: _clinician_chome_chome_component__WEBPACK_IMPORTED_MODULE_6__["ChomeComponent"] }]
    },
    /*--------------- Admission ---------------*/
    { path: "kimsapp/clinician/admission", component: _clinician_clinician_component__WEBPACK_IMPORTED_MODULE_4__["ClinicianComponent"], canActivate: [_auth_clinician_guard__WEBPACK_IMPORTED_MODULE_17__["ClinicianGuard"]],
        children: [{ path: "", component: _clinician_admission_admission_component__WEBPACK_IMPORTED_MODULE_7__["AdmissionComponent"] }]
    },
    /*--------------- Examination ---------------*/
    { path: "kimsapp/clinician/examination", component: _clinician_clinician_component__WEBPACK_IMPORTED_MODULE_4__["ClinicianComponent"], canActivate: [_auth_clinician_guard__WEBPACK_IMPORTED_MODULE_17__["ClinicianGuard"]],
        children: [{ path: "", component: _clinician_examination_examination_component__WEBPACK_IMPORTED_MODULE_8__["ExaminationComponent"] }]
    },
    /*--------------- Laboratory ---------------*/
    { path: "kimsapp/clinician/lab", component: _clinician_clinician_component__WEBPACK_IMPORTED_MODULE_4__["ClinicianComponent"], canActivate: [_auth_clinician_guard__WEBPACK_IMPORTED_MODULE_17__["ClinicianGuard"]],
        children: [{ path: "", component: _clinician_laboratory_laboratory_component__WEBPACK_IMPORTED_MODULE_9__["LaboratoryComponent"] }]
    },
    /*--------------- Xray ---------------*/
    { path: "kimsapp/clinician/xray", component: _clinician_clinician_component__WEBPACK_IMPORTED_MODULE_4__["ClinicianComponent"], canActivate: [_auth_clinician_guard__WEBPACK_IMPORTED_MODULE_17__["ClinicianGuard"]],
        children: [{ path: "", component: _clinician_xray_xray_component__WEBPACK_IMPORTED_MODULE_10__["XrayComponent"] }]
    },
    /*--------------- Pharmacy ---------------*/
    { path: "kimsapp/clinician/pharmacy", component: _clinician_clinician_component__WEBPACK_IMPORTED_MODULE_4__["ClinicianComponent"], canActivate: [_auth_clinician_guard__WEBPACK_IMPORTED_MODULE_17__["ClinicianGuard"]],
        children: [{ path: "", component: _clinician_pharmacy_pharmacy_component__WEBPACK_IMPORTED_MODULE_11__["PharmacyComponent"] }]
    },
    /*=========== Admin Component ==============*/
    /*------------ Home ---------------------------*/
    { path: "kimsapp/admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"]],
        children: [{ path: "", component: _admin_ahome_ahome_component__WEBPACK_IMPORTED_MODULE_12__["AhomeComponent"] }]
    },
    { path: "kimsapp/admin/monitor", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"]],
        children: [{ path: "", component: _admin_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_13__["MonitorComponent"] }]
    },
    { path: "kimsapp/admin/medicalDb", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"]],
        children: [{ path: "", component: _admin_filedb_filedb_component__WEBPACK_IMPORTED_MODULE_14__["FiledbComponent"] }]
    },
    { path: "kimsapp/admin/userDb", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"]],
        children: [{ path: "", component: _admin_userdb_userdb_component__WEBPACK_IMPORTED_MODULE_15__["UserdbComponent"] }]
    },
    { path: "kimsapp/admin/register", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"]],
        children: [{ path: "", component: _admin_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"] }]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _clinician_clinician_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clinician/clinician.component */ "./src/app/clinician/clinician.component.ts");
/* harmony import */ var _clinician_chome_chome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clinician/chome/chome.component */ "./src/app/clinician/chome/chome.component.ts");
/* harmony import */ var _clinician_admission_admission_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clinician/admission/admission.component */ "./src/app/clinician/admission/admission.component.ts");
/* harmony import */ var _clinician_examination_examination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clinician/examination/examination.component */ "./src/app/clinician/examination/examination.component.ts");
/* harmony import */ var _clinician_xray_xray_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clinician/xray/xray.component */ "./src/app/clinician/xray/xray.component.ts");
/* harmony import */ var _clinician_laboratory_laboratory_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clinician/laboratory/laboratory.component */ "./src/app/clinician/laboratory/laboratory.component.ts");
/* harmony import */ var _clinician_pharmacy_pharmacy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clinician/pharmacy/pharmacy.component */ "./src/app/clinician/pharmacy/pharmacy.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_ahome_ahome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/ahome/ahome.component */ "./src/app/admin/ahome/ahome.component.ts");
/* harmony import */ var _admin_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/monitor/monitor.component */ "./src/app/admin/monitor/monitor.component.ts");
/* harmony import */ var _admin_filedb_filedb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/filedb/filedb.component */ "./src/app/admin/filedb/filedb.component.ts");
/* harmony import */ var _admin_userdb_userdb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/userdb/userdb.component */ "./src/app/admin/userdb/userdb.component.ts");
/* harmony import */ var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/register/register.component */ "./src/app/admin/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_clinician_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/clinician.guard */ "./src/app/auth/clinician.guard.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/admin.guard */ "./src/app/auth/admin.guard.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_files_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/files.service */ "./src/app/services/files.service.ts");
/* harmony import */ var _services_stats_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/stats.service */ "./src/app/services/stats.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/notify.service */ "./src/app/services/notify.service.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _clinician_clinician_component__WEBPACK_IMPORTED_MODULE_7__["ClinicianComponent"],
                _clinician_chome_chome_component__WEBPACK_IMPORTED_MODULE_8__["ChomeComponent"],
                _clinician_admission_admission_component__WEBPACK_IMPORTED_MODULE_9__["AdmissionComponent"],
                _clinician_examination_examination_component__WEBPACK_IMPORTED_MODULE_10__["ExaminationComponent"],
                _clinician_xray_xray_component__WEBPACK_IMPORTED_MODULE_11__["XrayComponent"],
                _clinician_laboratory_laboratory_component__WEBPACK_IMPORTED_MODULE_12__["LaboratoryComponent"],
                _clinician_pharmacy_pharmacy_component__WEBPACK_IMPORTED_MODULE_13__["PharmacyComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
                _admin_ahome_ahome_component__WEBPACK_IMPORTED_MODULE_15__["AhomeComponent"],
                _admin_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_16__["MonitorComponent"],
                _admin_filedb_filedb_component__WEBPACK_IMPORTED_MODULE_17__["FiledbComponent"],
                _admin_userdb_userdb_component__WEBPACK_IMPORTED_MODULE_18__["UserdbComponent"],
                _admin_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot({
                    timeOut: 7000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: false,
                })
            ],
            providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_26__["UsersService"], _services_files_service__WEBPACK_IMPORTED_MODULE_27__["FilesService"], _services_stats_service__WEBPACK_IMPORTED_MODULE_28__["StatsService"], _services_notify_service__WEBPACK_IMPORTED_MODULE_29__["NotifyService"], _auth_clinician_guard__WEBPACK_IMPORTED_MODULE_24__["ClinicianGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AdminGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/admin.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/admin.guard.ts ***!
  \*************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminGuard = /** @class */ (function () {
    function AdminGuard(router) {
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (window.localStorage.getItem("adminToken") != null)
            return true;
        this.router.navigate(["/kimsapp/login"]);
        return false;
    };
    AdminGuard.prototype.canActivateChild = function (next, state) {
        return true;
    };
    AdminGuard.prototype.canLoad = function (route, segments) {
        return true;
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/clinician.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/clinician.guard.ts ***!
  \*****************************************/
/*! exports provided: ClinicianGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicianGuard", function() { return ClinicianGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ClinicianGuard = /** @class */ (function () {
    function ClinicianGuard(router) {
        this.router = router;
    }
    ClinicianGuard.prototype.canActivate = function (next, state) {
        if (window.localStorage.getItem("clinicianToken") != null)
            return true;
        this.router.navigate(["/kimsapp/login"]);
        return false;
    };
    ClinicianGuard.prototype.canActivateChild = function (next, state) {
        return true;
    };
    ClinicianGuard.prototype.canLoad = function (route, segments) {
        return true;
    };
    ClinicianGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ClinicianGuard);
    return ClinicianGuard;
}());



/***/ }),

/***/ "./src/app/clinician/admission/admission.component.html":
/*!**************************************************************!*\
  !*** ./src/app/clinician/admission/admission.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <form id=\"admission_form\" class=\"col-sm-12 col-md-6 mx-auto rounded \"\n    #admissionForm=\"ngForm\"\n    (ngSubmit)=\"onSubmit()\"\n    >\n\n        <h1>Admission</h1>\n        \n        \n        <label >FirstName</label><br>\n\n        <input id=\"admFormFirstname\" type=\"text\" class=\"form-control form-control-sm rounded\" name=\"firstName\"\n        #firstName=\"ngModel\"\n        [class.is-invalid]=\"firstName.invalid && firstName.touched\" \n        [(ngModel)]=\"admit.firstName\"\n        placeholder=\"Firstname\" required>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"firstName.valid || firstName.untouched\">FirstName is Required</small>\n        <br><br>\n\n\n        <label>LastName</label><br>\n\n        <input id=\"admFormLastname\" type=\"text\" class=\"form-control form-control-sm  rounded\" name=\"lastName\"\n        #lastName=\"ngModel\"\n        [class.is-invalid]=\"lastName.invalid && lastName.touched\" \n        [(ngModel)]=\"admit.lastName\"\n        placeholder=\"Lastname\" required>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"lastName.valid || lastName.untouched\">LastName is Required</small> \n        <br><br>\n\n\n        <label>Age</label><br>\n\n        <input id=\"admFormAge\" type=\"text\" class=\"form-control form-control-sm rounded\" name=\"age\"\n        #age=\"ngModel\" [class.is-invalid]=\"age.invalid && age.touched\" \n        [(ngModel)]=\"admit.age\"\n        placeholder=\"Age\" required>\n        <small class=\"text-danger ml-2\" [class.d-none]=\"age.valid || age.untouched\">Age is Required</small> \n        <br><br>\n\n\n        <label class=\"mt-2\">Gender</label> <br>\n\n        <label>Male</label>\n        <input id=\"admFormMale\" type=\"radio\" name=\"gender\" value=\"male\"\n        [(ngModel)]=\"admit.gender\"\n        required> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;\n        \n        <label>Female</label>\n        <input id=\"admFormFemale\" type=\"radio\" name=\"gender\" value=\"female\"\n        [(ngModel)]=\"admit.gender\"\n        required> <br>\n        \n        \n        <button id=\"admit_btn\" type=\"submit\" class=\"btn btn-success m-3\" [disabled]=\"!admissionForm.valid\" > Admit </button>\n      \n\n    </form>\n\n\n</div>"

/***/ }),

/***/ "./src/app/clinician/admission/admission.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/clinician/admission/admission.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\nform {\n  background-color: #4a5d68;\n  padding: 1em 2em 0 2em;\n  margin: 1em 0 0 0;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\nform h1 {\n    font-size: 20px;\n    font-weight: bold;\n    color: #e8491d;\n    text-shadow: 5px 5px 3px black; }\nform input {\n    border: none;\n    color: black;\n    background-color: #97a9b4; }\nform small {\n    font-size: 12px; }\nform input[type=text], form input[type=email], form input[type=tel], form input[type=password] {\n    width: 15em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2FkbWlzc2lvbi9DOlxcVGhlQ29kZVxcbWVhbkFwcFxca2ltc2FwcC9zcmNcXGFwcFxcY2xpbmljaWFuXFxhZG1pc3Npb25cXGFkbWlzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBQTtBQUNBLHNFQUFBO0FBK0NBO0VBQ0kseUJBckMyQjtFQXNDM0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiwwQ0FBeUMsRUFBQTtBQUo3QztJQU9RLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FwRGE7SUFxRGIsOEJBQXlDLEVBQUE7QUFWakQ7SUFlUSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQXBEd0IsRUFBQTtBQW1DaEM7SUFvQlEsZUFBZSxFQUFBO0FBcEJ2QjtJQXdCUSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNpYW4vYWRtaXNzaW9uL2FkbWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBHbG9iYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiBCcmVha3BvaW50czogeHM6IDAsICBzbTogNTc2cHg7IG1kOiA3NjhweDsgbGc6IDk5MnB4OyB4bDogMTIwMHB4OyAqL1xyXG5cclxuJGNvbG9yczogKFxyXG4gICAgYmc6ICNjMGMwYzAsXHJcbiAgICBmZXZvcml0ZTogI2U4NDkxZCxcclxuICAgIHRoZW1lOiAjMzU0MjRhLFxyXG4gICAgcHJpbWFyeTogIzAwN2JmZixcclxuICAgIHByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oIzAwNURGRiwgNDAlKSxcclxuICAgIHByaW1hcnktZGFyazogZGFya2VuKCMwMDVERkYsIDQwJSksXHJcbiAgICBhY2NlbnQ6ICNGRkY2QkIsXHJcbiAgICBnaXJsaXNoOiByZ2IoMTk1LCAxNSwgMjAxKSxcclxuICAgIGZvcm06IGxpZ2h0ZW4oIzM1NDI0YSwgMTAlKSxcclxuICAgIGlucHV0OiBsaWdodGVuKCMzNTQyNGEsIDQwJSksXHJcbiAgICBncmF5OiAjNmM3NTdkLFxyXG4gICAgZ3JheS1kYXJrOiAjMzQzYTQwLFxyXG4gICAgc2Vjb25kYXJ5OiAjNmM3NTdkLFxyXG4gICAgc3VjY2VzczogIzI4YTc0NSxcclxuICAgIGluZm86ICMxN2EyYjgsXHJcbiAgICB3YXJuaW5nOiAjZmZjMTA3LFxyXG4gICAgZGFuZ2VyOiAjZGMzNTQ1LFxyXG4gICAgbGlnaHQ6ICNmOGY5ZmEsXHJcbiAgICBkYXJrOiAjMzQzYTQwXHJcblxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKXtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzICwgJGNvbG9yLW5hbWUpXHJcbn1cclxuXHJcblxyXG4kZGVza3RvcDogNzY4cHg7XHJcbiRkZXNrdG9wX3NtOiAzNjRweDtcclxuJG9wYWNpdHk6IC45O1xyXG5cclxuQG1peGluIGRlc2t0b3Bfc20ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3Bfc219KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5mb3Jte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZm9ybSk7XHJcbiAgICBwYWRkaW5nOiAxZW0gMmVtIDAgMmVtO1xyXG4gICAgbWFyZ2luOiAxZW0gMCAwIDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuXHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGNvbG9yKGZldm9yaXRlKTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoaW5wdXQpO1xyXG4gICAgfVxyXG4gICAgc21hbGx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXXtcclxuICAgICAgICB3aWR0aDogMTVlbTtcclxuICAgIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/clinician/admission/admission.component.ts":
/*!************************************************************!*\
  !*** ./src/app/clinician/admission/admission.component.ts ***!
  \************************************************************/
/*! exports provided: AdmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionComponent", function() { return AdmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/files.service */ "./src/app/services/files.service.ts");
/* harmony import */ var src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notify.service */ "./src/app/services/notify.service.ts");




var AdmissionComponent = /** @class */ (function () {
    function AdmissionComponent(filesService, notifyService) {
        this.filesService = filesService;
        this.notifyService = notifyService;
    }
    AdmissionComponent.prototype.ngOnInit = function () {
        this.admit = {
            firstName: "",
            lastName: "",
            age: "",
            gender: ""
        };
    };
    AdmissionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.filesService.admitPatient(this.admit).subscribe(function (data) {
            console.log("Admission Success!");
            _this.notifyService.showSuccess("Patient Admitted", "Successfull !!");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.error("Error", error); });
    };
    ;
    AdmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admission',
            template: __webpack_require__(/*! ./admission.component.html */ "./src/app/clinician/admission/admission.component.html"),
            styles: [__webpack_require__(/*! ./admission.component.scss */ "./src/app/clinician/admission/admission.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"],
            src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], AdmissionComponent);
    return AdmissionComponent;
}());



/***/ }),

/***/ "./src/app/clinician/chome/chome.component.html":
/*!******************************************************!*\
  !*** ./src/app/clinician/chome/chome.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n        <form id=\"home_form\" class=\"form mx-auto rounded \">\n    \n            <h1>Home Page</h1>\n            <h4>Choose Section</h4>\n\n            <ul>\n                <li><a href=\"/kimsapp/clinician/admission\">Admission</a></li>\n                <li><a href=\"/kimsapp/clinician/examination\">Examination</a></li>\n                <li><a href=\"/kimsapp/clinician/lab\">Laboratory</a></li>\n                <li><a href=\"/kimsapp/clinician/xray\">Xray</a></li>\n                <li><a href=\"/kimsapp/clinician/pharmacy\">Pharmacy</a></li>\n            </ul>\n    \n        </form>\n    \n    </div>"

/***/ }),

/***/ "./src/app/clinician/chome/chome.component.scss":
/*!******************************************************!*\
  !*** ./src/app/clinician/chome/chome.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\nform {\n  background-color: #4a5d68;\n  padding: 1em 2em 1em 2em;\n  margin: 1em 0 0 0;\n  width: 90%;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\n@media (min-width: 768px) {\n    form {\n      width: 30%; } }\nform h1 {\n    font-size: 20px;\n    font-weight: bold;\n    color: #e8491d;\n    text-shadow: 5px 5px 3px black; }\nform h4 {\n    font-size: 18px;\n    font-weight: bold; }\nform ul {\n    list-style-type: none; }\nform ul li {\n      margin: 2em 0 1em 0; }\nform ul li a {\n        color: #17a2b8;\n        font-size: 16px;\n        font-weight: bold; }\nform ul li a:hover {\n        cursor: pointer;\n        font-weight: bolder;\n        font-size: 18px;\n        color: #ffc107; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2Nob21lL0M6XFxUaGVDb2RlXFxtZWFuQXBwXFxraW1zYXBwL3NyY1xcYXBwXFxjbGluaWNpYW5cXGNob21lXFxjaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBQTtBQUNBLHNFQUFBO0FBNkNBO0VBQ0kseUJBcEMyQjtFQXFDM0Isd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsMENBQXlDLEVBQUE7QUFYekM7SUFNSjtNQVFRLFVBQVUsRUFBQSxFQWdDakI7QUF4Q0Q7SUFZUSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBdkRhO0lBd0RiLDhCQUF5QyxFQUFBO0FBZmpEO0lBa0JRLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtBQW5CekI7SUFzQlEscUJBQXFCLEVBQUE7QUF0QjdCO01Bd0JZLG1CQUFtQixFQUFBO0FBeEIvQjtRQTBCZ0IsY0F2REM7UUF3REQsZUFBZTtRQUNmLGlCQUFpQixFQUFBO0FBNUJqQztRQWdDZ0IsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsY0EvREksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NsaW5pY2lhbi9jaG9tZS9jaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBHbG9iYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiBCcmVha3BvaW50czogeHM6IDAsICBzbTogNTc2cHg7IG1kOiA3NjhweDsgbGc6IDk5MnB4OyB4bDogMTIwMHB4OyAqL1xyXG5cclxuJGNvbG9yczogKFxyXG4gICAgYmc6ICNjMGMwYzAsXHJcbiAgICBmZXZvcml0ZTogI2U4NDkxZCxcclxuICAgIHByaW1hcnk6ICMwMDdiZmYsXHJcbiAgICBwcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCMwMDVERkYsIDQwJSksXHJcbiAgICBwcmltYXJ5LWRhcms6IGRhcmtlbigjMDA1REZGLCA0MCUpLFxyXG4gICAgYWNjZW50OiAjRkZGNkJCLFxyXG4gICAgZ2lybGlzaDogcmdiKDE5NSwgMTUsIDIwMSksXHJcbiAgICBmb3JtOiBsaWdodGVuKCMzNTQyNGEsIDEwJSksXHJcbiAgICBpbnB1dDogbGlnaHRlbihncmV5LCA1MCUpLFxyXG4gICAgZ3JheTogIzZjNzU3ZCxcclxuICAgIGdyYXktZGFyazogIzM0M2E0MCxcclxuICAgIHNlY29uZGFyeTogIzZjNzU3ZCxcclxuICAgIHN1Y2Nlc3M6ICMyOGE3NDUsXHJcbiAgICBpbmZvOiAjMTdhMmI4LFxyXG4gICAgd2FybmluZzogI2ZmYzEwNyxcclxuICAgIGRhbmdlcjogI2RjMzU0NSxcclxuICAgIGxpZ2h0OiAjZjhmOWZhLFxyXG4gICAgZGFyazogIzM0M2E0MFxyXG5cclxuKTtcclxuXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSl7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycyAsICRjb2xvci1uYW1lKVxyXG59XHJcblxyXG4kZGVza3RvcDogNzY4cHg7XHJcbiRkZXNrdG9wX3NtOiAzNjRweDtcclxuJG9wYWNpdHk6IC45O1xyXG5cclxuQG1peGluIGRlc2t0b3Bfc20ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3Bfc219KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5mb3Jte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZm9ybSk7XHJcbiAgICBwYWRkaW5nOiAxZW0gMmVtIDFlbSAyZW07XHJcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuXHJcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogY29sb3IoZmV2b3JpdGUpO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBtYXJnaW46IDJlbSAwIDFlbSAwO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKHdhcm5pbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/clinician/chome/chome.component.ts":
/*!****************************************************!*\
  !*** ./src/app/clinician/chome/chome.component.ts ***!
  \****************************************************/
/*! exports provided: ChomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChomeComponent", function() { return ChomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChomeComponent = /** @class */ (function () {
    function ChomeComponent() {
    }
    ChomeComponent.prototype.ngOnInit = function () {
    };
    ChomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chome',
            template: __webpack_require__(/*! ./chome.component.html */ "./src/app/clinician/chome/chome.component.html"),
            styles: [__webpack_require__(/*! ./chome.component.scss */ "./src/app/clinician/chome/chome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChomeComponent);
    return ChomeComponent;
}());



/***/ }),

/***/ "./src/app/clinician/clinician.component.html":
/*!****************************************************!*\
  !*** ./src/app/clinician/clinician.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<header class=\"sticky-top\">\n\n <div class=\"container\">\n    \n  <nav id=\"navbar\" class=\"navbar navbar-expand-sm navbar-light\">\n\n        <div class=\"navbar col-6 mr-auto\">\n                        <h4 id=\"brand\" class=\"navbar mr-auto\">The<span>Kims</span>Web &nbsp; &nbsp;<fa name=\"stethoscope\" size=\"lg\" class=\"mx-auto\"></fa></h4>\n                        \n                        <h4 id=\"site\" class=\"navbar ml-auto\">Clinical Site</h4>\n                      \n        </div>\n                                \n    \n    \n\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#menu\">\n            <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse \" id=\"menu\">\n        \n            <ul id=\"navbar-nav\" class=\"nav ml-auto\">\n\n                    <li class=\"nav-item\"><a (click)=\"home()\" class=\"nav-link\">Home</a></li>\n                    <li id=\"dropdown\" class=\"nav-item dropdown\">\n                        \n                        <a class=\"nav-link \" data-toggle=\"dropdown\">\n                            <fa name=\"user\" size=\"lg\"></fa>\n                            \n                        </a>\n                        \n                        <div class=\"dropdown-menu\">\n                            <small id=\"user\" class=\"dropdown-item\">{{clinicianUser}}</small>\n                            <hr>\n                            <a id=\"logout\" href=\"/kimsapp/login\" (click)=\"logOut()\" class=\"dropdown-item\">LogOut</a>\n\n                        </div>\n\n                        \n                    </li>\n                                    \n\n            </ul>\n\n    </div>\n\n</nav>\n\n\n\n\n\n\n\n </div>\n\n</header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/clinician/clinician.component.scss":
/*!****************************************************!*\
  !*** ./src/app/clinician/clinician.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\n/*-----------------------------------------------------*/\n.container-fluid, .container {\n  width: 100%; }\nheader {\n  background-color: #35424a;\n  text-align: center;\n  padding: 3px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n  border-bottom: #e8491d 3px solid; }\nheader #brand {\n    font-family: Montserrat;\n    font-size: 16px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #17a2b8;\n    text-shadow: 5px 5px 3px black; }\nheader #brand span {\n      font-size: 24px;\n      color: #e8491d;\n      text-shadow: 5px 5px 3px black; }\nheader #brand fa {\n      margin-left: 2em;\n      color: #e8491d; }\nheader #site {\n    font-size: 16px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #17a2b8;\n    text-shadow: 5px 5px 3px black; }\nheader .navbar {\n    margin: 0;\n    padding: 0; }\nheader .navbar .nav li a {\n      cursor: pointer;\n      color: #17a2b8;\n      font-weight: bolder;\n      text-transform: uppercase;\n      text-shadow: 5px 5px 3px black; }\nheader .navbar .nav li a:hover {\n      font-weight: bolder; }\nheader .navbar .nav #dropdown a {\n      color: #e8491d;\n      cursor: pointer;\n      text-shadow: 5px 5px 3px black; }\nheader .navbar .nav #dropdown .dropdown-menu:hover, header .navbar .nav #dropdown a:hover + .dropdown-menu {\n      display: block; }\nheader .navbar .nav #dropdown .dropdown-menu {\n      background-color: #e8491d;\n      top: 4.5em;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      display: none; }\nheader .navbar .nav #dropdown .dropdown-menu #user {\n        cursor: default;\n        color: black;\n        font-size: 16px;\n        font-weight: bolder;\n        text-transform: capitalize;\n        text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3); }\nheader .navbar .nav #dropdown .dropdown-menu #user:hover {\n        background-color: #e8491d; }\nheader .navbar .nav #dropdown .dropdown-menu hr {\n        margin: 0; }\nheader .navbar .nav #dropdown .dropdown-menu #logout {\n        color: #6c757d;\n        text-transform: lowercase;\n        text-transform: capitalize;\n        text-align: center;\n        font-weight: bolder;\n        font-size: 14px;\n        text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.1); }\nheader .navbar .nav #dropdown .dropdown-menu #logout:hover {\n        cursor: pointer;\n        background-color: #35424a;\n        color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL0M6XFxUaGVDb2RlXFxtZWFuQXBwXFxraW1zYXBwL3NyY1xcYXBwXFxjbGluaWNpYW5cXGNsaW5pY2lhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBQTtBQUNBLHNFQUFBO0FBd0NJLHdEQUFBO0FBQ0E7RUFDSSxXQUFXLEVBQUE7QUFJZjtFQUNJLHlCQTFDVTtFQTJDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxnQ0FBd0MsRUFBQTtBQUw1QztJQVVRLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQTFDSztJQTJDTCw4QkFBeUMsRUFBQTtBQWZqRDtNQWtCWSxlQUFlO01BQ2YsY0E3REs7TUE4REwsOEJBQXlDLEVBQUE7QUFwQnJEO01Bd0JZLGdCQUFnQjtNQUNoQixjQW5FSyxFQUFBO0FBMENqQjtJQWdDUSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQS9ESztJQWdFTCw4QkFBeUMsRUFBQTtBQXBDakQ7SUEwQ1EsU0FBUztJQUNULFVBQVUsRUFBQTtBQTNDbEI7TUFrRG9CLGVBQWU7TUFDZixjQS9FUDtNQWdGTyxtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLDhCQUF5QyxFQUFBO0FBdEQ3RDtNQXlEb0IsbUJBQW1CLEVBQUE7QUF6RHZDO01BK0R3QixjQXpHUDtNQTBHTyxlQUFlO01BQ2YsOEJBQXlDLEVBQUE7QUFqRWpFO01Bb0V3QixjQUFjLEVBQUE7QUFwRXRDO01BeUVvQix5QkFuSEg7TUFvSEcsVUFBVTtNQUNWLHdDQUFnQztjQUFoQyxnQ0FBZ0M7TUFDaEMsYUFBYSxFQUFBO0FBNUVqQztRQStFd0IsZUFBZTtRQUNmLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQiwyQ0FBMEMsRUFBQTtBQXBGbEU7UUF1RndCLHlCQWpJUCxFQUFBO0FBMENqQjtRQTBGd0IsU0FBUyxFQUFBO0FBMUZqQztRQTZGd0IsY0EzSE47UUE0SE0seUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZiwyQ0FBMEMsRUFBQTtBQW5HbEU7UUFzR3dCLGVBQWU7UUFDZix5QkFoSlY7UUFpSlUsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2xpbmljaWFuL2NsaW5pY2lhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBHbG9iYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiBCcmVha3BvaW50czogeHM6IDAsICBzbTogNTc2cHg7IG1kOiA3NjhweDsgbGc6IDk5MnB4OyB4bDogMTIwMHB4OyAqL1xyXG5cclxuJGNvbG9yczogKFxyXG4gICAgYmc6IHJnYigyMzEsIDc4LCAzMSksXHJcbiAgICBmZXZvcml0ZTogI2U4NDkxZCxcclxuICAgIHRoZW1lOiAjMzU0MjRhLFxyXG4gICAgcHJpbWFyeTogIzAwN2JmZixcclxuICAgIHByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oIzAwNURGRiwgNDAlKSxcclxuICAgIHByaW1hcnktZGFyazogZGFya2VuKCMwMDVERkYsIDQwJSksXHJcbiAgICBhY2NlbnQ6ICNGRkY2QkIsXHJcbiAgICBnaXJsaXNoOiByZ2IoMTk1LCAxNSwgMjAxKSxcclxuICAgIGNsaW5pYzogIGxpZ2h0ZW4oIzM1NDI0YSwgNDAlKSxcclxuICAgIGFkbWluOiByZ2IoMzksIDk3LCA5NyksXHJcbiAgICBpbnB1dDogbGlnaHRlbihncmV5LCA1MCUpLFxyXG4gICAgZ3JheTogIzZjNzU3ZCxcclxuICAgIGdyYXktZGFyazogIzM0M2E0MCxcclxuICAgIHNlY29uZGFyeTogIzZjNzU3ZCxcclxuICAgIHN1Y2Nlc3M6ICMyOGE3NDUsXHJcbiAgICBpbmZvOiAjMTdhMmI4LFxyXG4gICAgd2FybmluZzogI2ZmYzEwNyxcclxuICAgIGRhbmdlcjogI2RjMzU0NSxcclxuICAgIGxpZ2h0OiAjZjhmOWZhLFxyXG4gICAgZGFyazogIzM0M2E0MFxyXG5cclxuKTtcclxuXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSl7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycyAsICRjb2xvci1uYW1lKVxyXG59XHJcblxyXG4kZGVza3RvcDogNzY4cHg7XHJcbiRvcGFjaXR5OiAuOTtcclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBcclxufVxyXG5cclxuXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIC5jb250YWluZXItZmx1aWQsIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IodGhlbWUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IGNvbG9yKGZldm9yaXRlKSAzcHggc29saWQ7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAjYnJhbmR7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogY29sb3IoaW5mbyk7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGZldm9yaXRlKTtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmYXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IoZmV2b3JpdGUpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICNzaXRle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogY29sb3IoaW5mbyk7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAubmF2e1xyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IoaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjZHJvcGRvd257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IoZmV2b3JpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnU6aG92ZXIsIGE6aG92ZXIgKyAuZHJvcGRvd24tbWVudXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZmV2b3JpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjdXNlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjdXNlcjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGZldm9yaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbG9nb3V0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKHNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNsb2dvdXQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcih0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/clinician/clinician.component.ts":
/*!**************************************************!*\
  !*** ./src/app/clinician/clinician.component.ts ***!
  \**************************************************/
/*! exports provided: ClinicianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicianComponent", function() { return ClinicianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ClinicianComponent = /** @class */ (function () {
    function ClinicianComponent(router) {
        this.router = router;
    }
    ClinicianComponent.prototype.ngOnInit = function () {
        this.clinicianUser = localStorage.getItem("clinicianUser");
    };
    ClinicianComponent.prototype.home = function () {
        this.router.navigate(["/kimsapp/clinician"]);
    };
    ClinicianComponent.prototype.logOut = function () {
        window.localStorage.removeItem("clinicianToken");
        window.localStorage.removeItem("clinicianUser");
    };
    ClinicianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clinician',
            template: __webpack_require__(/*! ./clinician.component.html */ "./src/app/clinician/clinician.component.html"),
            styles: [__webpack_require__(/*! ./clinician.component.scss */ "./src/app/clinician/clinician.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ClinicianComponent);
    return ClinicianComponent;
}());



/***/ }),

/***/ "./src/app/clinician/examination/examination.component.html":
/*!******************************************************************!*\
  !*** ./src/app/clinician/examination/examination.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\n        \n    <form id=\"adm_exam_form\" class=\"form mr-auto rounded   \">\n\n        <h4><strong>Patients from Admission</strong></h4>\n        <hr>\n        \n        <ol >\n\n            <li *ngFor=\"let admittedPatient of admittedPatients\" (click)=\"openAdmFile(admittedPatient.patientNo)\">\n                \n                {{admittedPatient.firstName}} {{admittedPatient.lastName}} : {{admittedPatient.patientNo}}\n\n            </li>\n            \n        </ol>\n        \n            \n\n    </form>\n    <!-- Examination Form 1 -->\n    <form id=\"examination_form1\" class=\"form mx-auto  rounded\" [hidden]=\"hideFormONE\">\n\n            <h1><strong>Examination Form</strong></h1>\n            \n            <hr>\n           \n            <label id=\"h_name\">Name: <strong id=\"name\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.name }}</strong></label> <br>\n\n            <label id=\"h_patientNo\">PatientNo: <strong id=\"patientNo\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.patientNo }}</strong></label>\n\n            &nbsp;&nbsp;&nbsp;\n            <label id=\"h_age\">Age: <strong id=\"age\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\">{{ openedFile.age }}</strong></label>\n\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <label id=\"h_gender\">Gender: <strong id=\"gender\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\">{{ openedFile.gender }}</strong></label> <br>\n\n            <label id=\"l_signs\" class=\"mt-1\"><strong>Signs & Symptoms</strong></label> <br>\n            <textarea id=\"t_signs\" type=\"text\" class=\"rounded\" name=\"signs\" [(ngModel)]=\"exam.signs\" class=\"form-control form-control-sm\" cols=\"40\" rows=\"3\" placeholder=\"Type signs and symptoms here\" [readonly]=\"signReadonly\" (keyup)=\"signKeyup()\" required></textarea> <br>\n\n            <label id=\"l_tests\" class=\"mt-1\"><strong>Tests / Xray</strong></label> <br>\n            <textarea id=\"t_tests\" class=\"rounded\" name=\"tests\" [(ngModel)]=\"exam.tests\" class=\"form-control form-control-sm\" cols=\"40\" rows=\"3\" placeholder=\"Type tests/xray here\" [readonly]=\"testReadonly\" (keyup)=\"testKeyup()\" required></textarea> <br>\n\n            <label id=\"l_testsResults\" class=\"mt-1\"><strong>Tests / Xray Results</strong></label> <br>\n            <textarea id=\"t_testsResults\" class=\"rounded\" name=\"results\" [(ngModel)]=\"exam.results\" class=\"form-control form-control-sm\" cols=\"40\" rows=\"3\" placeholder=\"Read Only\" readonly=\"readonly\" ></textarea> <br>\n\n            <label id=\"l_dx\" class=\"mt-1\"><strong>Diagnosis</strong></label> <br>\n            <textarea id=\"t_dx\" class=\"rounded\" cols=\"40\" name=\"dx\" [(ngModel)]=\"exam.dx\" rows=\"3\" class=\"form-control form-control-sm\" placeholder=\"Type diagnosis here\" [readonly]=\"dxReadonly\" (keyup)=\"dxKeyup()\" ></textarea> <br>\n\n            <button id=\"delete_btn\" type=\"button\" (click)=\"delete()\" class=\"btn btn-sm btn-danger m-3\" [disabled]=\"deleteDisabled\" > Delete </button> \n\n            <button id=\"btn_ToLab\" type=\"button\" (click)=\"toLab()\" class=\"btn btn-sm btn-warning m-3\" [disabled]=\"tolabDisabled\"> To lab </button>\n\n            <button id=\"btn_ToXray\" type=\"button\" (click)=\"toXray()\" class=\"btn btn-sm btn-primary m-3\" [disabled]=\"toxrayDisabled\"> To Xray </button>\n\n            <button id=\"btn_ToPharmacy\" type=\"button\" (click)=\"toPharmacy()\" class=\"btn btn-sm btn-success m-3\" [disabled]=\"topharmacyDisabled\"> To Pharmacy </button>\n\n            <hr>\n\n    </form>\n    <!-- Examination form 2 -->\n    <form id=\"examination_form2\" class=\"form mx-auto  rounded\" [hidden]=\"hideFormTWO\" >\n\n        <h1><strong>Examination Form</strong></h1>\n        \n        <hr>\n       \n        <label id=\"h_name\">Name: <strong id=\"name\" class=\"text-warning\" *ngFor=\"let referedFile of referedFiles\" >{{ referedFile.name }}</strong></label> <br>\n\n        <label id=\"h_patientNo\">PatientNo: <strong id=\"patientNo\" class=\"text-warning\" *ngFor=\"let referedFile of referedFiles\" >{{ referedFile.patientNo }}</strong></label>\n\n        &nbsp;&nbsp;&nbsp;\n        <label id=\"h_age\">Age: <strong id=\"age\" class=\"text-warning\" *ngFor=\"let referedFile of referedFiles\">{{ referedFile.age }}</strong></label>\n\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        <label id=\"h_gender\">Gender: <strong id=\"gender\" class=\"text-warning\" *ngFor=\"let referedFile of referedFiles\">{{ referedFile.gender }}</strong></label> <br>\n\n        <label id=\"l_signs\" class=\"mt-1\"><strong>Signs & Symptoms</strong></label> <br>\n        <textarea id=\"t_signs\" type=\"text\" class=\"rounded\" name=\"signs\" class=\"form-control form-control-sm\" cols=\"40\" rows=\"3\" placeholder=\"Type signs and symptoms here\" readonly=\"readonly\" (keyup)=\"signKeyup()\" *ngFor=\"let referedFile of referedFiles\" required>{{ referedFile.signs }}</textarea> <br>\n\n        <label id=\"l_tests\" class=\"mt-1\"><strong>Tests / Xray</strong></label> <br>\n        <textarea id=\"t_tests\" class=\"rounded\" name=\"tests\" class=\"form-control form-control-sm\" cols=\"40\" rows=\"3\" placeholder=\"Type tests/xray here\" readonly=\"readonly\" (keyup)=\"testKeyup()\" *ngFor=\"let referedFile of referedFiles\">{{ referedFile.tests }}</textarea> <br>\n\n        <label id=\"l_testsResults\" class=\"mt-1\"><strong>Tests / Xray Results</strong></label> <br>\n        <textarea id=\"t_testsResults\" class=\"rounded\" name=\"results\"  class=\"form-control form-control-sm\" cols=\"40\" rows=\"3\" placeholder=\"Read Only\" readonly=\"readonly\" *ngFor=\"let referedFile of referedFiles\">{{ referedFile.results }}</textarea> <br>\n\n        <label id=\"l_dx\" class=\"mt-1\"><strong>Diagnosis</strong></label> <br>\n        <textarea id=\"t_dx\" class=\"rounded\" cols=\"40\" name=\"dx\" [(ngModel)]=\"exam2.dx\" rows=\"3\" class=\"form-control form-control-sm\" placeholder=\"Type diagnosis here\" [readonly]=\"dxReadonly\" (keyup)=\"dxxKeyup()\" *ngFor=\"let referedFile of referedFiles\">{{ referedFile.dx }}</textarea> <br>\n\n        <button id=\"btn_ToPharmacy\" type=\"button\" (click)=\"toPharm()\" class=\"btn btn-sm btn-success m-3\" [disabled]=\"topharmDisabled\"> To Pharmacy </button>\n\n        <hr>\n\n</form>\n\n\n<!------------------------------------------------------------>\n\n    <form id=\"to_exam_form\" class=\"form ml-auto rounded\">\n\n        <h4><strong>Patients from Lab</strong></h4>\n        <ol >\n\n            <li id=\"listLab\" *ngFor=\"let labPatient of labPatients\" (click)=\"openLabFile(labPatient.patientNo)\">\n                \n                {{labPatient.name}} : {{labPatient.patientNo}}\n\n            </li>\n            \n        </ol>\n        <hr>\n        <h4><strong>Patients from Xray</strong></h4>\n        \n        <ol >\n\n            <li id=\"listXray\" *ngFor=\"let xrayPatient of xrayPatients\" (click)=\"openXrayFile(xrayPatient.patientNo)\">\n                \n                {{xrayPatient.name}} : {{xrayPatient.patientNo}}\n\n            </li>\n            \n        </ol>       \n\n    </form>\n\n<!------------------------------------------------------------>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/clinician/examination/examination.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/clinician/examination/examination.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\n.card-deck {\n  margin: 1em 0 0 0; }\n.card-deck form {\n    background-color: #4a5d68;\n    padding: 1em 2em 0 2em;\n    margin: 0 1em 1em 1em;\n    height: 0%;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\n.card-deck form h1 {\n      font-size: 20px;\n      font-weight: bold;\n      color: #e8491d;\n      text-shadow: 5px 5px 3px black; }\n.card-deck form h4 {\n      font-size: 12px;\n      font-weight: bold; }\n.card-deck form ol li {\n      color: #17a2b8; }\n.card-deck form ol li:hover {\n      cursor: pointer;\n      color: #ffc107;\n      font-weight: bold; }\n.card-deck form #h_name, .card-deck form #h_age, .card-deck form #h_gender, .card-deck form #l_signs, .card-deck form #l_tests, .card-deck form #l_testsResults, .card-deck form #l_dx {\n      text-transform: capitalize;\n      font-size: 13px;\n      color: #000000; }\n.card-deck form textarea {\n      color: black;\n      background-color: #97a9b4;\n      border: none;\n      border-radius: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2V4YW1pbmF0aW9uL0M6XFxUaGVDb2RlXFxtZWFuQXBwXFxraW1zYXBwL3NyY1xcYXBwXFxjbGluaWNpYW5cXGV4YW1pbmF0aW9uXFxleGFtaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBQTtBQUNBLHNFQUFBO0FBOENBO0VBQ0ksaUJBQWlCLEVBQUE7QUFEckI7SUFJUSx5QkF0Q3VCO0lBdUN2QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDViwwQ0FBeUMsRUFBQTtBQVJqRDtNQVdZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0F0RFM7TUF1RFQsOEJBQXlDLEVBQUE7QUFkckQ7TUFpQlksZUFBZTtNQUNmLGlCQUFpQixFQUFBO0FBbEI3QjtNQXNCZ0IsY0FsREMsRUFBQTtBQTRCakI7TUF5QmdCLGVBQWU7TUFDZixjQXJESTtNQXNESixpQkFBaUIsRUFBQTtBQTNCakM7TUErQlksMEJBQTBCO01BQzFCLGVBQWU7TUFDZixjQUFjLEVBQUE7QUFqQzFCO01BcUNZLFlBQVk7TUFDWix5QkF2RW9CO01Bd0VwQixZQUFZO01BQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNpYW4vZXhhbWluYXRpb24vZXhhbWluYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0gR2xvYmFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogQnJlYWtwb2ludHM6IHhzOiAwLCAgc206IDU3NnB4OyBtZDogNzY4cHg7IGxnOiA5OTJweDsgeGw6IDEyMDBweDsgKi9cclxuXHJcbiRjb2xvcnM6IChcclxuICAgIGJnOiAjYzBjMGMwLFxyXG4gICAgdGhlbWU6IGhzbCgyMDMsIDE3JSwgMjUlKSxcclxuICAgIGZldm9yaXRlOiAjZTg0OTFkLFxyXG4gICAgc2hvdyA6IGRhcmtlbiggI2ZmYzEwNywgMTAlKSxcclxuICAgIHByaW1hcnk6ICMwMDdiZmYsXHJcbiAgICBwcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCMwMDVERkYsIDQwJSksXHJcbiAgICBwcmltYXJ5LWRhcms6IGRhcmtlbigjMDA1REZGLCA0MCUpLFxyXG4gICAgYWNjZW50OiAjRkZGNkJCLFxyXG4gICAgZ2lybGlzaDogcmdiKDE5NSwgMTUsIDIwMSksXHJcbiAgICBmb3JtOiBsaWdodGVuKCMzNTQyNGEsIDEwJSksXHJcbiAgICBpbnB1dDogbGlnaHRlbigjMzU0MjRhLCA0MCUpLFxyXG4gICAgZ3JheTogIzZjNzU3ZCxcclxuICAgIGdyYXktZGFyazogIzM0M2E0MCxcclxuICAgIHNlY29uZGFyeTogIzZjNzU3ZCxcclxuICAgIHN1Y2Nlc3M6ICMyOGE3NDUsXHJcbiAgICBpbmZvOiAjMTdhMmI4LFxyXG4gICAgd2FybmluZzogI2ZmYzEwNyxcclxuICAgIGRhbmdlcjogI2RjMzU0NSxcclxuICAgIGxpZ2h0OiAjZjhmOWZhLFxyXG4gICAgZGFyazogIzM0M2E0MFxyXG5cclxuKTtcclxuXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSl7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycyAsICRjb2xvci1uYW1lKVxyXG59XHJcblxyXG4kZGVza3RvcDogNzY4cHg7XHJcbiRkZXNrdG9wX3NtOiAzNjRweDtcclxuJG9wYWNpdHk6IC45O1xyXG5cclxuQG1peGluIGRlc2t0b3Bfc20ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3Bfc219KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcbi5jYXJkLWRlY2sge1xyXG4gICAgbWFyZ2luOiAxZW0gMCAwIDA7XHJcbiAgICAgICAgXHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGZvcm0pO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAyZW0gMCAyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIDFlbSAxZW0gMWVtO1xyXG4gICAgICAgIGhlaWdodDogMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcblxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogY29sb3IoZmV2b3JpdGUpO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9se1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcihpbmZvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaTpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcih3YXJuaW5nKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNoX25hbWUsICNoX2FnZSwgI2hfZ2VuZGVyLCAjbF9zaWducywgI2xfdGVzdHMsICNsX3Rlc3RzUmVzdWx0cywgI2xfZHgge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGlucHV0KTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/clinician/examination/examination.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/clinician/examination/examination.component.ts ***!
  \****************************************************************/
/*! exports provided: ExaminationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationComponent", function() { return ExaminationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/files.service */ "./src/app/services/files.service.ts");
/* harmony import */ var src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notify.service */ "./src/app/services/notify.service.ts");




var ExaminationComponent = /** @class */ (function () {
    function ExaminationComponent(filesService, notifyService) {
        this.filesService = filesService;
        this.notifyService = notifyService;
        this.admittedPatients = [];
        this.labPatients = [];
        this.xrayPatients = [];
        this.openedFiles = [];
        this.referedFiles = [];
        this.hideFormONE = false;
        this.hideFormTWO = true;
        this.signReadonly = true;
        this.testReadonly = true;
        this.dxReadonly = true;
        this.deleteDisabled = true;
        this.tolabDisabled = true;
        this.toxrayDisabled = true;
        this.topharmacyDisabled = true;
        this.topharmDisabled = true;
    }
    ExaminationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // List Admitted patients functions
        this.filesService.listAdmitPatient().subscribe(function (data) { _this.admittedPatients = data; }, function (error) { console.error("Error", error); });
        // List patients from lab functions
        this.filesService.listPatientfromLab().subscribe(function (data) { _this.labPatients = data; }, function (error) { console.error("Error", error); });
        // List patients from xray functions
        this.filesService.listPatientfromXray().subscribe(function (data) { _this.xrayPatients = data; }, function (error) { console.error("Error", error); });
        // page Reload function
        this.filesService.examinationReload().subscribe(
        // Do Nothing
        );
        // define captured data
        this.exam = {
            signs: "",
            tests: "",
            results: "",
            dx: ""
        };
        this.exam2 = {
            dx: ""
        };
    };
    //=== Opening admission file ===
    ExaminationComponent.prototype.openAdmFile = function (id) {
        var _this = this;
        var patientNo = { patientNo: id };
        this.filesService.openAdmFile(patientNo).subscribe(function (data) {
            _this.hideFormONE = false;
            _this.hideFormTWO = true;
            _this.openedFiles = data;
            _this.signReadonly = false;
            _this.deleteDisabled = false;
            _this.notifyService.showInfo("File from Admission Opened !", "Info..");
        }, function (error) {
            console.log("Error", error);
            _this.notifyService.showWarning(error.error, "Warnning!");
        });
    };
    //==== Change in Sign Area function ======
    ExaminationComponent.prototype.signKeyup = function () {
        this.testReadonly = false;
        this.dxReadonly = false;
        this.deleteDisabled = true;
    };
    ;
    //==== Change in Sign Area function ======
    ExaminationComponent.prototype.testKeyup = function () {
        this.dxReadonly = true;
        this.tolabDisabled = false;
        this.toxrayDisabled = false;
    };
    ;
    //==== Change in Dx Area function ======
    ExaminationComponent.prototype.dxKeyup = function () {
        this.testReadonly = true;
        this.signReadonly = true;
        this.deleteDisabled = true;
        this.tolabDisabled = true;
        this.toxrayDisabled = true;
        this.topharmacyDisabled = false;
    };
    ;
    ExaminationComponent.prototype.dxxKeyup = function () {
        this.topharmDisabled = false;
    };
    ;
    // ==== Delete File =======
    ExaminationComponent.prototype.delete = function () {
        var _this = this;
        this.filesService.deleteFile().subscribe(function (data) {
            _this.notifyService.showSuccess("File deleted!", "Success");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.log(error, "Error!"); });
    };
    // ==== to Lab =========
    ExaminationComponent.prototype.toLab = function () {
        var _this = this;
        this.filesService.tolab(this.exam).subscribe(function (data) {
            _this.notifyService.showSuccess("Sent To Lab..", "Success !");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.log(error, "Error!"); });
    };
    //=== Opening Lab file ===
    ExaminationComponent.prototype.openLabFile = function (id) {
        var _this = this;
        var patientNo = { patientNo: id };
        this.filesService.openFilefromLab(patientNo).subscribe(function (data) {
            _this.hideFormONE = true;
            _this.hideFormTWO = false;
            _this.referedFiles = data;
            _this.signReadonly = true;
            _this.testReadonly = true;
            _this.dxReadonly = false;
            _this.deleteDisabled = true;
            _this.tolabDisabled = true;
            _this.toxrayDisabled = true;
            _this.notifyService.showInfo(" File from Lab Opened !", "Info..");
        }, function (error) {
            console.log("Error", error);
            _this.notifyService.showWarning(error.error, "Warnning!");
        });
    };
    // ==== To Xray =========
    ExaminationComponent.prototype.toXray = function () {
        var _this = this;
        this.filesService.toxray(this.exam).subscribe(function (data) {
            _this.notifyService.showSuccess("Sent To Xray.", "Success !");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.log(error, "Error!"); });
    };
    //=== Opening Xray file ===
    ExaminationComponent.prototype.openXrayFile = function (id) {
        var _this = this;
        var patientNo = { patientNo: id };
        this.filesService.openFilefromXray(patientNo).subscribe(function (data) {
            _this.hideFormONE = true;
            _this.hideFormTWO = false;
            _this.referedFiles = data;
            _this.signReadonly = true;
            _this.testReadonly = true;
            _this.dxReadonly = false;
            _this.deleteDisabled = true;
            _this.tolabDisabled = true;
            _this.toxrayDisabled = true;
            _this.notifyService.showInfo(" File from Xray Opened !", "Info..");
        }, function (error) {
            console.log("Error", error);
            _this.notifyService.showWarning(error.error, "Warnning!");
        });
    };
    // ==== To Pharmacy =========
    ExaminationComponent.prototype.toPharmacy = function () {
        var _this = this;
        this.filesService.topharmacy(this.exam).subscribe(function (data) {
            _this.notifyService.showSuccess("Sent To Pharmacy..", "Success !");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.log(error, "Error!"); });
    };
    ExaminationComponent.prototype.toPharm = function () {
        var _this = this;
        this.filesService.topharm(this.exam2).subscribe(function (data) {
            _this.notifyService.showSuccess("Sent To Pharmacy..", "Success !");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.log(error, "Error!"); });
    };
    ExaminationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examination',
            template: __webpack_require__(/*! ./examination.component.html */ "./src/app/clinician/examination/examination.component.html"),
            styles: [__webpack_require__(/*! ./examination.component.scss */ "./src/app/clinician/examination/examination.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"],
            src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], ExaminationComponent);
    return ExaminationComponent;
}());



/***/ }),

/***/ "./src/app/clinician/laboratory/laboratory.component.html":
/*!****************************************************************!*\
  !*** ./src/app/clinician/laboratory/laboratory.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\n\n    <form id=\"exam_lab_form\" class=\"form rounded  \">\n\n        <h4><strong>Patients from Examination</strong></h4>\n        <hr>\n        <ol >\n\n            <li *ngFor=\"let labPatient of labPatients\" (click)=\"openLabFile(labPatient.patientNo)\">\n                \n                {{labPatient.name}} : {{labPatient.patientNo}}\n\n            </li>\n            \n        </ol>             \n\n    </form>\n\n\n    <form id=\"lab_form\" class=\"form mx-auto rounded\" (ngSubmit)=\"onSubmit()\" >\n\n            <h1><strong>Laboratory Form</strong></h1>\n            \n            <hr>\n           \n            <label id=\"h_name\">Name: <strong id=\"lab_name\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.name }}</strong></label> <br>\n\n            <label id=\"h_patientNo\">PatientNo: <strong id=\"lab_patientNo\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.patientNo }}</strong></label>\n\n            &nbsp;&nbsp;&nbsp;\n            <label id=\"h_age\">Age: <strong id=\"lab_age\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.age }}</strong></label>\n\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <label id=\"h_gender\">Gender: <strong id=\"lab_gender\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.gender }}</strong></label> <br>\n\n            <label id=\"l_signs\" class=\"mt-1\"><strong>Signs & Symptoms</strong></label> <br>\n            <textarea id=\"lab_t_signs\" name=\"signs\" class=\"form-control form-control-sm\" cols=\"40\" rows=\"3\" placeholder=\"Type signs and symptoms here\" *ngFor=\"let openedFile of openedFiles\" readonly=\"readonly\">{{ openedFile.signs }}</textarea> <br>\n\n            <label id=\"l_tests\" class=\"mt-1\"><strong>Tests</strong></label> <br>\n            <textarea id=\"lab_t_tests\"  class=\"form-control form-control-sm\" name=\"tests\" cols=\"40\" rows=\"3\" placeholder=\"Type tests here\" *ngFor=\"let openedFile of openedFiles\" readonly=\"readonly\">{{ openedFile.tests }}</textarea> <br>\n\n            <label id=\"l_testsResults\" class=\"mt-1\"><strong>Tests' Results</strong></label> <br>\n            <textarea id=\"lab_t_testsResults\" [(ngModel)]=\"lab.results\" class=\"form-control form-control-sm\" name=\"results\" cols=\"40\" rows=\"3\" placeholder=\"Type tests results here\" *ngFor=\"let openedFile of openedFiles\" (keyup)=\"resultKeyup()\">{{ openedFile.results }}</textarea> <br>\n\n            \n\n            <button id=\"btn_LabToExam\" type=\"submit\" class=\"btn btn-sm btn-warning m-3\" [disabled]=\"toExamDisabled\"> To Examination </button>\n\n            \n\n            <hr>\n\n    </form>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/clinician/laboratory/laboratory.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/clinician/laboratory/laboratory.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\n.card-deck {\n  margin: 1em 0 0 0; }\n.card-deck form {\n    background-color: #4a5d68;\n    padding: 1em 2em 0 2em;\n    margin: 0 1em 1em 1em;\n    height: 0%;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\n.card-deck form h1 {\n      font-size: 20px;\n      font-weight: bold;\n      color: #e8491d;\n      text-shadow: 5px 5px 3px black; }\n.card-deck form h4 {\n      font-size: 12px;\n      font-weight: bold; }\n.card-deck form ol li {\n      color: #17a2b8; }\n.card-deck form ol li:hover {\n      cursor: pointer;\n      color: #ffc107;\n      font-weight: bold; }\n.card-deck form #h_name, .card-deck form #h_age, .card-deck form #h_gender, .card-deck form #l_signs, .card-deck form #l_tests, .card-deck form #l_testsResults, .card-deck form #l_dx {\n      text-transform: capitalize;\n      font-size: 13px;\n      color: #000000; }\n.card-deck form textarea {\n      color: black;\n      background-color: #97a9b4;\n      border: none;\n      border-radius: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2xhYm9yYXRvcnkvQzpcXFRoZUNvZGVcXG1lYW5BcHBcXGtpbXNhcHAvc3JjXFxhcHBcXGNsaW5pY2lhblxcbGFib3JhdG9yeVxcbGFib3JhdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBQTtBQUNBLHNFQUFBO0FBNENBO0VBQ0ksaUJBQWlCLEVBQUE7QUFEckI7SUFJUSx5QkF0Q3VCO0lBdUN2QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDViwwQ0FBeUMsRUFBQTtBQVJqRDtNQVlZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0F0RFM7TUF1RFQsOEJBQXlDLEVBQUE7QUFmckQ7TUFrQlksZUFBZTtNQUNmLGlCQUFpQixFQUFBO0FBbkI3QjtNQXVCZ0IsY0FuREMsRUFBQTtBQTRCakI7TUEwQmdCLGVBQWU7TUFDZixjQXRESTtNQXVESixpQkFBaUIsRUFBQTtBQTVCakM7TUFnQ1ksMEJBQTBCO01BQzFCLGVBQWU7TUFDZixjQUFjLEVBQUE7QUFsQzFCO01BcUNZLFlBQVk7TUFDWix5QkF2RW9CO01Bd0VwQixZQUFZO01BQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNpYW4vbGFib3JhdG9yeS9sYWJvcmF0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tIEdsb2JhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIEJyZWFrcG9pbnRzOiB4czogMCwgIHNtOiA1NzZweDsgbWQ6IDc2OHB4OyBsZzogOTkycHg7IHhsOiAxMjAwcHg7ICovXHJcblxyXG4kY29sb3JzOiAoXHJcbiAgICBiZzogI2MwYzBjMCxcclxuICAgIGZldm9yaXRlOiAjZTg0OTFkLFxyXG4gICAgcHJpbWFyeTogIzAwN2JmZixcclxuICAgIHByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oIzAwNURGRiwgNDAlKSxcclxuICAgIHByaW1hcnktZGFyazogZGFya2VuKCMwMDVERkYsIDQwJSksXHJcbiAgICBhY2NlbnQ6ICNGRkY2QkIsXHJcbiAgICBnaXJsaXNoOiByZ2IoMTk1LCAxNSwgMjAxKSxcclxuICAgIGZvcm06IGxpZ2h0ZW4oIzM1NDI0YSwgMTAlKSxcclxuICAgIGlucHV0OiBsaWdodGVuKCMzNTQyNGEsIDQwJSksXHJcbiAgICBncmF5OiAjNmM3NTdkLFxyXG4gICAgZ3JheS1kYXJrOiAjMzQzYTQwLFxyXG4gICAgc2Vjb25kYXJ5OiAjNmM3NTdkLFxyXG4gICAgc3VjY2VzczogIzI4YTc0NSxcclxuICAgIGluZm86ICMxN2EyYjgsXHJcbiAgICB3YXJuaW5nOiAjZmZjMTA3LFxyXG4gICAgZGFuZ2VyOiAjZGMzNTQ1LFxyXG4gICAgbGlnaHQ6ICNmOGY5ZmEsXHJcbiAgICBkYXJrOiAjMzQzYTQwXHJcblxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKXtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzICwgJGNvbG9yLW5hbWUpXHJcbn1cclxuXHJcbiRkZXNrdG9wOiA3NjhweDtcclxuJGRlc2t0b3Bfc206IDM2NHB4O1xyXG4kb3BhY2l0eTogLjk7XHJcblxyXG5AbWl4aW4gZGVza3RvcF9zbSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcF9zbX0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBcclxufVxyXG5cclxuLmNhcmQtZGVjayB7XHJcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcclxuICAgICAgICBcclxuICAgIGZvcm17XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZm9ybSk7XHJcbiAgICAgICAgcGFkZGluZzogMWVtIDJlbSAwIDJlbTtcclxuICAgICAgICBtYXJnaW46IDAgMWVtIDFlbSAxZW07XHJcbiAgICAgICAgaGVpZ2h0OiAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcihmZXZvcml0ZSk7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2x7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKHdhcm5pbmcpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI2hfbmFtZSwgI2hfYWdlLCAjaF9nZW5kZXIsICNsX3NpZ25zLCAjbF90ZXN0cywgI2xfdGVzdHNSZXN1bHRzLCAjbF9keCB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0YXJlYXtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihpbnB1dCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/clinician/laboratory/laboratory.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clinician/laboratory/laboratory.component.ts ***!
  \**************************************************************/
/*! exports provided: LaboratoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaboratoryComponent", function() { return LaboratoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/files.service */ "./src/app/services/files.service.ts");
/* harmony import */ var src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notify.service */ "./src/app/services/notify.service.ts");




var LaboratoryComponent = /** @class */ (function () {
    function LaboratoryComponent(filesService, notifyService) {
        this.filesService = filesService;
        this.notifyService = notifyService;
        this.labPatients = [];
        this.openedFiles = [];
        this.toExamDisabled = true;
    }
    LaboratoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Lab List patients function
        this.filesService.listLabPatient().subscribe(function (data) { _this.labPatients = data; }, function (error) { console.error("Error", error); });
        // page Reload function
        this.filesService.labReload().subscribe(
        // Do Nothing
        );
        // define captured data
        this.lab = {
            results: "",
        };
    };
    //=== Opening Lab file ===
    LaboratoryComponent.prototype.openLabFile = function (id) {
        var _this = this;
        var patientNo = { patientNo: id };
        this.filesService.openLabFile(patientNo).subscribe(function (data) {
            _this.openedFiles = data;
            _this.notifyService.showInfo("File Opened !", "Info..");
        }, function (error) {
            console.log("Error", error);
            _this.notifyService.showWarning(error.error, "Warnning!");
        });
    };
    //==== Change in Results Area function ======
    LaboratoryComponent.prototype.resultKeyup = function () {
        this.toExamDisabled = false;
    };
    ;
    // ==== Back to Examination =========
    LaboratoryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.filesService.labToExam(this.lab).subscribe(function (data) {
            _this.notifyService.showSuccess("Sent Back To Exam..", "Success !");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.log(error, "Error!"); });
    };
    LaboratoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-laboratory',
            template: __webpack_require__(/*! ./laboratory.component.html */ "./src/app/clinician/laboratory/laboratory.component.html"),
            styles: [__webpack_require__(/*! ./laboratory.component.scss */ "./src/app/clinician/laboratory/laboratory.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"],
            src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], LaboratoryComponent);
    return LaboratoryComponent;
}());



/***/ }),

/***/ "./src/app/clinician/pharmacy/pharmacy.component.html":
/*!************************************************************!*\
  !*** ./src/app/clinician/pharmacy/pharmacy.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\n\n    <form id=\"exam_pharm_form\" class=\"form rounded  \">\n\n        <h4><strong>Patients from Examination</strong></h4>\n        <hr>\n        <ol >\n\n            <li *ngFor=\"let pharmacyPatient of pharmacyPatients\" (click)=\"openPharmacyFile(pharmacyPatient.patientNo)\">\n                \n                {{pharmacyPatient.name}} : {{pharmacyPatient.patientNo}}\n\n            </li>\n            \n        </ol>              \n\n    </form>\n\n\n    <form id=\"pharm_form\" class=\"form mx-auto rounded\" (ngSubmit)=\"onSubmit()\">\n\n            <h1><strong>Pharmacy Form</strong></h1>\n            \n            <hr>\n           \n            <label id=\"h_name\">Name: <strong id=\"pham_name\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.name }}</strong></label> <br>\n\n            <label id=\"h_patientNo\">PatientNo: <strong id=\"pham_patientNo\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.patientNo }}</strong></label>\n            &nbsp;&nbsp;&nbsp;\n            <label id=\"h_age\">Age: <strong id=\"pham_age\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.age }}</strong></label>\n\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <label id=\"h_gender\">Gender: <strong id=\"pham_gender\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.gender }}</strong></label> <br>\n\n            <label id=\"l_signs\" class=\"mt-1\"><strong>Signs & Symptoms</strong></label> <br>\n            <textarea id=\"pham_t_signs\" class=\"form-control form-control-sm\" name=\"signs\" cols=\"40\" rows=\"3\" placeholder=\"Type signs and symptoms here\" *ngFor=\"let openedFile of openedFiles\" readonly=\"readonly\">{{ openedFile.signs }}</textarea> <br>\n\n            <label id=\"l_tests\" class=\"mt-1\"><strong>Tests</strong></label> <br>\n            <textarea id=\"pham_t_tests\" class=\"form-control form-control-sm\" name=\"tests\" cols=\"40\" rows=\"3\" placeholder=\"Type tests here\" *ngFor=\"let openedFile of openedFiles\" readonly=\"readonly\">{{ openedFile.tests }}</textarea> <br>\n\n            <label id=\"l_testsResults\" class=\"mt-1\"><strong>Tests' Results</strong></label> <br>\n            <textarea id=\"pham_t_testsResults\" class=\"form-control form-control-sm\" name=\"results\" cols=\"40\" rows=\"3\" placeholder=\"Type tests here\" *ngFor=\"let openedFile of openedFiles\" readonly=\"readonly\">{{ openedFile.results }}</textarea> <br>\n\n            <label id=\"l_dx\" class=\"mt-1\"><strong>Diagnosis</strong></label> <br>\n            <textarea id=\"pham_t_dx\" class=\"form-control form-control-sm\" cols=\"40\" name=\"dx\" rows=\"3\" placeholder=\"Type diagnosis here\" *ngFor=\"let openedFile of openedFiles\" readonly=\"readonly\">{{ openedFile.dx }}</textarea> <br>          \n\n            <button id=\"btn_save\" type=\"submit\" class=\"btn btn-sm btn-success m-3\" [disabled]=\"saveDisabled\"> Save File </button>\n\n            \n\n            <hr>\n\n    </form>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/clinician/pharmacy/pharmacy.component.scss":
/*!************************************************************!*\
  !*** ./src/app/clinician/pharmacy/pharmacy.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\n.card-deck {\n  margin: 1em 0 0 0; }\n.card-deck form {\n    background-color: #4a5d68;\n    padding: 1em 2em 0 2em;\n    margin: 0 1em 1em 1em;\n    height: 0%;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\n.card-deck form h1 {\n      font-size: 20px;\n      font-weight: bold;\n      color: #e8491d;\n      text-shadow: 5px 5px 3px black; }\n.card-deck form h4 {\n      font-size: 12px;\n      font-weight: bold; }\n.card-deck form ol li {\n      color: #17a2b8; }\n.card-deck form ol li:hover {\n      cursor: pointer;\n      color: #ffc107;\n      font-weight: bold; }\n.card-deck form #h_name, .card-deck form #h_age, .card-deck form #h_gender, .card-deck form #l_signs, .card-deck form #l_tests, .card-deck form #l_testsResults, .card-deck form #l_dx {\n      text-transform: capitalize;\n      font-size: 13px;\n      color: #000000; }\n.card-deck form textarea {\n      color: black;\n      background-color: #97a9b4;\n      border: none;\n      border-radius: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL3BoYXJtYWN5L0M6XFxUaGVDb2RlXFxtZWFuQXBwXFxraW1zYXBwL3NyY1xcYXBwXFxjbGluaWNpYW5cXHBoYXJtYWN5XFxwaGFybWFjeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBQTtBQUNBLHNFQUFBO0FBNENBO0VBQ0ksaUJBQWlCLEVBQUE7QUFEckI7SUFLUSx5QkF2Q3VCO0lBd0N2QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDViwwQ0FBeUMsRUFBQTtBQVRqRDtNQWNZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0F4RFM7TUF5RFQsOEJBQXlDLEVBQUE7QUFqQnJEO01Bb0JZLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtBQXJCN0I7TUF5QmdCLGNBckRDLEVBQUE7QUE0QmpCO01BNEJnQixlQUFlO01BQ2YsY0F4REk7TUF5REosaUJBQWlCLEVBQUE7QUE5QmpDO01Ba0NZLDBCQUEwQjtNQUMxQixlQUFlO01BQ2YsY0FBYyxFQUFBO0FBcEMxQjtNQXVDWSxZQUFZO01BQ1oseUJBekVvQjtNQTBFcEIsWUFBWTtNQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2xpbmljaWFuL3BoYXJtYWN5L3BoYXJtYWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tIEdsb2JhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIEJyZWFrcG9pbnRzOiB4czogMCwgIHNtOiA1NzZweDsgbWQ6IDc2OHB4OyBsZzogOTkycHg7IHhsOiAxMjAwcHg7ICovXHJcblxyXG4kY29sb3JzOiAoXHJcbiAgICBiZzogI2MwYzBjMCxcclxuICAgIGZldm9yaXRlOiAjZTg0OTFkLFxyXG4gICAgcHJpbWFyeTogIzAwN2JmZixcclxuICAgIHByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oIzAwNURGRiwgNDAlKSxcclxuICAgIHByaW1hcnktZGFyazogZGFya2VuKCMwMDVERkYsIDQwJSksXHJcbiAgICBhY2NlbnQ6ICNGRkY2QkIsXHJcbiAgICBnaXJsaXNoOiByZ2IoMTk1LCAxNSwgMjAxKSxcclxuICAgIGZvcm06IGxpZ2h0ZW4oIzM1NDI0YSwgMTAlKSxcclxuICAgIGlucHV0OiBsaWdodGVuKCMzNTQyNGEsIDQwJSksXHJcbiAgICBncmF5OiAjNmM3NTdkLFxyXG4gICAgZ3JheS1kYXJrOiAjMzQzYTQwLFxyXG4gICAgc2Vjb25kYXJ5OiAjNmM3NTdkLFxyXG4gICAgc3VjY2VzczogIzI4YTc0NSxcclxuICAgIGluZm86ICMxN2EyYjgsXHJcbiAgICB3YXJuaW5nOiAjZmZjMTA3LFxyXG4gICAgZGFuZ2VyOiAjZGMzNTQ1LFxyXG4gICAgbGlnaHQ6ICNmOGY5ZmEsXHJcbiAgICBkYXJrOiAjMzQzYTQwXHJcblxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9yKCRjb2xvci1uYW1lKXtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzICwgJGNvbG9yLW5hbWUpXHJcbn1cclxuXHJcbiRkZXNrdG9wOiA3NjhweDtcclxuJGRlc2t0b3Bfc206IDM2NHB4O1xyXG4kb3BhY2l0eTogLjk7XHJcblxyXG5AbWl4aW4gZGVza3RvcF9zbSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcF9zbX0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRkZXNrdG9wfSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSBcclxufVxyXG5cclxuLmNhcmQtZGVjayB7XHJcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcclxuXHJcbiAgICAgICAgXHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGZvcm0pO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAyZW0gMCAyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIDFlbSAxZW0gMWVtO1xyXG4gICAgICAgIGhlaWdodDogMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcihmZXZvcml0ZSk7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2x7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKHdhcm5pbmcpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI2hfbmFtZSwgI2hfYWdlLCAjaF9nZW5kZXIsICNsX3NpZ25zLCAjbF90ZXN0cywgI2xfdGVzdHNSZXN1bHRzLCAjbF9keCB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0YXJlYXtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihpbnB1dCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/clinician/pharmacy/pharmacy.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/clinician/pharmacy/pharmacy.component.ts ***!
  \**********************************************************/
/*! exports provided: PharmacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyComponent", function() { return PharmacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/files.service */ "./src/app/services/files.service.ts");
/* harmony import */ var src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notify.service */ "./src/app/services/notify.service.ts");




var PharmacyComponent = /** @class */ (function () {
    function PharmacyComponent(filesService, notifyService) {
        this.filesService = filesService;
        this.notifyService = notifyService;
        this.pharmacyPatients = [];
        this.openedFiles = [];
        this.saveDisabled = true;
    }
    PharmacyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // List Pharm Patients function
        this.filesService.listPharmacyPatient().subscribe(function (data) { _this.pharmacyPatients = data; }, function (error) { console.error("Error", error); });
        // page Reload function
        this.filesService.pharmacyReload().subscribe(
        // Do Nothing
        );
    };
    //=== Opening Pharmacy file ===
    PharmacyComponent.prototype.openPharmacyFile = function (id) {
        var _this = this;
        var patientNo = { patientNo: id };
        this.filesService.openPharmacyFile(patientNo).subscribe(function (data) {
            _this.openedFiles = data;
            _this.saveDisabled = false;
            _this.notifyService.showInfo("File Opened !", "Info..");
        }, function (error) {
            console.log("Error", error);
            _this.notifyService.showWarning(error.error, "Warnning!");
        });
    };
    // ==== Save File =========
    PharmacyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.filesService.saveFile(this.save).subscribe(function (data) {
            _this.notifyService.showSuccess("File Saved..", "Success !");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.log(error, "Error!"); });
    };
    PharmacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pharmacy',
            template: __webpack_require__(/*! ./pharmacy.component.html */ "./src/app/clinician/pharmacy/pharmacy.component.html"),
            styles: [__webpack_require__(/*! ./pharmacy.component.scss */ "./src/app/clinician/pharmacy/pharmacy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"],
            src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], PharmacyComponent);
    return PharmacyComponent;
}());



/***/ }),

/***/ "./src/app/clinician/xray/xray.component.html":
/*!****************************************************!*\
  !*** ./src/app/clinician/xray/xray.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\n\n    <form id=\"exam_xray_form\" class=\"form rounded  \">\n\n        <h4><strong>Patients from Examination</strong></h4>\n        <hr>\n        <ol >\n\n            <li *ngFor=\"let xrayPatient of xrayPatients\" (click)=\"openXrayFile(xrayPatient.patientNo)\">\n                \n                {{xrayPatient.name}} : {{xrayPatient.patientNo}}\n\n            </li>\n            \n        </ol>              \n\n    </form>\n\n\n    <form id=\"xray_form\" class=\"form mx-auto rounded\" (ngSubmit)=\"onSubmit()\">\n\n            <h1><strong>Xray Form</strong></h1>\n            \n            <hr>\n           \n            <label id=\"h_name\">Name: <strong id=\"xray_name\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.name }}</strong></label> <br>\n\n            <label id=\"h_patientNo\">PatientNo: <strong id=\"xray_patientNo\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.patientNo }}</strong></label>\n            &nbsp;&nbsp;&nbsp;\n            <label id=\"h_age\">Age: <strong id=\"xray_age\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.age }}</strong></label>\n\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <label id=\"h_gender\">Gender: <strong id=\"xray_gender\" class=\"text-warning\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.gender }}</strong></label> <br>\n\n            <label id=\"l_signs\" class=\"mt-1\"><strong>Signs & Symptoms</strong></label> <br>\n            <textarea id=\"xray_t_signs\"  class=\"form-control form-control-sm\" name=\"signs\" cols=\"40\" rows=\"3\" placeholder=\"Type signs and symptoms here\" readonly=\"readonly\"*ngFor=\"let openedFile of openedFiles\" >{{ openedFile.signs }}</textarea> <br>\n\n            <label id=\"l_tests\" class=\"mt-1\"><strong>Tests</strong></label> <br>\n            <textarea id=\"xray_t_tests\"  class=\"form-control form-control-sm\" name=\"tests\" cols=\"40\" rows=\"3\" placeholder=\"Type tests here\"readonly=\"readonly\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.tests }}</textarea> <br>\n\n            <label id=\"l_testsResults\" class=\"mt-1\"><strong>Tests' Results</strong></label> <br>\n            <textarea id=\"xray_t_testsResults\" [(ngModel)]=\"xray.results\" class=\"form-control form-control-sm\" name=\"results\" cols=\"40\" rows=\"3\" placeholder=\"Type tests here\" (keyup)=\"resultKeyup()\" *ngFor=\"let openedFile of openedFiles\" >{{ openedFile.results }}</textarea> <br>\n\n            \n\n            <button id=\"btn_XrayToExam\" type=\"submit\" class=\"btn btn-sm btn-primary m-3\" [disabled]=\"toExamDisabled\"> To Examination </button>\n\n            \n\n            <hr>\n\n    </form>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/clinician/xray/xray.component.scss":
/*!****************************************************!*\
  !*** ./src/app/clinician/xray/xray.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\n.card-deck {\n  margin: 1em 0 0 0; }\n.card-deck form {\n    background-color: #4a5d68;\n    padding: 1em 2em 0 2em;\n    margin: 0 1em 1em 1em;\n    height: 0%;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }\n.card-deck form h1 {\n      font-size: 20px;\n      font-weight: bold;\n      color: #e8491d;\n      text-shadow: 5px 5px 3px black; }\n.card-deck form h4 {\n      font-size: 12px;\n      font-weight: bold; }\n.card-deck form ol li {\n      color: #17a2b8; }\n.card-deck form ol li:hover {\n      cursor: pointer;\n      color: #ffc107;\n      font-weight: bold; }\n.card-deck form #h_name, .card-deck form #h_age, .card-deck form #h_gender, .card-deck form #l_signs, .card-deck form #l_tests, .card-deck form #l_testsResults, .card-deck form #l_dx {\n      text-transform: capitalize;\n      font-size: 13px;\n      color: #000000; }\n.card-deck form textarea {\n      color: black;\n      background-color: #97a9b4;\n      border: none;\n      border-radius: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL3hyYXkvQzpcXFRoZUNvZGVcXG1lYW5BcHBcXGtpbXNhcHAvc3JjXFxhcHBcXGNsaW5pY2lhblxceHJheVxceHJheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBQTtBQUNBLHNFQUFBO0FBNENBO0VBQ0ksaUJBQWlCLEVBQUE7QUFEckI7SUFJUSx5QkF0Q3VCO0lBdUN2QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDViwwQ0FBeUMsRUFBQTtBQVJqRDtNQWFZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0F2RFM7TUF3RFQsOEJBQXlDLEVBQUE7QUFoQnJEO01BbUJZLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtBQXBCN0I7TUF3QmdCLGNBcERDLEVBQUE7QUE0QmpCO01BMkJnQixlQUFlO01BQ2YsY0F2REk7TUF3REosaUJBQWlCLEVBQUE7QUE3QmpDO01BaUNZLDBCQUEwQjtNQUMxQixlQUFlO01BQ2YsY0FBYyxFQUFBO0FBbkMxQjtNQXNDWSxZQUFZO01BQ1oseUJBeEVvQjtNQXlFcEIsWUFBWTtNQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2xpbmljaWFuL3hyYXkveHJheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBHbG9iYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiBCcmVha3BvaW50czogeHM6IDAsICBzbTogNTc2cHg7IG1kOiA3NjhweDsgbGc6IDk5MnB4OyB4bDogMTIwMHB4OyAqL1xyXG5cclxuJGNvbG9yczogKFxyXG4gICAgYmc6ICNjMGMwYzAsXHJcbiAgICBmZXZvcml0ZTogI2U4NDkxZCxcclxuICAgIHByaW1hcnk6ICMwMDdiZmYsXHJcbiAgICBwcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCMwMDVERkYsIDQwJSksXHJcbiAgICBwcmltYXJ5LWRhcms6IGRhcmtlbigjMDA1REZGLCA0MCUpLFxyXG4gICAgYWNjZW50OiAjRkZGNkJCLFxyXG4gICAgZ2lybGlzaDogcmdiKDE5NSwgMTUsIDIwMSksXHJcbiAgICBmb3JtOiBsaWdodGVuKCMzNTQyNGEsIDEwJSksXHJcbiAgICBpbnB1dDogbGlnaHRlbigjMzU0MjRhLCA0MCUpLFxyXG4gICAgZ3JheTogIzZjNzU3ZCxcclxuICAgIGdyYXktZGFyazogIzM0M2E0MCxcclxuICAgIHNlY29uZGFyeTogIzZjNzU3ZCxcclxuICAgIHN1Y2Nlc3M6ICMyOGE3NDUsXHJcbiAgICBpbmZvOiAjMTdhMmI4LFxyXG4gICAgd2FybmluZzogI2ZmYzEwNyxcclxuICAgIGRhbmdlcjogI2RjMzU0NSxcclxuICAgIGxpZ2h0OiAjZjhmOWZhLFxyXG4gICAgZGFyazogIzM0M2E0MFxyXG5cclxuKTtcclxuXHJcbkBmdW5jdGlvbiBjb2xvcigkY29sb3ItbmFtZSl7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycyAsICRjb2xvci1uYW1lKVxyXG59XHJcblxyXG4kZGVza3RvcDogNzY4cHg7XHJcbiRkZXNrdG9wX3NtOiAzNjRweDtcclxuJG9wYWNpdHk6IC45O1xyXG5cclxuQG1peGluIGRlc2t0b3Bfc20ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3Bfc219KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9IFxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcbi5jYXJkLWRlY2sge1xyXG4gICAgbWFyZ2luOiAxZW0gMCAwIDA7XHJcbiAgICAgICAgXHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGZvcm0pO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAyZW0gMCAyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIDFlbSAxZW0gMWVtO1xyXG4gICAgICAgIGhlaWdodDogMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcihmZXZvcml0ZSk7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2x7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKHdhcm5pbmcpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI2hfbmFtZSwgI2hfYWdlLCAjaF9nZW5kZXIsICNsX3NpZ25zLCAjbF90ZXN0cywgI2xfdGVzdHNSZXN1bHRzLCAjbF9keCB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0YXJlYXtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihpbnB1dCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/clinician/xray/xray.component.ts":
/*!**************************************************!*\
  !*** ./src/app/clinician/xray/xray.component.ts ***!
  \**************************************************/
/*! exports provided: XrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XrayComponent", function() { return XrayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/files.service */ "./src/app/services/files.service.ts");
/* harmony import */ var src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notify.service */ "./src/app/services/notify.service.ts");




var XrayComponent = /** @class */ (function () {
    function XrayComponent(filesService, notifyService) {
        this.filesService = filesService;
        this.notifyService = notifyService;
        this.xrayPatients = [];
        this.openedFiles = [];
        this.toExamDisabled = true;
    }
    XrayComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Xray List patients functions
        this.filesService.listXrayPatient().subscribe(function (data) { _this.xrayPatients = data; }, function (error) { console.error("Error", error); });
        // page Reload function
        this.filesService.xrayReload().subscribe(
        // Do Nothing
        );
        // define captured data
        this.xray = {
            results: "",
        };
    };
    //=== Opening Xray file ===
    XrayComponent.prototype.openXrayFile = function (id) {
        var _this = this;
        var patientNo = { patientNo: id };
        this.filesService.openXrayFile(patientNo).subscribe(function (data) {
            _this.openedFiles = data;
            _this.notifyService.showInfo("File Opened !", "Info..");
        }, function (error) {
            console.log("Error", error);
            _this.notifyService.showWarning(error.error, "Warnning!");
        });
    };
    //==== Change in Results Area function ======
    XrayComponent.prototype.resultKeyup = function () {
        this.toExamDisabled = false;
    };
    ;
    // ==== Back to Examination =========
    XrayComponent.prototype.onSubmit = function () {
        var _this = this;
        this.filesService.xrayToExam(this.xray).subscribe(function (data) {
            _this.notifyService.showSuccess("Sent Back To Exam..", "Success !");
            setTimeout(function () {
                location.reload();
            }, 2000);
        }, function (error) { console.log(error, "Error!"); });
    };
    XrayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xray',
            template: __webpack_require__(/*! ./xray.component.html */ "./src/app/clinician/xray/xray.component.html"),
            styles: [__webpack_require__(/*! ./xray.component.scss */ "./src/app/clinician/xray/xray.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"],
            src_app_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]])
    ], XrayComponent);
    return XrayComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!------------- Clip Path -------------------------------------->\n<div id=\"bg\"></div>\n<!------------- Header -------------------------------------->\n    <header class=\"fixed-top\">\n\n      <div class=\"container\">\n        <fa name=\"stethoscope\" size=\"2x\"></fa>\n        <h4>the <span class=\"highlight\">kims </span>web</h4>\n\n      </div>\n\n\n    </header>\n\n    \n<!------------- Main -------------------------------------->\n  <main>\n\n<!------------- Title Section -------------------------------------->    \n      <section id=\"title_section\">\n          <form class=\"form\" >\n\n              <h4>Outpatient Medical Web-System</h4>\n              <p>The ultimate way of managinng medical records in a more efficient way.</p>\n    \n            </form>\n            <hr>\n      </section>\n\n<!------------- Login Section -------------------------------------->\n        <section id=\"login_section\">     \n\n            <div>\n    \n                <h4>Login as..</h4>\n                <hr>\n                <p>To use this system, log in as per your profession.</p>\n                <p>If you don't have an account, get signed up by your institution's admin.</p>\n\n<!------------- Tab Form -------------------------------------->\n                <form id=\"\" id=\"login_tabs\" class=\"list-group small mt-1 \" role=\"tablist\">\n\n                  <a id=\"a1\" class=\"list-group-item list-group-item-action active\" data-toggle=\"list\">Clinician</a>\n                    <a id=\"a2\" class=\"list-group-item list-group-item-action\" data-toggle=\"list\">Admin</a>\n\n                </form>\n\n<!------------- Clinician Login Form -------------------------------------->                \n                <form id=\"logcli_form\" class=\"form\" role=\"tabpanel\"\n                #logcli_form=\"ngForm\"\n                (submit)=\"logClinic()\"\n                >\n\n                <input id=\"cliMail\" type=\"email\" class=\"form-control form-control-sm rounded\" \n                #cliMail=\"ngModel\"\n                pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\n                [class.is-invalid]=\"cliMail.invalid && cliMail.touched\"\n                [(ngModel)]=\"logCli.mail\" name=\"mail\" placeholder=\"Email\" required> \n\n                <div *ngIf=\"cliMail.errors && (cliMail.invalid && cliMail.touched)\">\n                    <small class=\"text-danger ml-2\" *ngIf=\"cliMail.errors.required\">Email is Required</small>\n                    <small class=\"text-danger ml-2\" *ngIf=\"cliMail.errors.pattern\">Email should be in this format \"job@gmail.com\"</small>\n                </div>\n              \n                  \n\n\n\n                \n                  <input id=\"cliPassword\" type=\"password\" class=\"form-control form-control-sm\" required\n                  [(ngModel)]=\"logCli.password\" name=\"password\"\n                  #cliPassword=\"ngModel\"\n                  pattern=\".{8,}\"\n                  [class.is-invalid]=\"cliPassword.invalid && cliPassword.touched\"\n                   placeholder=\"Password\">\n\n                   <div *ngIf=\"cliPassword.errors && (cliPassword.invalid && cliPassword.touched)\">\n                      <small *ngIf=\"cliPassword.errors.required\">Password is Required !</small>\n                      <small *ngIf=\"cliPassword.errors.pattern\"> Atleast 8 characters !</small>\n                  </div>\n\n\n                  \n                \n\n\n                  <button type=\"submit\"\n                  [disabled]=\"!logcli_form.valid\" class=\"btn btn-sm\">Login</button>\n                \n                </form>\n\n\n\n\n\n<!------------- Admin Login Form -------------------------------------->   \n\n\n                <form id=\"logadmin_form\" class=\"form\" role=\"tabpanel\"\n                #logadmin_form=\"ngForm\"\n                (submit)=\"logAdmin()\"    \n                >\n\n\n\n                <input id=\"admMail\" type=\"email\" class=\"form-control form-control-sm rounded\" \n                #admMail=\"ngModel\"\n                pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\n                [class.is-invalid]=\"admMail.invalid && admMail.touched\"\n                [(ngModel)]=\"logAdm.mail\" name=\"mail\" placeholder=\"Email\" required> \n                \n                <div *ngIf=\"admMail.errors && (admMail.invalid && admMail.touched)\">\n                    <small class=\"text-danger ml-2\" *ngIf=\"admMail.errors.required\">Email is Required</small>\n                    <small class=\"text-danger ml-2\" *ngIf=\"admMail.errors.pattern\">Email should be in this format \"job@gmail.com\"</small>\n                </div>\n                \n\n                 \n             \n                  \n\n\n                  <input id=\"admPassword\" type=\"password\" class=\"form-control form-control-sm\" required\n                  [(ngModel)]=\"logAdm.password\" name=\"password\"\n                  #admPassword=\"ngModel\"\n                  pattern=\".{8,}\"\n                  [class.is-invalid]=\"admPassword.invalid && admPassword.touched\"\n                   placeholder=\"Password\">\n\n\n                   <div *ngIf=\"admPassword.errors && (admPassword.invalid && admPassword.touched)\">\n                      <small *ngIf=\"admPassword.errors.required\">Password is Required !</small>\n                      <small *ngIf=\"admPassword.errors.pattern\"> Atleast 8 characters !</small>\n                  </div>\n\n\n\n                  \n          \n                   \n\n\n                  <button type=\"submit\"\n                  [disabled]=\"!logadmin_form.valid\" class=\"btn btn-sm\" >Login</button>\n                \n                </form>\n      \n \n            </div>\n                  \n\n        </section>\n\n\n<!------------- Info Section --------------------------------------> \n      <section id=\"info_section\">\n\n        <div id=\"navigation\">\n          <ul class=\"breadcrumb\">\n              \n              <li id=\"about\" class=\"breadcrumb-item\"><a>About</a></li>\n              <li id=\"career\" class=\"breadcrumb-item\"><a>Work With Us</a></li>\n              <li id=\"contact\" class=\"breadcrumb-item\"><a>Contact Us</a></li>\n          </ul>\n        </div>\n<!------------------------ About Form -------------------------------------> \n        <form id=\"about_form\" class=\"form\" >\n\n          <h4 class=\"text-info\">Info</h4>\n\n            <p>\n              TheKimsWeb is a system that enables medical records\n               to be managed in an online platform. It serves health institutions \n               with a secure, effective and efficient way of operating with medical records on a daily basis.\n            </p>\n\n            <p>\n                This is an out-sourced system to Outpatient Health Institution. It has over 80 percent \n                coverage in Africa, and its currently the top trending web system in the technology \n                sector. We have agents around the globe receiving installation request, and our \n                front-line team are always standby to make installations at payment within the shortest time possible. \n                \n              </p>\n              \n              <p>\n                This system is \n                powered and managed by<strong> The Sainez Organization,</strong> named after \n                  <i>Sainez Amon Kimutai.</i>\n                    \n                </p>\n                <h4 class=\"text-info\" >Patners With:</h4>\n                <ul>\n                    <li>ITECH-KENYA</li>\n                    <li>Savannah Informatics</li>\n                    <li>Kenya MOH</li>\n                </ul>\n      </form>\n\n<!--------------------- Career Form --------------------------------------> \n\n      <form id=\"career_form\" class=\"form\" >\n\n        <h4 class=\"text-info\">Career</h4>\n\n        <p>\n          Our mission is to provide secure, \n          effective and efficient healthcare through the \n          best use of information technology. In order to archieve this we \n          teach on the use of technology by offering interniships to graduands and \n          jobs to the best interns.\n        </p>\n        <h4 class=\"text-info\">Available Internships</h4>\n        <ul>\n          <li>Front-End Interns</li>\n          <li>Back-End Interns</li>\n          <li>System Analysis Interns</li>\n          \n        </ul>\n        <i><strong>Note: </strong>All interniships are paid and run for 6 months.</i>\n        <h4 class=\"text-info mt-3\">Job Vacancies</h4>\n        <ul>\n          <li>Sinior Web Designer</li>\n          <li>Testing Programmer</li>\n          <li>Analyst Programmer</li>\n          \n        </ul>\n        \n\n      </form>\n<!---------------------- Contact Form -------------------------------------> \n      <form id=\"contact_form\" class=\"form\">\n        <h4 class=\"text-info\">Find Us:</h4>\n        <p>\n            Our main headquarters is at Kapsabet Town, Kenya, or in any of our branches in Kitale, Eldoret, \n            Kakamega and Kisumu. Please follow us in social media platforms.\n        </p>\n\n        <div id=\"social\" class=\"row\">\n\n          <a class=\"card text-center  col-sm-4 col-xm-12\"><fa name=\"facebook\" size=\"2x\"></fa> thekimsweb</a>\n          <a class=\"card text-center col-sm-4 col-xm-12\"><fa name=\"twitter\" size=\"2x\"></fa> @thekims_kimsweb</a>\n          <a class=\"card text-center col-sm-4 col-xm-12\"><fa name=\"instagram\" size=\"2x\"></fa> @thekimsweb</a>\n          <a class=\"card text-center col-sm-4 col-xm-12\"><fa name=\"envelope\" size=\"2x\"></fa> service@kimsweb.co.ke</a>\n          <a class=\"card text-center col-sm-4 col-xm-12\"><fa name=\"youtube\" size=\"2x\"></fa> thekimsweb.youtube.com</a>\n          <a class=\"card text-center col-sm-4 col-xm-12\"><fa name=\"whatsapp\" size=\"2x\"></fa> +254 718 896 779</a>\n          <a class=\"card text-center col-sm-4 col-xm-12\"><fa name=\"phone\" size=\"2x\"></fa> +254 718 896 779</a>\n  \n\n        </div>\n\n\n        \n\n      </form>\n\n      </section>\n\n\n    </main>\n\n\n  \n\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------- Global -----------------------------*/\n/* Breakpoints: xs: 0,  sm: 576px; md: 768px; lg: 992px; xl: 1200px; */\n#bg {\n  -webkit-clip-path: polygon(100% 0, 100% 50%, 0 100%, 0 100%, 0 0);\n          clip-path: polygon(100% 0, 100% 50%, 0 100%, 0 100%, 0 0);\n  background-color: #35424a;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  z-index: -1; }\n@media (min-width: 768px) {\n    #bg {\n      -webkit-clip-path: polygon(0 0, 75% 0, 55% 100%, 0% 100%);\n              clip-path: polygon(0 0, 75% 0, 55% 100%, 0% 100%); } }\n/*-----------------------------------------------------*/\n.container-fluid, .container {\n  width: 100%;\n  overflow: hidden; }\n/*---------------------------------------------*/\n/*============ Login ===========================*/\nheader {\n  background-color: #35424a;\n  text-align: center;\n  padding: 3px;\n  border-bottom: #e8491d 3px solid;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7); }\nheader fa {\n    position: absolute;\n    top: 7px;\n    left: 5%;\n    color: #e8491d; }\nheader h4 {\n    font-family: Montserrat;\n    font-size: 24px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #17a2b8;\n    text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3); }\nheader h4 span {\n      font-size: 24px;\n      color: #e8491d;\n      text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3); }\nmain #title_section {\n  margin: 50px 0 0 0;\n  padding: 0; }\nmain #title_section form {\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    color: #e8491d; }\nmain #title_section form h4 {\n      font-size: 24px;\n      font-weight: bold;\n      text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);\n      padding: 0;\n      margin: 0; }\nmain #title_section form p {\n      font-size: 15px;\n      text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);\n      padding: 0;\n      margin: 0; }\nmain #title_section hr {\n    margin: 0;\n    background-color: #35424a; }\nmain #login_section {\n  width: 80%;\n  background-color: white;\n  margin: 1em auto;\n  margin-top: 0px;\n  border-radius: 20px;\n  padding: 1em 2em 2em 2em;\n  opacity: 0.9;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7); }\n@media (min-width: 768px) {\n    main #login_section {\n      position: absolute;\n      top: 20%;\n      left: 60%;\n      width: 30%;\n      margin: 1em auto; } }\nmain #login_section form {\n    border-radius: 20px;\n    border: none;\n    padding: 1ex; }\nmain #login_section h4 {\n    color: #17a2b8;\n    font-size: 24px;\n    font-weight: bold;\n    margin-bottom: 0; }\nmain #login_section hr {\n    margin: 0; }\nmain #login_section p {\n    margin: 0 0 .3em 0; }\nmain #login_section #login_tabs {\n    flex-direction: row; }\nmain #login_section #login_tabs a {\n      font-weight: bolder;\n      text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);\n      border-radius: 0;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px; }\nmain #login_section .list-group {\n    padding: 0;\n    margin: 0; }\nmain #login_section .list-group a {\n      padding: 1em 0 0 0;\n      text-align: center;\n      color: #e8491d;\n      font-weight: bolder;\n      font-size: 14px;\n      border: none;\n      background-color: whitesmoke; }\nmain #login_section .list-group #a1.active {\n      background-color: #35424a; }\nmain #login_section .list-group #a2.active {\n      background-color: #35424a; }\nmain #login_section #logcli_form {\n    background-color: #35424a;\n    padding: 0 1em 1em 1em;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    border-radius: 0;\n    border-top-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px; }\nmain #login_section #logcli_form input {\n      border: none;\n      border-bottom: solid #e8491d 2px;\n      margin: 1em 0 0 0;\n      background-color: #35424a;\n      color: #17a2b8; }\nmain #login_section #logcli_form small {\n      margin: 0 0 0 4px;\n      color: red;\n      font-size: 12px; }\nmain #login_section #logcli_form input[type=text], main #login_section #logcli_form input[type=email], main #login_section #logcli_form input[type=tel], main #login_section #logcli_form input[type=password] {\n      width: 10em; }\nmain #login_section #logcli_form button {\n      background-color: #17a2b8;\n      margin: 1em 0 0 0;\n      color: black;\n      width: 10em; }\nmain #login_section #logadmin_form {\n    background-color: #35424a;\n    padding: 0 1em 1em 1em;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    border-radius: 0;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px; }\nmain #login_section #logadmin_form input {\n      border: none;\n      border-bottom: solid #e8491d 2px;\n      margin: 1em 0 0 0;\n      background-color: #35424a;\n      color: #17a2b8; }\nmain #login_section #logadmin_form small {\n      margin: 0 0 0 4px;\n      color: red;\n      font-size: 12px; }\nmain #login_section #logadmin_form input[type=text], main #login_section #logadmin_form input[type=email], main #login_section #logadmin_form input[type=tel], main #login_section #logadmin_form input[type=password] {\n      width: 10em; }\nmain #login_section #logadmin_form button {\n      background-color: #17a2b8;\n      margin: 1em 0 0 0;\n      color: black;\n      width: 10em; }\nmain #info_section {\n  margin: 2em;\n  margin: 0 2em 1em 2em;\n  background-color: white;\n  border-radius: 20px;\n  padding: 1em;\n  opacity: 0.9;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7); }\n@media (min-width: 768px) {\n    main #info_section {\n      position: absolute;\n      top: 16%;\n      width: 50%; } }\nmain #info_section .breadcrumb li a {\n    color: #2c9cdd;\n    cursor: pointer; }\nmain #info_section .breadcrumb li a:hover {\n    color: black;\n    font-weight: bold; }\nmain #info_section form {\n    padding: 1ex;\n    border: none;\n    border-radius: 20px; }\nmain #info_section form h4 {\n      font-size: 14px;\n      font-weight: bold; }\nmain #info_section #contact_form #social a {\n    border: none;\n    margin: 0 0 2em 0; }\nmain #info_section #contact_form #social a fa[name=facebook] {\n      color: #3b5998; }\nmain #info_section #contact_form #social a fa[name=twitter] {\n      color: #00aced; }\nmain #info_section #contact_form #social a fa[name=instagram] {\n      color: #e8491d; }\nmain #info_section #contact_form #social a fa[name=envelope] {\n      color: orange; }\nmain #info_section #contact_form #social a fa[name=youtube] {\n      color: red; }\nmain #info_section #contact_form #social a fa[name=whatsapp] {\n      color: #28a745; }\nmain #info_section #contact_form #social a fa[name=phone] {\n      color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFRoZUNvZGVcXG1lYW5BcHBcXGtpbXNhcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBQTtBQUNBLHNFQUFBO0FBd0NJO0VBQ0ksaUVBQXlEO1VBQXpELHlEQUF5RDtFQUN6RCx5QkFyQ1U7RUFzQ1YsV0FBVztFQUNYLFlBQVk7RUFFWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVcsRUFBQTtBQWZmO0lBT0E7TUFXWSx5REFBaUQ7Y0FBakQsaURBQWlELEVBQUEsRUFFeEQ7QUFFTCx3REFBQTtBQUNBO0VBQ0ksV0FBVztFQUNYLGdCQUFnQixFQUFBO0FBSXhCLGdEQUFBO0FBR0EsaURBQUE7QUFFQTtFQUVJLHlCQWhFYztFQWlFZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdDQUF3QztFQUN4QywwQ0FBeUMsRUFBQTtBQU43QztJQVNRLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLGNBM0VhLEVBQUE7QUErRHJCO0lBZ0JRLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQXRFUztJQXVFVCwyQ0FBMEMsRUFBQTtBQXJCbEQ7TUF3QlksZUFBZTtNQUNmLGNBeEZTO01BeUZULDJDQUEwQyxFQUFBO0FBU3REO0VBTVEsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtBQVBsQjtJQVVZLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGNBL0dTLEVBQUE7QUFrR3JCO01BZ0JnQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLDJDQUEwQztNQUMxQyxVQUFVO01BQ1YsU0FBUyxFQUFBO0FBcEJ6QjtNQXdCZ0IsZUFBZTtNQUNmLDJDQUEwQztNQUMxQyxVQUFVO01BQ1YsU0FBUyxFQUFBO0FBM0J6QjtJQWdDZ0IsU0FBUztJQUNULHlCQWxJRSxFQUFBO0FBaUdsQjtFQTJDUSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixZQXpISTtFQTBISiwwQ0FBeUMsRUFBQTtBQXZIN0M7SUFxRUo7TUFxRGdCLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULFVBQVU7TUFDVixnQkFBZ0IsRUFBQSxFQXVJM0I7QUFoTUw7SUFnRWdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWSxFQUFBO0FBbEU1QjtJQXNFZ0IsY0EzSkM7SUE0SkQsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtBQXpFaEM7SUE0RWdCLFNBQVMsRUFBQTtBQTVFekI7SUErRWdCLGtCQUFrQixFQUFBO0FBL0VsQztJQW9GZ0IsbUJBQW1CLEVBQUE7QUFwRm5DO01BdUZvQixtQkFBbUI7TUFDbkIsMkNBQTBDO01BQzFDLGdCQUFnQjtNQUNoQiw0QkFBNEI7TUFDNUIsNkJBQTZCLEVBQUE7QUEzRmpEO0lBZ0dnQixVQUFVO0lBQ1YsU0FBUyxFQUFBO0FBakd6QjtNQW9Hb0Isa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixjQXhNQztNQXlNRCxtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLFlBQVk7TUFDWiw0QkFBNEIsRUFBQTtBQTFHaEQ7TUE4R29CLHlCQS9NRixFQUFBO0FBaUdsQjtNQWtIb0IseUJBbk5GLEVBQUE7QUFpR2xCO0lBd0hnQix5QkF6TkU7SUEwTkYsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLGdDQUFnQyxFQUFBO0FBaEloRDtNQW9Jb0IsWUFBWTtNQUNaLGdDQUF3QztNQUN4QyxpQkFBaUI7TUFDakIseUJBeE9GO01BeU9FLGNBN05ILEVBQUE7QUFxRmpCO01BMklvQixpQkFBaUI7TUFDakIsVUFBVTtNQUNWLGVBQWUsRUFBQTtBQTdJbkM7TUFnSm9CLFdBQVcsRUFBQTtBQWhKL0I7TUFtSm9CLHlCQXhPSDtNQXlPRyxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLFdBQVcsRUFBQTtBQXRKL0I7SUE4SmdCLHlCQS9QRTtJQWdRRixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsZ0NBQWdDLEVBQUE7QUF0S2hEO01BeUtvQixZQUFZO01BQ1osZ0NBQXdDO01BQ3hDLGlCQUFpQjtNQUNqQix5QkE3UUY7TUE4UUUsY0FsUUgsRUFBQTtBQXFGakI7TUFnTG9CLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsZUFBZSxFQUFBO0FBbExuQztNQXFMb0IsV0FBVyxFQUFBO0FBckwvQjtNQXdMb0IseUJBN1FIO01BOFFHLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osV0FBVyxFQUFBO0FBM0wvQjtFQXFNUSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBbFJJO0VBbVJKLDBDQUF5QyxFQUFBO0FBaFI3QztJQXFFSjtNQStNWSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFVBQVUsRUFBQSxFQXlEakI7QUExUUw7SUFxTlksY0FBd0I7SUFDeEIsZUFBZSxFQUFBO0FBdE4zQjtJQXlORyxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7QUExTnBCO0lBOE5ZLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CLEVBQUE7QUFoTy9CO01BbU9nQixlQUFlO01BQ2YsaUJBQWlCLEVBQUE7QUFwT2pDO0lBNE9vQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7QUE3T3JDO01BZ1B3QixjQUFjLEVBQUE7QUFoUHRDO01BbVB3QixjQUFjLEVBQUE7QUFuUHRDO01Bc1B3QixjQXhWSCxFQUFBO0FBa0dyQjtNQXlQd0IsYUFBYSxFQUFBO0FBelByQztNQTRQd0IsVUFBVSxFQUFBO0FBNVBsQztNQStQd0IsY0FyVkosRUFBQTtBQXNGcEI7TUFrUXdCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tIEdsb2JhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIEJyZWFrcG9pbnRzOiB4czogMCwgIHNtOiA1NzZweDsgbWQ6IDc2OHB4OyBsZzogOTkycHg7IHhsOiAxMjAwcHg7ICovXHJcblxyXG4kY29sb3JzOiAoXHJcbiAgICBiZzogI2MwYzBjMCxcclxuICAgIGZldm9yaXRlOiAjZTg0OTFkLFxyXG4gICAgdGhlbWU6ICMzNTQyNGEsXHJcbiAgICBwcmltYXJ5OiAjMDA3YmZmLFxyXG4gICAgcHJpbWFyeS1saWdodDogbGlnaHRlbigjMDA1REZGLCA0MCUpLFxyXG4gICAgcHJpbWFyeS1kYXJrOiBkYXJrZW4oIzAwNURGRiwgNDAlKSxcclxuICAgIGFjY2VudDogI0ZGRjZCQixcclxuICAgIGdpcmxpc2g6IHJnYigxOTUsIDE1LCAyMDEpLFxyXG4gICAgZm9ybTogbGlnaHRlbigjMzU0MjRhLCA0MCUpLFxyXG4gICAgaW5wdXQ6IGxpZ2h0ZW4oZ3JleSwgNTAlKSxcclxuICAgIGdyYXk6ICM2Yzc1N2QsXHJcbiAgICBncmF5LWRhcms6ICMzNDNhNDAsXHJcbiAgICBzZWNvbmRhcnk6ICM2Yzc1N2QsXHJcbiAgICBzdWNjZXNzOiAjMjhhNzQ1LFxyXG4gICAgaW5mbzogIzE3YTJiOCxcclxuICAgIHdhcm5pbmc6ICNmZmMxMDcsXHJcbiAgICBkYW5nZXI6ICNkYzM1NDUsXHJcbiAgICBsaWdodDogI2Y4ZjlmYSxcclxuICAgIGRhcms6ICMzNDNhNDBcclxuXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gY29sb3IoJGNvbG9yLW5hbWUpe1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMgLCAkY29sb3ItbmFtZSlcclxufVxyXG5cclxuJGRlc2t0b3A6IDc2OHB4O1xyXG4kb3BhY2l0eTogLjk7XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcH0pIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5cclxuICAgICNiZ3tcclxuICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAxMDAlIDUwJSwgMCAxMDAlLCAwIDEwMCUsIDAgMCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IodGhlbWUpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XHJcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCA3NSUgMCwgNTUlIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZCwgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuLyo9PT09PT09PT09PT0gTG9naW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbmhlYWRlciB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IodGhlbWUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogY29sb3IoZmV2b3JpdGUpIDNweCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjcpO1xyXG5cclxuICAgIGZhe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICBjb2xvcjpjb2xvcihmZXZvcml0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcihpbmZvKTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcihmZXZvcml0ZSk7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBNYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxubWFpbiB7XHJcbiAgICAgICAgXHJcbiBcclxuXHJcbiAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVGl0bGUgU2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgICN0aXRsZV9zZWN0aW9ue1xyXG4gICAgICAgIG1hcmdpbjogNTBweCAwIDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6IGNvbG9yKGZldm9yaXRlKTtcclxuXHJcbiAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBocntcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKHRoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbG9naW4gU2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcblxyXG4gICAgI2xvZ2luX3NlY3Rpb257XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAyZW0gMmVtIDJlbTtcclxuICAgICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIC43KTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDYwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFleDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBocntcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgLjNlbSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgI2xvZ2luX3RhYnMge1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7IFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwIDAgMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGZldm9yaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjYTEuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcih0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI2EyLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IodGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDbGluaWNpYW4gbG9nIEZvcm0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcbiAgICAgICAgICAgICNsb2djbGlfZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcih0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGNvbG9yKGZldm9yaXRlKSAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxZW0gMCAwIDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IoaW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbWFsbHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9cGFzc3dvcmRde1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtIDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBZG1pbiBsb2cgRm9ybSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuICAgICAgICAgICAgI2xvZ2FkbWluX2Zvcm0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IodGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7IFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgY29sb3IoZmV2b3JpdGUpIDJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSAwIDAgMDsgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IodGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcihpbmZvKTs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbWFsbHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9cGFzc3dvcmRde1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtIDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluZm8gU2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbiAgICAjaW5mb19zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDJlbTtcclxuICAgICAgICBtYXJnaW46IDAgMmVtIDFlbSAyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuNyk7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDE2JTsgICAgICAgIFxyXG4gICAgICAgICAgICB3aWR0aDogNTAlOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnJlYWRjcnVtYiBsaSBhe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDQ0LCAxNTYsIDIyMSk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdH1cclxuXHRcdC5icmVhZGNydW1iIGxpIGE6aG92ZXJ7XHJcblx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgcGFkZGluZzogMWV4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjb250YWN0X2Zvcm17XHJcbiAgICAgICAgICAgICNzb2NpYWx7XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmYVtuYW1lPWZhY2Vib29rXXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZhW25hbWU9dHdpdHRlcl17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBhY2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmYVtuYW1lPWluc3RhZ3JhbV17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcihmZXZvcml0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZhW25hbWU9ZW52ZWxvcGVde1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmYVtuYW1lPXlvdXR1YmVde1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmYVtuYW1lPXdoYXRzYXBwXXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKHN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmYVtuYW1lPXBob25lXXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcblxyXG59XHJcblxyXG4gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notify.service */ "./src/app/services/notify.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, usersService, notifyService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.notifyService = notifyService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.logCli = {
            mail: "", password: ""
        };
        this.logAdm = {
            mail: "", password: ""
        };
    };
    LoginComponent.prototype.logClinic = function () {
        var _this = this;
        this.usersService.logClinician(this.logCli).subscribe(function (data) {
            window.localStorage.setItem("clinicianToken", data.token);
            window.localStorage.setItem("clinicianUser", data.signedUser);
            _this.router.navigate(["/kimsapp/clinician"]);
        }, function (error) {
            _this.notifyService.showError(error.error, "Error !!");
        });
    };
    LoginComponent.prototype.logAdmin = function () {
        var _this = this;
        this.usersService.logAdmin(this.logAdm).subscribe(function (data) {
            window.localStorage.setItem("adminToken", data.token);
            window.localStorage.setItem("adminUser", data.signedUser);
            _this.router.navigate(["/kimsapp/admin"]);
        }, function (error) {
            _this.notifyService.showError(error.error, "Error !!");
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/files.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/files.service.ts ***!
  \*******************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//--------------------------------
var httpOptions = {
    Headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-type": "aplication/json"
    })
};
//--------------------------------------------------------
var FilesService = /** @class */ (function () {
    //--------------------------------------------------------
    function FilesService(http) {
        this.http = http;
        //--------- MAIN URL -----------------------------
        this._url = "http://127.0.0.1:8040/";
    }
    // ADMISSION ROUTER
    //-------------Post Admission --------------------------------------
    FilesService.prototype.admitPatient = function (record) {
        return this.http.post(this._url + "admission", record);
    };
    // EXAMINATION ROUTER
    //------------- List Admitted Patients ---------------------------
    FilesService.prototype.listAdmitPatient = function () {
        return this.http.get(this._url + "admission");
    };
    //-------------- Post Open Admission File
    FilesService.prototype.openAdmFile = function (record) {
        return this.http.post(this._url + "openadmissionfile", record);
    };
    //-------------- Examination on Reload ------------------
    FilesService.prototype.examinationReload = function () {
        return this.http.delete(this._url + "examinationreload");
    };
    //--------------- Delete File ----------------------------
    FilesService.prototype.deleteFile = function () {
        return this.http.delete(this._url + "deletefile");
    };
    //--------------- To Lab ----------------------------
    FilesService.prototype.tolab = function (record) {
        return this.http.post(this._url + "tolab", record);
    };
    //------------- List Patients from lab ---------------------------
    FilesService.prototype.listPatientfromLab = function () {
        return this.http.get(this._url + "listfromlab");
    };
    //-------------- open File from Lab --------------------
    FilesService.prototype.openFilefromLab = function (record) {
        return this.http.post(this._url + "openfilefromlab", record);
    };
    //--------------- To Xray ----------------------------
    FilesService.prototype.toxray = function (record) {
        return this.http.post(this._url + "toxray", record);
    };
    //------------- List  Patients from xray ---------------------------
    FilesService.prototype.listPatientfromXray = function () {
        return this.http.get(this._url + "listfromxray");
    };
    //-------------- Open File from Xray ---------------------------------
    FilesService.prototype.openFilefromXray = function (record) {
        return this.http.post(this._url + "openfilefromxray", record);
    };
    //--------------- To Pharmacy ----------------------------
    FilesService.prototype.topharmacy = function (record) {
        return this.http.post(this._url + "topharmacy", record);
    };
    FilesService.prototype.topharm = function (record) {
        return this.http.post(this._url + "topharm", record);
    };
    // LAB ROUTER
    //------------- List ToLab Patients ---------------------------
    FilesService.prototype.listLabPatient = function () {
        return this.http.get(this._url + "listtolab");
    };
    //-------------- Open LabFile
    FilesService.prototype.openLabFile = function (record) {
        return this.http.post(this._url + "openlabfile", record);
    };
    //-------------- Lab on Reload ------------------
    FilesService.prototype.labReload = function () {
        return this.http.delete(this._url + "labreload");
    };
    //--------------- Lab to exam ----------------------------
    FilesService.prototype.labToExam = function (record) {
        return this.http.post(this._url + "labtoexam", record);
    };
    // XRAY ROUTER
    //------------- List ToLab Patients ---------------------------
    FilesService.prototype.listXrayPatient = function () {
        return this.http.get(this._url + "listtoxray");
    };
    //-------------- Open Xray File
    FilesService.prototype.openXrayFile = function (record) {
        return this.http.post(this._url + "openxrayfile", record);
    };
    //-------------- Xray on Reload ------------------
    FilesService.prototype.xrayReload = function () {
        return this.http.delete(this._url + "xrayreload");
    };
    //--------------- Xray to exam ----------------------------
    FilesService.prototype.xrayToExam = function (record) {
        return this.http.post(this._url + "xraytoexam", record);
    };
    // PHARMACY ROUTER 
    //------------- List Pharmacy Patients ---------------------------
    FilesService.prototype.listPharmacyPatient = function () {
        return this.http.get(this._url + "listpharmacy");
    };
    //-------------- Open Pharmacy File
    FilesService.prototype.openPharmacyFile = function (record) {
        return this.http.post(this._url + "openpharmacyfile", record);
    };
    //-------------- Pharmacy on Reload ------------------
    FilesService.prototype.pharmacyReload = function () {
        return this.http.delete(this._url + "pharmacyreload");
    };
    //--------------- save File ----------------------------
    FilesService.prototype.saveFile = function (record) {
        return this.http.post(this._url + "savefile", record);
    };
    FilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //--------------------------------------------------------
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FilesService);
    return FilesService;
}());

//------------------------------------------------------


/***/ }),

/***/ "./src/app/services/notify.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/notify.service.ts ***!
  \********************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



//---------------------------------------------------
var NotifyService = /** @class */ (function () {
    //---------------------------------------------------
    function NotifyService(toastr) {
        this.toastr = toastr;
    }
    //------------- Toastr Notifications-------------------
    NotifyService.prototype.showSuccess = function (message, title) {
        this.toastr.success(message, title);
    };
    NotifyService.prototype.showError = function (message, title) {
        this.toastr.error(message, title);
    };
    NotifyService.prototype.showInfo = function (message, title) {
        this.toastr.info(message, title);
    };
    NotifyService.prototype.showWarning = function (message, title) {
        this.toastr.warning(message, title);
    };
    NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //--------------------------------------------------
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], NotifyService);
    return NotifyService;
}());

//----------------------------------------------------


/***/ }),

/***/ "./src/app/services/stats.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/stats.service.ts ***!
  \*******************************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//--------------------------------
var httpOptions = {
    Headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-type": "aplication/json"
    })
};
//-------------------------------------------------
var StatsService = /** @class */ (function () {
    //--------------------------------------------------------
    function StatsService(http) {
        this.http = http;
        //--------- MAIN URL -----------------------------
        this._url = "http://127.0.0.1:8040/";
    }
    // Monitor
    StatsService.prototype.monitor = function () {
        return this.http.get(this._url + "monitor");
    };
    // Medical Records database
    StatsService.prototype.medicalDb = function () {
        return this.http.get(this._url + "medicaldb");
    };
    //-------------- Open medical file -----------------------------
    StatsService.prototype.openmedical = function (record) {
        return this.http.post(this._url + "openmedical", record);
    };
    //--------------- Reload MED Db ----------------------------
    StatsService.prototype.onreloadMED = function () {
        return this.http.delete(this._url + "medonreload");
    };
    //--------------- Delete File ----------------------------
    StatsService.prototype.deleteMED = function () {
        return this.http.delete(this._url + "deletemedical");
    };
    // User database
    StatsService.prototype.userDb = function () {
        return this.http.get(this._url + "userdb");
    };
    //-------------- Open user Clinician -----------------------
    StatsService.prototype.openuserclinician = function (record) {
        return this.http.post(this._url + "openuserclinician", record);
    };
    //-------------- Open user Admin  -----------------------
    StatsService.prototype.openuseradmin = function (record) {
        return this.http.post(this._url + "openuseradmin", record);
    };
    //--------------- User db reload ----------------------------
    StatsService.prototype.onreloadUSER = function () {
        return this.http.delete(this._url + "useronreload");
    };
    //--------------- Delete USER ----------------------------
    StatsService.prototype.deleteUSERCLI = function () {
        return this.http.delete(this._url + "deleteusercli");
    };
    StatsService.prototype.deleteUSERADM = function () {
        return this.http.delete(this._url + "deleteuseradm");
    };
    StatsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //---------------------------------------------------
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StatsService);
    return StatsService;
}());

//------------------------------------------------------


/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//--------------------------------
var httpOptions = {
    Headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-type": "aplication/json",
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "Access-Control-Allow-Headers": "Authorization, Lang"
    })
};
//---------------------------------
var UsersService = /** @class */ (function () {
    //--------------------------------------------------------
    function UsersService(http) {
        this.http = http;
        //--------- MAIN URL -----------------------------
        this._url = "http://127.0.0.1:8040/";
    }
    //-------------Post Clinician Registration -----------------------------
    UsersService.prototype.regClinician = function (record) {
        return this.http.post(this._url + "regclinician", record);
    };
    //-------------Post Clinician Login -----------------------------
    UsersService.prototype.logClinician = function (record) {
        return this.http.post(this._url + "logclinician", record);
    };
    //-------------Post Admin Registration -----------------------------
    UsersService.prototype.regAdmin = function (record) {
        return this.http.post(this._url + "regadmin", record);
    };
    //-------------Post Clinician Login -----------------------------
    UsersService.prototype.logAdmin = function (record) {
        return this.http.post(this._url + "logadmin", record);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //--------------------------------------------------------
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());

//--------------------------------------------------------


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

module.exports = __webpack_require__(/*! C:\TheCode\meanApp\kimsapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
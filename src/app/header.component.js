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
var core_1 = require('@angular/core');
var HeadercompComponent = (function () {
    function HeadercompComponent() {
    }
    HeadercompComponent.prototype.ngOnInit = function () {
    };
    HeadercompComponent = __decorate([
        core_1.Component({
            selector: 'headercomp',
            template: " <div id=header>\n                <h1>Tamplate-o-mania </h1> \n                </div>\n                <div id=\"navig-bar\">\n            \t\t<ul type=\"none\" class=\"navbar\">\n                        li\n                        <a routerLink= \"/Home\" routerLinkActive=\"active\" > Home </a>\n            \t\t\t<a routerLink= \"/free-template\" routerLinkActive=\"active\" > Free Template </a>\n                        <a routerLink= \"/premium-template\" routerLinkActive=\"active\" > Premium Template </a>\n            \t\t</ul>\n            \t\t<ul type=\"none\" class=\"navbar\" style=\"float: right; margin-right: 30px;\">\n            \t\t\t<li><a href=\"#\">Login</a></li>\t\t\t\n            \t\t</ul>\n                    li  div\n           \n            \t</div>\n                    div \n                <router-outlet></router-outlet>\n              "
        }), 
        __metadata('design:paramtypes', [])
    ], HeadercompComponent);
    return HeadercompComponent;
}());
exports.HeadercompComponent = HeadercompComponent;
//# sourceMappingURL=header.component.js.map
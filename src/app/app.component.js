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
var TasksComponent = (function () {
    function TasksComponent() {
        this.sample = 978289;
        this.toggle = true;
    }
    TasksComponent.prototype.ngOnInit = function () { };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            template: "<h2 [class.green]=\"toggle\" >this is an tasks</h2>\n            \n            <span>{{ sample }}</span>\n            ",
            styles: [".green{ color: green;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular2';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello {{name}}</h1> \n             \n             <tasks> </tasks>\n          ",
            styles: ['h1{color: red;}']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
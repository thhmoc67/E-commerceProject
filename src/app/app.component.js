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
/*--------------------------Initial component---------------------*/
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular2';
        this.sample = "Hello";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/html/app-component.html',
            styleUrls: ['resources/css/styles.css',
                'resources/bootstrap/css/bootstrap.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/* ---------------------TaskServices----------------- */
var TaskServices = (function () {
    function TaskServices() {
        this.tasks = ["First", "Second", "Third", "Fourth"];
    }
    TaskServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TaskServices);
    return TaskServices;
}());
exports.TaskServices = TaskServices;
var TasksComponent = (function () {
    function TasksComponent(TaskServices) {
        this.TaskServices = TaskServices;
    }
    TasksComponent.prototype.ngOnInit = function () { };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            providers: [TaskServices],
            template: "<!-- <h2 [class.green]=\"toggle\" >this is an tasks</h2>\n            {{TaskServices.tasks | json}}      \n            <ul>\n                <li *ngFor = \" let tasks of TaskServices.tasks \">\n                {{tasks}}\n                </li>\n            </ul> -->\n            ",
            styles: [".green{ color: green;}  "]
        }), 
        __metadata('design:paramtypes', [TaskServices])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
/*----------------------*/
//# sourceMappingURL=app.component.js.map
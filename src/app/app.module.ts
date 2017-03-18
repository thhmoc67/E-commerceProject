import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent, TasksComponent}  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,TasksComponent],
  bootstrap:    [ AppComponent,TasksComponent ],

})
export class AppModule { }


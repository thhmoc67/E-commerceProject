import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, TasksComponent}  from './app.component';
import { HeadercompComponent } from './header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,TasksComponent,HeadercompComponent],
  bootstrap:    [ AppComponent,TasksComponent ],

})
export class AppModule { }
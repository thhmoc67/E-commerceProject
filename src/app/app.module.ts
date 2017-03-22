import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './nav-route.module';

import { AppComponent, TasksComponent}  from './app.component';
import { HeadercompComponent } from './header.component';
import { HomeComponent  } from './home.component';
import { pageNotFoundComponent } from './Error404.component';
import { freeTemplateComponent } from './freeTemplate.component';
import { premiumTemplateComponent } from './premiumTemplate.component';



@NgModule({
  imports:      [ 
                  BrowserModule, 
                  FormsModule,
                  AppRoutingModule
                ],
  declarations: [ 
                  AppComponent,
                  TasksComponent,
                  HeadercompComponent,
                  HomeComponent,
                  freeTemplateComponent,
                  premiumTemplateComponent,
                  pageNotFoundComponent
                ],
  bootstrap:    [ 
                  AppComponent,
                  TasksComponent,

                ],

})
export class AppModule { }
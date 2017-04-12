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
import { FooterComponent } from './footer.component';
import { LoadersComponent } from "./loaders.component";


import { HomeModule } from './home/home.module';



@NgModule({
  imports:      [ 
                  BrowserModule, 
                  FormsModule,
                  HomeModule,
                  AppRoutingModule
                ],
  declarations: [ LoadersComponent,
                  AppComponent,
                  
                  TasksComponent,
                  HeadercompComponent,
                  HomeComponent,
                  freeTemplateComponent,
                  premiumTemplateComponent,
                  pageNotFoundComponent,
                  FooterComponent,
                  
                
                ],
  bootstrap:    [ 
                  AppComponent,
                  TasksComponent
                  
                ],

})
export class AppModule { }
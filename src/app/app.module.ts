import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent, TasksComponent}  from './app.component';
import { HeadercompComponent } from './header.component';
import { HomeComponent  } from './home.component';
import { pageNotFoundComponent } from './404.component';
import { freeTemplateComponent } from './freeTemplate.component';
import { premiumTemplateComponent } from './premiumTemplate.component';

const appRoutes: Routes = [
  { path: '/home', component: HomeComponent },
  { path: '/free-template', component: freeTemplateComponent },
  { path: '/premium-template', component: premiumTemplateComponent },

  { path: '**', component: pageNotFoundComponent },
  { path: '', redirectTo:"/home", pathMatch:"full" }
];

export const appRouting = RouterModule.forRoot(appRoutes);

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  FormsModule 
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
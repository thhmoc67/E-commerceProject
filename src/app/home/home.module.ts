import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

import { HomeService } from './home.service';

import { HomeRoutingModule } from './home-routing.module';
@NgModule({
    imports: [ 
               CommonModule,
               FormsModule,
               HomeRoutingModule
             ],
    declarations: [ 
                    HomeComponent,
                    AboutComponent   
                 ],
    providers: [ 
                HomeService
               ]
})
export class HomeModule { }

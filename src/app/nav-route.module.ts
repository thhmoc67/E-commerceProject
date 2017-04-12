import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { pageNotFoundComponent } from './Error404.component';
import { freeTemplateComponent } from './freeTemplate.component';
import { premiumTemplateComponent } from './premiumTemplate.component';
import { HomeComponent } from './home.component';



const appRoutes: Routes = [
  
  { path: 'free-template', component: freeTemplateComponent },
  { path: 'premium-template', component: premiumTemplateComponent },

  { path: '**', component:  HomeComponent},
  { path: '', redirectTo:"./home", pathMatch:"full" }  
]; 

export const appRouting = RouterModule.forRoot(appRoutes);

@NgModule({
    
    imports: [ 
                RouterModule.forRoot(appRoutes)  
             ],
    exports: [
                RouterModule  
             ]
})
export class AppRoutingModule {}


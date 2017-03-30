import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

const HomeRoutes: Routes = [
    
   { path: 'home', component: HomeComponent }
   
];

export const appRouting = RouterModule.forRoot(HomeRoutes);

@NgModule({
    
    imports: [ 
              RouterModule.forChild(HomeRoutes) 
     ],
     exports:[
              RouterModule
     ]
    
})
export class HomeRoutingModule {}
import { Component, OnInit } from '@angular/core';

@Component({
    
    selector: 'headercomp',
    template: ` <div id=header>
                <h1>Tamplate-o-mania </h1> 
                </div>
                <div id="navig-bar">
            		<ul type="none" class="navbar">
                        li
                        <a routerLink= "/Home" routerLinkActive="active" > Home </a>
            			<a routerLink= "/free-template" routerLinkActive="active" > Free Template </a>
                        <a routerLink= "/premium-template" routerLinkActive="active" > Premium Template </a>
            		</ul>
            		<ul type="none" class="navbar" style="float: right; margin-right: 30px;">
            			<li><a href="#">Login</a></li>			
            		</ul>
                    li  div
           
            	</div>
                    div 
                <router-outlet></router-outlet>
              `
})
export class HeadercompComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}
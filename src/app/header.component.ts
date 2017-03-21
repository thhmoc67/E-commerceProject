import { Component, OnInit } from '@angular/core';

@Component({
    
    selector: 'headercomp',
    template: ` <div id=header>
                <h1>Tamplate-o-mania </h1> 
                </div>
                <div id="navig-bar">
            		<ul type="none" class="navbar">
            			<li><a href="#">Home</a></li>
            			<li><a href="#">Free Tamplate</a></li>
            			<li><a href="#">Premium Template</a></li>
            			
            		</ul>
            		<ul type="none" class="navbar" style="float: right; margin-right: 30px;">
            			<li><a href="#">Login</a></li>			
            		</ul>
            
            	</div>
              `
})
export class HeadercompComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector:'tasks',
  template:`<h2 [class.green]="toggle" >this is an tasks</h2>
            
            <span>{{ sample }}</span>
            `,
  styles: [".green{ color: green;}"]
})

export class TasksComponent implements OnInit{
  constructor(){ }
  sample: number= 978289;
  toggle: boolean= true;
  ngOnInit(){ }
}

@Component({
  selector: 'my-app',

  template: `<h1>Hello {{name}}</h1> 
             
             <tasks> </tasks>
          `,
  styles: ['h1{color: red;}']
})

export class AppComponent  {
  name = 'Angular2';
  mynumber: number ;
}



import { Component, OnInit, Injectable } from '@angular/core';

/*--------------------------Initial component---------------------*/
@Component({
  selector: 'my-app',
  templateUrl: 'app/html/app-component.html',
  styleUrls:['resources/css/styles.css',
                'resources/bootstrap/css/bootstrap.css'
                ]
      
  
})

export class AppComponent  {
  name = 'Angular2';
  sample: string="Hello"; 
  mynumber: number ;
}

/* ---------------------TaskServices----------------- */
@Injectable()
export class TaskServices{
  tasks= ["First" , "Second", "Third", "Fourth"];
}

@Component({
  selector:'tasks',
  providers:[ TaskServices],
  template:`<!-- <h2 [class.green]="toggle" >this is an tasks</h2>
            {{TaskServices.tasks | json}}      
            <ul>
                <li *ngFor = " let tasks of TaskServices.tasks ">
                {{tasks}}
                </li>
            </ul> -->
            `,
  styles: [".green{ color: green;}  "]
})

export class TasksComponent implements OnInit{
  constructor( public TaskServices: TaskServices){ }
 
  ngOnInit(){ }
}
/*----------------------*/


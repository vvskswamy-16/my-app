import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isValid:boolean=false;
  
  age:number=26;

  ages:number[]=[10,20,30,40,50];

  states:string[]=['AndhraPradesh','Telangana',"Karnataka"];

  users:any=[
    {name:'vvs',age:26},
    {name:'kohli',age:36},
    {name:'pspk',age:53},
    {name:'virat',age:35}
  ];
  products:any=[
    {name:'pen',price:10,rating:3.5},
    {name:'laptop',price:49999,rating:4.3},
    {name:'mobile',price:19999,rating:4.7}
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  age : number=25;
  name : string='vvs';
  phone : string='+91';
  isValid:boolean=true;

  submit(){
    alert("sumbitted successfully...!!");
  }

  typing(){
    alert("typing");
  }
}

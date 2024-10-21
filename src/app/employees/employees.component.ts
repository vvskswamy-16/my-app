import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  name: string = "";
  experience: number = 0;
  package: number = 0;
  role: string = "";
  srch:string="";
  i:number=1;
  employees = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' }
  ]
  submit() {
    let employee={
      name:this.name,
      experience:this.experience,
      package:this.package,
      role:this.role,
      
    }
    this.employees.push(employee);
  }
  delete(i:number){
    this.employees.splice(i,1);
  }
 
  hike(){
   this.employees=this.employees.map(a=>{
    a.package=a.package+0.2*a.package;
    return a;
   })
  }
  bonus(){
    this.employees=this.employees.map(a=>{
      a.package=a.package+30000;
      return a;
     })
  }
  pkglh(){
    this.employees.sort((a,b)=>a.package-b.package);
  }
  pkghl(){
    this.employees.sort((a,b)=>b.package-a.package);

  }
  explh(){
    this.employees.sort((a,b)=>a.experience-b.experience);

  }
  exphl(){
    this.employees.sort((a,b)=>b.experience-a.experience);
  }
  expenditure(){
     let exp=this.employees.reduce((sum,a)=>sum+a.package,0);
    alert("Total : "+exp);
  }
  search(){
    this.employees=this.employees.filter(a=>a.name.includes(this.srch));
  }
  totalEmployees(){
    alert("Total Employees : "+this.employees.length);
  }
}

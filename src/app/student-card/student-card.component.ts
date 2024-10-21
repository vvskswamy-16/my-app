import { Component } from '@angular/core';
import { StudentFormService } from '../student-form.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  students:any=[];
  term:string="";
  column:string="";
  order:string="";
  public page:number=1;
  public limit:number=1;
  search(){
    this._studentFormService.getSearchedStudents(this.term).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  constructor(private _studentFormService:StudentFormService){
    _studentFormService.getStudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  delete(id:string){
    this._studentFormService.deleteStudent(id).subscribe(
      (data:any)=>{
        alert("Deleted successfully..!");
        location.reload();
      },
      (err:any)=>{
        alert(err.error)
      }
    )
  }
  sort(){
    this._studentFormService.getSortedStudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  pagenation(){
    this._studentFormService.getPagedStudents(this.limit,this.page).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
}

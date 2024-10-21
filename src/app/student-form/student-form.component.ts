import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentFormService } from '../student-form.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  
     public sForm:FormGroup=new FormGroup({
      name:new FormControl(),
      phone:new FormControl(),
      city:new FormControl(),
      dob:new FormControl(),
      profile_picture:new FormControl(),
      email:new FormControl(),
      school_logo:new FormControl(),
      school_name:new FormControl(),
      school_city:new FormControl(),
      school_pin:new FormControl()
    });
    constructor(private _studentFormService:StudentFormService){};
    submit(){
      console.log(this.sForm);
      this._studentFormService.addStudentDetails(this.sForm.value).subscribe(
        (data:any)=>{
          alert("Created successfully...!!");
        },
        (err:any)=>{
          alert("err.error");
        }
      )
    }
}

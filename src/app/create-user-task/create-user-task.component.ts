import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-task',
  templateUrl: './create-user-task.component.html',
  styleUrls: ['./create-user-task.component.css']
})
export class CreateUserTaskComponent {
  public userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    class: new FormControl('',[Validators.required,Validators.min(0),Validators.max(10)]),
    fatherName: new FormControl(),
    email: new FormControl('',[Validators.required,Validators.email]),
    dob: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl('',Validators.required),
      pincode: new FormControl()
    }),
    company: new FormGroup({
      name: new FormControl(),
      package: new FormControl('',[Validators.required,Validators.min(1000000),Validators.max(2500000)])
    }),
    marks: new FormArray([]),
    type: new FormControl()

  })
  get marksFormArray() {
    return this.userForm.get('marks') as FormArray;
  }
  addMarks() {
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)])
      })
    )
  }
  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholor'){
          this.userForm.addControl('busFee',new FormControl());
          this.userForm.removeControl('hostelFee');
        }
        else{
          this.userForm.addControl('hostelFee',new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    )
  }

  delete(i:number){
    this.marksFormArray.removeAt(i);
  }
  submit() {
    this.userForm.markAllAsTouched();
    console.log(this.userForm.value);
  }
}

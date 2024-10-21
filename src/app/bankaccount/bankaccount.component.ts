import { Component } from '@angular/core';
import { BankaccountService } from '../bankaccount.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankaccountComponent {
   backAccounts:any=[];
   term:string="";
  column:string="";
  order:string="";
  public page:number=1;
    constructor(private _bankaccountService:BankaccountService){
      _bankaccountService.getBankAccount().subscribe(
        (data:any)=>{
          this.backAccounts=data;
        },
        (err:any)=>{
          alert("Internal Server Error ");
        }
      )
      }
      public bankForm: FormGroup=new FormGroup({
        account_name: new FormControl(),
        available_balance: new FormControl(),
        account_number:new FormControl(),
        city:new FormControl(),
        profie_picture:new FormControl(),
        
      });
      submit(){
        console.log(this.bankForm);
        this._bankaccountService.createAccount(this.bankForm.value).subscribe(
          (data:any)=>{
            alert("Created successfully...!!");
          },
          (err:any)=>{
            alert("err.error");
          }
        )
      }
      delete(id:string){
        this._bankaccountService.deleteAccount(id).subscribe(
          (data:any)=>{
            alert("Deleted successfully..!");
            location.reload();
          },
          (err:any)=>{
            alert(err.error)
          }
        )
      }
      
      search(){
        this._bankaccountService.getFilteredAccounts(this.term).subscribe(
          (data:any)=>{
            this.backAccounts=data;
          },
          (err:any)=>{
            alert(err.error);
          }
        )
      }
      sort(){
        this._bankaccountService.getSortedAccounts(this.column,this.order).subscribe(
          (data:any)=>{
            this.backAccounts=data;
          },
          (err:any)=>{
            alert(err.error);
          }
        )
      }
      pagination(){
        -this._bankaccountService.getPagedAccounts(this.page).subscribe(
          (data:any)=>{
            this.backAccounts=data;
          },
          (err:any)=>{
            alert(err.error);
          }
        )
      }
    }





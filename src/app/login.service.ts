import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClinet:HttpClient) { }
    doLogin(data:any):Observable<any>{
      return this._httpClinet.post("https://reqres.in/api/login",data);
    }
}

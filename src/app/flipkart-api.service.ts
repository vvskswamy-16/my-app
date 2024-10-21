import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartApiService {

  constructor(private _httpClient:HttpClient) { }
  getDetails():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products");
  }
}

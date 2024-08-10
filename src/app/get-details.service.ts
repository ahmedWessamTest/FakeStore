import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {

  constructor(private _HttpClient:HttpClient) { }
  getDetials(id:string | null | undefined): Observable<any> {
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`);
  }
}

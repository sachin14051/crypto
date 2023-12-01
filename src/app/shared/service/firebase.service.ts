import { Injectable } from '@angular/core';
import { Iasset } from '../model/model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  selfBackend:string =`${environment.firebaseUrl}/coins.json`;
  assets:Array<Iasset> =[{quantity:1,coinName:"bitcoin"}];
  constructor(private _http:HttpClient) { }

  addPortFolio(obj:Iasset){
    return this._http.post(this.selfBackend,obj)
 }

 getPortFolio(){
  return this._http.get(this.selfBackend)
 }
}

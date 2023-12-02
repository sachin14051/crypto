import { Injectable, OnInit } from '@angular/core';
import { Iuser } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
userData:Array<Iuser>=[
  {email:"admin", password:"admin"},
  {email:"user", password:"user"},

]
  constructor() { } 
 
   isAuthenticated(obj:Iuser){
    return this.userData.forEach((ele)=>{
       if(ele.email === obj.email && ele.password === obj.password){
             localStorage.setItem("authUser",JSON.stringify("user"));
             
       }
     })
   }




}

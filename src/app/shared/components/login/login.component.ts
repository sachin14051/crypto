import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   
  
   signInForm !:FormGroup
  constructor(private _router:Router) { }



  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email:new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }
  onSignIn(){
  if(this.signInForm.valid){
    let obj ={
      email : this.signInForm.controls['email'].value,
      password : this.signInForm.controls['password'].value
   }
   console.log( obj);
  }
    
    this.signInForm.reset()
    this._router.navigate(['dashboard'])
  }
}

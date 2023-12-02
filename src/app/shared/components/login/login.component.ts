import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   
  
   signInForm !:FormGroup
  constructor(private _router:Router,
             private _authentication:AuthenticationService) { }



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
   this._authentication.isAuthenticated(obj)
   console.log( obj);
  }
    
    // this.signInForm.reset()
    this._router.navigate(['dashboard'])
  }
}

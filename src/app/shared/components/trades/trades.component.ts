import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IportFolio } from '../../model/model';
import { CryptoService } from '../../service/crypto.service';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent implements OnInit {
  qty!:number;
  id!:string
  tradeForm!: FormGroup
  constructor(private _route : Router,
               private _router: ActivatedRoute,
               private _cryptoService:CryptoService) { }

  ngOnInit(): void {
    this.inputtrades();
   this.id = this._router.snapshot.params['id']
  }

  inputtrades() {
    this.tradeForm = new FormGroup({
      quantity: new FormControl(null, Validators.required)
    })
  }

  submitTrade() {
    if(this.tradeForm.valid){
      this.qty=this.tradeForm.value.quantity
      let obj : IportFolio = {
        cryptoBuyName :this.id,
        quantity :this.qty,
        id:this._cryptoService.generateUuid()
      }
      localStorage.setItem("obj",JSON.stringify(obj));
    }
    this.tradeForm.reset()
    this._route.navigate(['portfolio' ])
  }
  


}

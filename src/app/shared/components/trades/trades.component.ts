import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../../service/firebase.service';
import { Iasset } from '../../model/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent implements OnInit {

  tradeForm!: FormGroup
  constructor(private _matDia: MatDialog,
    private _firebase: FirebaseService,
    private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this.inputtrades();


  }

  inputtrades() {
    this.tradeForm = new FormGroup({
      quantity: new FormControl(null, Validators.required)
    })
  }

  submitTrade() {
    console.log(this.tradeForm.value.quantity)


    this.tradeForm.reset();
    this._matDia.closeAll()

  }

  onBuyButton() {

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Chart,registerables} from 'node_modules/chart.js';
import { CryptoService } from '../../service/crypto.service';
import { Icoins } from '../../model/model';
Chart.register(...registerables)

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
id! :string;
coinData!:Icoins 
  constructor(private _route:ActivatedRoute,
              private _cryptoService:CryptoService) { }

  ngOnInit(): void {
    this.id =this._route.snapshot.params['id'];
    this.getcoin()
    
  }
  getcoin(){
    this._cryptoService.getCurrencyById(this.id).subscribe(res=>this.coinData=res)
  }

 
}

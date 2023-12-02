// import Chart from 'chart.js/auto'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Chart} from 'node_modules/chart.js';
import { CryptoService } from '../../service/crypto.service';
import { Icoins } from '../../model/model';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
id! :string;
coinData!:Icoins ;
graphData:any;
currency:string= "INR";
days:number=1
data:any[]=[];

  constructor(private _route:ActivatedRoute,
              private _cryptoService:CryptoService) { }

  ngOnInit(): void {
    this.getGraphData(this._route.snapshot.params['id']);

       
    this.getcoin()
   
    
  }
  getcoin(){
    this._cryptoService.getCurrencyById(this.id).subscribe(res=>this.coinData=res)
  }

  getGraphData(id1:string){
    
    this._cryptoService.getGrpahicalCurrencyData(id1,this.currency,this.days).subscribe(res =>{
      // console.log(res);
      // console.log(res.prices);
      this.data=res.prices;
      // console.log(this.data);
      this.chartGenerator();

    })
  }

  chartGenerator() {
    const data=this.data;
    new Chart(
      document.getElementById('acquisitions') as  HTMLCanvasElement,
      {
        type: 'line',
        data: {
          labels: data.map(row =>  new Date(row[0]).toLocaleDateString()),
          datasets: [
            {
              label: 'chart by year',
              data: data.map(row => row[1])
            }
          ]
        }
      }
    );
  }
}

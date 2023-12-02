import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../service/crypto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
   allCoinsData:any
  constructor(private _api:CryptoService,
             
              private _router:Router) { }

  ngOnInit(): void {
    this._api.getAllCoins().subscribe((res:any)=>{
      return this.allCoinsData = res
    })
  }
  onBuy(id:string){
  
  }

  isLogout(){
    localStorage.removeItem("authUser");
    this._router.navigate(['/'])
  }

  onSell(){
  

  }

}

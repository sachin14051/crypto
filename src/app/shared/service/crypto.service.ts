import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iasset } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {


  allCoinsUrl:string = `${environment.baseUrl}`

  constructor(private _http:HttpClient) { }

  getAllCoins():Observable<string>{
  return this._http.get<string>(this.allCoinsUrl)
  }

    getCurrencyById(coinId:string){
   return this._http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
 }

   getGrpahicalCurrencyData(coinId:string, currency:string, days: number){
     return this._http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
   }



  // getCurrency(currency:string){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  // }
  // getTrendingCurrency(currency:string){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  // }
 

}

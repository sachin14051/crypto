import { Component, OnInit } from '@angular/core';
import { IportFolio } from '../../model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
 assets:Array<IportFolio> =[]
  constructor(private _router : Router) { }

  ngOnInit(): void {
 this.data()
    
  }

  data(){
    let obj = localStorage.getItem("obj")
    if( obj){
       this.assets.push(JSON.parse(obj))
      }
   
  }
  ondashboard(){
    this._router.navigate(['/dashboard'])
  }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
 assets:any
  constructor(private _firebase:FirebaseService) { }

  ngOnInit(): void {
   

    
  }

}

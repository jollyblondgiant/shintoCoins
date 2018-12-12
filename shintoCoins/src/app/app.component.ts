import { Component } from '@angular/core';
import { ShintoService } from './shinto.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ShintoCoins';
  coins : number
  coinValue: number
  constructor(private _shintoService: ShintoService){

  }
  ngOnInit(){
  this.coins = this._shintoService.coins
  this.coinValue = this._shintoService.coinValue
  }
}

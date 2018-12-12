import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buyField 
  coins: number
  coinValue: number

constructor(private _shintoService: ShintoService) { }
  ngOnInit() {
  }
buyCoins(){
  console.log(this.buyField)
  for(let idx = 0; idx < this.buyField; idx++){
  this._shintoService.addCoin()
  this._shintoService.addCoinValue()
  this._shintoService.recordLedger("Bought", this.buyField, this._shintoService.coinValue)
  }

}
}

import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  sellField = 0
  coins: number
  coinValue: number

constructor(private _shintoService: ShintoService) { }
  ngOnInit() {
  }
sellCoins(){
  if(this.sellField < this._shintoService.coins){
  console.log(this.sellField)
  for(let idx = 0; idx < this.sellField; idx++){
  this._shintoService.lessCoin()
  this._shintoService.lessCoinValue()
  this._shintoService.recordLedger("Sold", this.sellField, this._shintoService.coinValue)
  }}
  
}
}

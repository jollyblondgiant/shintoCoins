import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  ledger
  account: any
  seeDeets: boolean
  constructor(private _shintoService: ShintoService) { }
  
  ngOnInit() {
    this.seeDeets = false
    this.ledger = this._shintoService.ledger
    console.log(this.ledger)
  }
  showDeets(idx){
    this.seeDeets = true
    console.log(idx)
    this.account  = idx
  }
}

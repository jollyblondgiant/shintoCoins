import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  
  constructor(private _http: HttpClient) { 

  }
  coins = 0
  coinValue = 0
 questions = [
  {question: "What does the acronym 'CPU' stand for?", answer: "central processing unit"},
  {question: "What does the acronym 'RAM' stand for?", answer: "random access memory"},
  {question: "Who is credited as being the first programmer?", answer: "ada lovelace"},
  
]
ledger = []
emitQuestions(){
  return this.questions
}
addCoinValue(){
  this.coinValue ++
  return this.coinValue
}
addCoin(){
  this.coins ++
  return this.coins
}
lessCoin(){
  this.coins --
  return this.coins
}
lessCoinValue(){
  this.coinValue --
  return this.coinValue
}
recordLedger(act, amt, val){
  let transaction = {
    id: Math.round(Math.random()*1000),
    action: act,
    amount: amt,
    value : val
  }
  this.ledger.push(transaction)
}
}

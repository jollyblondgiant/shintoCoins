import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  questions = []
  question : any
  questionId: number
  usrAnswer='';
  coins: number
  coinValue: number 
  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.question = {
      
      question: "",
      answer: ""
    }
    this.getQuestions()
    this.coinValue = this._shintoService.coinValue
    this.coins = this._shintoService.coins
  }
  getQuestions(){
    
    this.questions = this._shintoService.emitQuestions();
    let idx = Math.round(Math.random()*this.questions.length)
   
    this.question.id = idx
    this.question.question = this.questions[idx].question
    this.question.answer = this.questions[idx].answer
  
    console.log(this.question)
  }
  answerTrivia(){
    
    if(this.usrAnswer === ''){console.log("GUESS BETTER")}
    else if(this.usrAnswer.toLowerCase === this.question.answer.toLowerCase){
      console.log("CORRECT")
      this._shintoService.addCoin()
      this._shintoService.addCoinValue()
      this.getQuestions()
      this._shintoService.recordLedger("Mined", 1, this._shintoService.coinValue)
      
    }
    else{console.log("FAILURE")}

  }
}

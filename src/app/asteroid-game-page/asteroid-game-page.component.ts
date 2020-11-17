import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asteroid-game-page',
  templateUrl: './asteroid-game-page.component.html',
  styleUrls: ['./asteroid-game-page.component.css']
})
export class AsteroidGamePageComponent implements OnInit {
  answerVal: string;
  numAns: number;
  num1: number;
  num2: number;
  ifWrong: boolean;

  constructor() { }

  ngOnInit(): void {
    this.num1 = Math.floor(Math.random() * 10) + 1;
    this.num2 = Math.floor(Math.random() * 10) + 1; 
    this.ifWrong = false;
  }

  submitAnswer(answerVal){
    if(!(/^[0-9]+$/.test(answerVal))){
      this.ifWrong = true;
    }
    else{
      this.ifWrong = false;
      this.numAns = Number(answerVal);  
      this.answerVal = null;
      if(this.num1 + this.num2 == this.numAns){
        this.num1 = Math.floor(Math.random() * 10) + 1;
        this.num2 = Math.floor(Math.random() * 10) + 1; 
      }
      else{
        this.ifWrong = true;
      }
    }
    

  }

}

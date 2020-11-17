import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  start: boolean;
  sign: string;
  equals: string;
  answer_field: string;
  score: number;
  score_label: string;

  constructor(private router: Router) { }

  onBackButtonClick(){
    this.start = false;
    this.router.navigate(['/']);
  }
  onStartClick(){
    if (!this.start)
      this.start = true;
      this.num1 = Math.floor(Math.random() * 10) + 1;
      this.num2 = Math.floor(Math.random() * 10) + 1;
      this.equals = '=';
      this.sign = '+';
      this.answer_field = 'Answer to Blast Asteroid!';
      this.score = 0;
  }
  ngOnInit(): void { 
    this.ifWrong = false;
    this.answer_field = 'Press Start Game!';
    this.start = false;
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
        this.score++
        this.num1 = Math.floor(Math.random() * 10) + 1;
        this.num2 = Math.floor(Math.random() * 10) + 1; 
      }
      else{
        this.ifWrong = true;
      }
    }
  }
}

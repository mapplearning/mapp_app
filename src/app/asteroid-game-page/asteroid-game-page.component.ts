import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GameOverDialogComponent } from '../game-over-dialog/game-over-dialog.component';


@Component({
  selector: 'app-asteroid-game-page',
  templateUrl: './asteroid-game-page.component.html',
  styleUrls: ['./asteroid-game-page.component.css'],

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
  start_asteroid: boolean;
  lives: number;
  oneLife: boolean;
  twoLives: boolean;
  threeLives: boolean;
  private correctAnswer: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router, public gameOver: MatDialog) { }

  ngOnInit(): void { 
    this.ifWrong = false;
    this.answer_field = 'Press Start Game!';
    this.start = false;
  }

  onBackButtonClick(){
    this.start = false;
    this.router.navigate(['/']);
  }
  resetAsteroid(){
    this.start_asteroid = !this.start_asteroid;
    this.start = !this.start;
  }
  onStartClick(){
      this.start = true;
      this.start_asteroid = false;
      this.num1 = Math.floor(Math.random() * 10) + 1;
      this.num2 = Math.floor(Math.random() * 10) + 1;
      this.equals = '=';
      this.sign = '+';
      this.answer_field = 'Answer to Blast Asteroid!';
      this.score = 0;
      this.correctAnswer.emit(false);
      this.lives = 3;
      this.oneLife = true;
      this.twoLives = true;
      this.threeLives = true;
  }

  submitAnswer(answerVal){
    this.start = !this.start;
    this.start_asteroid = !this.start;
    this.ifWrong = false;
    this.numAns = Number(answerVal);  
    this.answerVal = null;
    if(this.num1 + this.num2 == this.numAns){
      this.score++;
      this.num1 = Math.floor(Math.random() * 10) + 1;
      this.num2 = Math.floor(Math.random() * 10) + 1;
      this.start = !this.start;
      this.start_asteroid = !this.start;
      this.correctAnswer.emit(true)
    }
    else{
      this.ifWrong = true;
      this.start_asteroid = true;
      this.correctAnswer.emit(false)
    }
    this.correctAnswer.emit(false)
  }
  calcLives(lives){
    console.log("lives");
    console.log(this.lives)
    this.lives--;
    if(this.lives == 2){
      this.threeLives = false;
      this.resetAsteroid();
    }
    else if(this.lives == 1){
      this.twoLives = false;
      this.resetAsteroid();
    }
    else{
      this.oneLife = false;
      const dialogRef = this.gameOver.open(GameOverDialogComponent);

      dialogRef.componentInstance.gameDialogClicked.subscribe(result => {
        if(result == "restart"){
          this.onStartClick();
          this.resetAsteroid();
        }
        else{
          this.onBackButtonClick();
        }
      });
    }

  }
}

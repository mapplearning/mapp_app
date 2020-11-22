import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';


@Component({
  selector: 'app-asteroid-object',
  templateUrl: './asteroid-object.component.html',
  styleUrls: ['./asteroid-object.component.css'],
  animations: [
    trigger('startFiring', [
      state('out', style({ 
        transform: 'translateY(+435px)',
      })),
      state('bottom', style({
        transform: 'translateY(+435px)',
      })),
      transition('* => bottom', [
        animate('10s')
      ]),
      transition('* => out', [
        animate('10s')
      ])

    ]),
  ]
})
export class AsteroidObjectComponent implements OnInit {
  @Input() start_asteroid: boolean;
  @Input() start: boolean;
  @Input() lives: number;
  @Input() private correctAnswer: EventEmitter<boolean>;
  @Output() hitTheLine = new EventEmitter<number>();

  me_astr: boolean;
  me_start: boolean;
  x: number;
  y: number;
  interval;
  timeLeft: number;

  public isFiring: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.x = (Math.floor(Math.random() * 1000) + 100);
    this.y = 10;
    this.isFiring = !this.isFiring;
    this.timeLeft = 10;
  }  
  ngAfterViewChecked() {
    if(this.timeLeft == 10){
      clearInterval(this.interval)
      this.checkTime();

    }
  }
  checkTime(){
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
      if(this.correctAnswer){
        this.correctAnswer.subscribe(() =>{
          clearInterval(this.interval);
          }
        )

      }
      if(this.timeLeft == 0){
        clearInterval(this.interval);
        this.isFiring = !this.isFiring;
        this.hitTheLine.emit(this.lives);
      }
    },1000);

  }
}



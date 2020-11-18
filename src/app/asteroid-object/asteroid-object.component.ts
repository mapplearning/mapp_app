import { Component, Input, OnInit } from '@angular/core';
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
        height: '-50px'
      })),
      state('bottom', style({
        height: '1000px'
      })),
      transition('out => bottom', [
        animate('5s')
    ])

    ])
  ]
})
export class AsteroidObjectComponent implements OnInit {
  @Input() start_asteroid: boolean;
  @Input() start: boolean;

  x: number;
  y: number;
  public startFiring: string;
  constructor() { }

  ngOnInit(): void {
    this.x = (Math.floor(Math.random() * 1000) + 100);
    this.y = 10;
  }  
}



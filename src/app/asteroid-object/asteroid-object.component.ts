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
      state('in', style({ transform: 'translateY(10)' })),
      transition ( ':enter',[
        style({transform: 'translateY(+100px)'}),
        animate(100)
    ])

    ])
  ]
})
export class AsteroidObjectComponent implements OnInit {
  @Input() start: boolean;

  x: number;
  y: number;
  public startFiring: string;
  constructor() { }

  ngOnInit(): void {
    this.x = (Math.floor(Math.random() * 1000) + 1);
    this.y = -130;
    this.startFiring = "in";
  }

}

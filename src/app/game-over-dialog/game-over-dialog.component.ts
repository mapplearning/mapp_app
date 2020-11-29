import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.css']
})
export class GameOverDialogComponent implements OnInit {
  @Output() gameDialogClicked = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<GameOverDialogComponent>) { }

  ngOnInit(): void {
  }
  restartCloseModal() {
    this.dialogRef.close();
    this.gameDialogClicked.emit("restart");
  }
  quitCloseModal(){
    this.dialogRef.close();
    this.gameDialogClicked.emit("quit");
  }

}

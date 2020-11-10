import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})

export class WelcomePageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onStudentLoginClick(){
    this.router.navigate(['/student-login']);
  }
  onTeacherLoginClick(){
    this.router.navigate(['/teacher-login']);
  }
  onCreateAccClick(){
    this.router.navigate(['/create-account']);
  }

}

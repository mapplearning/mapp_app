import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackButtonClick(){
    this.router.navigate(['/']);
  }
  onClickForgotPassword(){
    this.router.navigate(['/forgot-password']);
  }
  onContactClick(){
    this.router.navigate(['/contact-page']);
  }
  onHelpPageClick(){
    this.router.navigate(['/help-page']);
  }
}
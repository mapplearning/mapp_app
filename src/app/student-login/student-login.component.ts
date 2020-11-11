import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackButtonClick(){
    this.router.navigate(['/']);
  }
  onClickForgotPassword(){
    this.router.navigate(['/forgot-password']);
  }
}
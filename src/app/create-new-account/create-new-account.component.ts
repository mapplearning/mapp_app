import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackButtonClick(){
    this.router.navigate(['/']);
  }
  onContactClick(){
    this.router.navigate(['/contact-page']);
  }
  onHelpPageClick(){
    this.router.navigate(['/help-page']);
  }
}

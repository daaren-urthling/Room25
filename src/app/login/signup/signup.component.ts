import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserInfo } from '../../model/user-info.model';

@Component({
  selector: 'r25-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: UserInfo = new UserInfo();
  passwordRepeat: string = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {

  }

  emailPattern() {
    return '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
  }
  
}

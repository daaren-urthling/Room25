import { UserInfo } from './../model/user-info.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'r25-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserInfo = new UserInfo();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {

  }

  emailPattern() {
    return '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
  }

}

import { User } from './../../../server/User';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'r25-login',
  templateUrl: './login.component.html',
  styles: [`

    .login-screen {
        background-image: url('assets/box.jpg');
        background-repeat: no-repeat;
        background-size: 100%;
        height: 100%;
        width:100%;
    }

   .login-panel {
        width:400px;
   }

  `]
})
export class LoginComponent implements OnInit {
  public userName : string;
  public password : string;
  private triedOnce : boolean = false;
  private loginError : boolean = false;
    
  constructor(private router: Router, private userService: UserService, public snackBar : MdSnackBar) { }

  ngOnInit() {
  }

  onLogin(login : FormGroup) {
    this.triedOnce = true;
    if (!this.checkEmail(this.userName)) {
      return;
    }
    if (!this.password)
      return;

    this.userService.login(this.userName, this.password).subscribe(
      user => {
        this.router.navigateByUrl('/setup');
      },
      err => {
        login.reset();
        this.triedOnce = false;
        let snackBarRef = this.snackBar.open(err, 'Close');
        //@@TODO error on form
        console.log(err);
      });
  }

  checkEmail(email : string) {
    if (!email)
      return true;
      if (!this.triedOnce)
        return true;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}

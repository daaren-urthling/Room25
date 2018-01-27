import { User } from './../../../server/User';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(userName:  string, password: string) :Observable<User> {
    return this.http.post('/user/login', { userName: userName, password: password })
      .map((res : Response) => res.json())
      .catch((err : Response)  => { 
        return Observable.throw(err.json().error || 'Server error') 
      });     
  }
}

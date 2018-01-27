import { User } from './../User';
import {Router, Request, Response, NextFunction} from 'express';

var LoggedUsers : User[] = [];
const RegisteredUsers = require('../RegisteredUsers');

//=============================================================================
export class UserRouter {
  static router: Router = Router();

  //---------------------------------------------------------------------------
  constructor() {
    UserRouter.router.post('/login', UserRouter.login);
  }

  /**
   * Login the user
   * 
   * _method : PUT_
   * 
   * `Request` `body` must contains:
   *
   *  - `userName`   i.e. the e-mail
   *  - `password`   the password   
   *///------------------------------------------------------------------------
  public static login(req: Request, res: Response, next: NextFunction) {
    let userName = req.body.userName;
    let password = req.body.password;
    //@@TODO real login
    let user = RegisteredUsers.find(user => user.userName == userName);
    if (!user) {
        res.status(501)
        .send({
            error: 'Unknown user',
            status: res.status
        });
        return;
    }
    //@@TODO real password check
    if (password != user.nickName) {
        res.status(501)
        .send({
            error: 'Login failed',
            status: res.status
        });
        return;
    }
    if (!LoggedUsers.find(user => user.userName == userName))
        LoggedUsers.push(user);
    
    res.status(200)
    .send(user);
  }

}

const theRouter = new UserRouter();

export default UserRouter.router;

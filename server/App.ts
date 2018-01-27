import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import GameEngineRouter from './routers/GameEngineRouter';
import UserRouter from './routers/UserRouter';

/**
 * The server.
 *///==========================================================================
class App {

  // ref to Express instance
  public express: express.Application;

  /**
   * Constructor, also runs configuration methods on the Express instance.
   *///------------------------------------------------------------------------
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  /**
   * Configure Express middleware.
   *///------------------------------------------------------------------------
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    // view engine setup
    // this.express.set('views', path.join(__dirname, 'views'));
    // this.express.set('view engine', 'ejs');
    this.express.use(express.static(path.join(__dirname, '/../client')));
  }

  /**
   * Configure API endpoints.
   *///------------------------------------------------------------------------
  private routes(): void {
    this.express.use('/gameEngine', GameEngineRouter);
    this.express.use('/user', UserRouter);
    this.express.get('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.sendFile(path.join(__dirname, '/../client/index.html'));
    });
  }

}

export default new App().express;
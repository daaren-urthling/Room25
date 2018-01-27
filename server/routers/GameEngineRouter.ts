import {Router, Request, Response, NextFunction} from 'express';
import { Game } from "../Game";

var Games : Game[] = [];
var lastGameID : number = 0;

//=============================================================================
export class GameEngineRouter {
  static router: Router = Router();

  //---------------------------------------------------------------------------
  constructor() {
    GameEngineRouter.router.get('/getAllGames', GameEngineRouter.getAllGames);
    GameEngineRouter.router.post('/createGame', GameEngineRouter.createGame);
    GameEngineRouter.router.delete('/removeGame/:gameId', GameEngineRouter.removeGame);
    GameEngineRouter.router.put('/joinGame', GameEngineRouter.joinGame);
  }

  //---------------------------------------------------------------------------
  private static alreadyIn(name : string) : boolean {
    let game = Games.find(game => game.players.findIndex(player => player == name) != -1);
    if (game) {
        return true;
    } else {
        return false;
    }
  }

  /**
   * Returns a list of all active games.
   * 
   * _method : GET_
   *///------------------------------------------------------------------------
  public static getAllGames(req: Request, res: Response, next: NextFunction) {
    res.status(200)
    .send({
            message: 'Success',
            status: res.status,
            games: Games
    });
  }

  /**
   * Let a player to create a new game. The player must not have already  
   * joined another game. The creator player is immediately added to the
   * player's list (that is, it joins the new game)
   * 
   * _method : POST_
   * 
   * `Request` `body` must contains:
   *
   *  - `creator`   the name of the player that creates the game   
   *///------------------------------------------------------------------------
  public static createGame(req: Request, res: Response, next: NextFunction) {
    var creator : string = req.body.creator;
    if (!creator || creator.length == 0) {
        res.status(404)
        .send({
            message: 'To create a game please provide the first player name',
            status: res.status
        });
        return;
    }
    if (GameEngineRouter.alreadyIn(creator)) {
        res.status(404)
        .send({
            message: 'You already joined another game',
            status: res.status
        });
        return;
    }

    let game = new Game(++lastGameID, creator);
    Games.push(game);
    res.status(200)
    .send({
            message: 'Success',
            status: res.status,
            game: game
    });
  }

  /**
   * Remove a game, that is ends it.
   * 
   * _method : DELETE_
   * 
   * `Request` `params` must contains:
   *
   *  - `gameId`   the id of the game to remove   
   *///------------------------------------------------------------------------
  public static removeGame(req: Request, res: Response, next: NextFunction) {
    let gameId = parseInt(req.params.gameId);
    let g = Games.findIndex(game => game.id == gameId)
    if (g != -1) {
        Games.splice(g, 1);
        res.status(200)
        .send({
            message: 'Success',
            status: res.status
        });
    } else {
        res.status(404)
        .send({
            message: 'No game found with the given id.',
            status: res.status
        });
    }
  }

  /**
   * Let a player to join a game. The player must not have already joined 
   * another game.
   * 
   * _method : PUT_
   * 
   * `Request` `body` must contains:
   *
   *  - `gameId`   the id of the game to join
   *  - `player`   the name of the player that joins   
   *///------------------------------------------------------------------------
  public static joinGame(req: Request, res: Response, next: NextFunction) {
    let gameId = parseInt(req.body.gameId);
    let player = req.body.player;
    if (GameEngineRouter.alreadyIn(player)) {
        res.status(404)
        .send({
            message: 'You already joined another game',
            status: res.status
        });
        return;
    }
    let game = Games.find(game => game.id == gameId);
    if (!game) {
        res.status(404)
        .send({
            message: 'No game found with the given id.',
            status: res.status
        });
        return;
    }
    game.join(player);
    res.status(200)
    .send({
        message: 'Success',
        status: res.status
    });
  }

}

const theRouter = new GameEngineRouter();

export default GameEngineRouter.router;

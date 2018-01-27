export class Game {
  public description : string;
  public players : string [] = [];

  /**
   * Constructor
   *///------------------------------------------------------------------------
  constructor (public id : number, public creator : string) {
    this.description = "Game n." + id;
    this.join(creator);
  }

  /**
   * Let a `player` to join this game.
   *///------------------------------------------------------------------------
  public join(player : string) : void {
    this.players.push(player);
  }
}
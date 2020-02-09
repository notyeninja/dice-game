import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Dice } from '../models/dice';

/**
 * The brain of the game. It also maintains the state of the game.
 *
 * @export
 * @class GameService
 */
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private players:Array<Player>;
  private totalDice:Array<Dice>;

  constructor() { }

  loadGame(players:Array<string>){
      this.initializeGame(players);
  }

  getPlayersInfo():Array<Player>{
    return this.players;
  }

  getTotalDiceForGame():Array<Dice>{
    return this.totalDice;
  }

  private initializeGame(players:Array<string>){

    this.players = new Array<Player>();
    this.totalDice = new Array<Dice>();

    players.forEach(player => {
      this.players.push(new Player(player));
      this.totalDice.push(new Dice());
    });
    this.totalDice.push(new Dice());
  }
}

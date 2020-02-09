import { Injectable } from '@angular/core';
import { Player } from '../models/player';

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

  constructor() { }

  loadGame(players:Array<string>){
      this.initializePlayers(players);
  }

  getPlayersInfo():Array<Player>{
    return this.players;
  }

  private initializePlayers(players:Array<string>){

    this.players = new Array<Player>();
    players.forEach(player => this.players.push(new Player(player)));

  }
}

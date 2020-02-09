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

  calculatePlayersScore(){
     let score = 0;
     this.totalDice.forEach((dice:Dice) => score += dice.currentValue);
     return score;
  }

  private initializeGame(players:Array<string>){

    debugger;
    this.players = new Array<Player>();
    this.totalDice = new Array<Dice>();

    if(players.length == 0){
      //get it from the storage
      let storedPlayers = JSON.parse(sessionStorage.getItem('players'));
      this.createPlayersAndDiceForTheGame(storedPlayers);
    }else{
      sessionStorage.setItem('players',JSON.stringify(players));
      this.createPlayersAndDiceForTheGame(players);
    }
  }

  private createPlayersAndDiceForTheGame(players:Array<string>){
    players.forEach(player => {
      this.players.push(new Player(player));
      this.totalDice.push(new Dice());
    });
    this.totalDice.push(new Dice());
  }
}

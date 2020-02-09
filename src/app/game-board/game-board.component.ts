import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Player } from '../models/player';
import { Dice } from '../models/dice';

/**
 * The main dashboard where actual game statistics are displayed.
 *
 * @export
 * @class GameBoardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  players:Array<Player>;
  totalDice:Array<Dice>;
  activePlayerId:string;
  disableRoll:boolean;
  numOfTimesPlayerRolled:number;

  constructor(private _gameService:GameService) {
     this.players = new Array<Player>();
     this.totalDice = new Array<Dice>();
  }

  ngOnInit(): void {
    this.disableRoll = false;
    this.players = this._gameService.getPlayersInfo();
    this.totalDice = this._gameService.getTotalDiceForGame();
    this.numOfTimesPlayerRolled = 0;

    if(this.totalDice){
      this.totalDice.forEach((dice:Dice) => dice.roll());
    }
    //TODO: logic to randomize the array. May be this should go into the service
    //this will be a golden source.
    if(this.players){
      this.activePlayerId = this.players[0].id;
    }

  }

  rollDice(){
    if(this.totalDice){
      this.disableRoll = true;
      ++this.numOfTimesPlayerRolled;
      this.totalDice.forEach((dice:Dice) => dice.roll());
    }
  }

  remainingRoll():number{
    if(this.totalDice){
       let notActiveDice = (this.totalDice.filter(d => !d.isActive)).length;
       if(notActiveDice == 0) return this.totalDice.length;
       return this.totalDice.length - notActiveDice;
    }

    return 0;
  }

  selectDice(id:string){
    let selectedDice = this.totalDice.find((dice:Dice) => dice.id === id);
    if(selectedDice){
      selectedDice.isActive = false;
      this.disableRoll = this.remainingRoll() == 0;
      if(this.remainingRoll() == 0) this.finishTurn();
    }
  }

  isPlayersTurn(player:Player){
    return player.id === this.activePlayerId;
  }

  finishTurn(){
      //calculate the score for the active player
      let activePlayer = this.getActivePlayer();
      activePlayer.currentScore = this._gameService.calculatePlayersScore();
      //change the active player and initialize the game board for them
  }

  private getActivePlayer():Player{
     return this.players.find((p:Player) => p.id == this.activePlayerId);
  }

}

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
  totalRounds:number;
  currentRound:number;

  constructor(private _gameService:GameService) {
     this.players = new Array<Player>();
     this.totalDice = new Array<Dice>();
     this.totalRounds = 3;
     this.currentRound = 1;
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
      //this.disableRoll = this.remainingRoll() == 0;
      this.shouldDisableRoll();
      //TODO the change to next player and score calculation is happening instantly
      //This is confusing we should have a intermidiatory step which tells user
      //that their turn is finished and system is calculating their score.
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
      this.setNextActivePlayer();
      //set the stage for the now active player
      this.totalDice.forEach((d:Dice) => {
        d.roll();
        d.isActive = true;
      })
      this.numOfTimesPlayerRolled = 0;
      this.shouldDisableRoll();
  }

  private shouldDisableRoll(){
    this.disableRoll = this.remainingRoll() == 0;
  }

  private getActivePlayer():Player{
     return this.players.find((p:Player) => p.id == this.activePlayerId);
  }

  private setNextActivePlayer(){
     let indx = this.players.findIndex((p:Player) => p.id == this.activePlayerId);
     if(indx !== -1 && (indx + 1) < this.players.length){
        ++indx;
        let nextActivePlayer = this.players[indx];
        this.activePlayerId = nextActivePlayer.id;
     }else if((indx !== -1 && ((indx + 1) == this.players.length))){

         if(this.currentRound == this.totalRounds){
           //game finished. run the game end logic
         }else if(this.currentRound < this.totalRounds){
            this.currentRound += 1;
            //reset the active player to first.
            this.activePlayerId = this.players[0].id;
         }

     }
  }

}

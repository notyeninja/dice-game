import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Player } from '../models/player';
import { Dice } from '../models/dice';
import { DiceAnimateService } from '../services/dice-animate.service';

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
  showPopup:boolean;
  popupMessage:string;

  constructor(private _gameService:GameService,
              private _diceAnimateService:DiceAnimateService) {
     this.players = new Array<Player>();
     this.totalDice = new Array<Dice>();
     this.totalRounds;
     this.currentRound = 1;
  }

  ngOnInit(): void {
    this.disableRoll = false;
    this.players = this._gameService.getPlayersInfo();
    this.totalDice = this._gameService.getTotalDiceForGame();
    this.numOfTimesPlayerRolled = 0;
    this.totalRounds = this.players.length;

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
      this._diceAnimateService.animateDiceRoll();
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
      this.totalDice.forEach((d:Dice) => d.roll);

  }

  closeModel(){
     this.popupMessage = '';
     this.showPopup = false;
  }

  private preparePopup(message:string){
    this.popupMessage = message;
    this.showPopup = true;
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

        this.preparePopup(`<h5 class="title is-5">Alright! Next player's turn.</h5>`);
        ++indx;
        let nextActivePlayer = this.players[indx];
        this.activePlayerId = nextActivePlayer.id;
     }else if((indx !== -1 && ((indx + 1) == this.players.length))){

          //game finished. run the game end logic
         if(this.currentRound == this.totalRounds){
            this.players.sort((p1,p2) => p1.totalScore - p2.totalScore);
            let winner = this.players[0];
            this.activePlayerId = '';
            this.preparePopup(`<h5 class="title is-5">Winner!<h5><br/><h1 class="title has-text-danger is-1">${winner.name}</h1>`)

         }else if(this.currentRound < this.totalRounds){

            let currRound = this.currentRound;
            this.currentRound += 1;
            let nxtRound = this.currentRound;
            this.preparePopup(`<h4 class="title is-4">Round ${currRound} complete. Next round ${nxtRound}</h4>`);
            //reset the active player to first.

            let currPlayer = this.players.shift();
            this.players.push(currPlayer);
            this.activePlayerId = this.players[0].id;
         }

     }
  }

}

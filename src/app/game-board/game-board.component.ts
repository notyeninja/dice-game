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

  constructor(private _gameService:GameService) {
     this.players = new Array<Player>();
     this.totalDice = new Array<Dice>();
  }

  ngOnInit(): void {
    this.players = this._gameService.getPlayersInfo();
    this.totalDice = this._gameService.getTotalDiceForGame();
    this.totalDice.forEach((dice:Dice) => dice.roll());
  }

  rollDice(){
    if(this.totalDice){
      this.totalDice.forEach((dice:Dice) => dice.roll());
    }
  }

}

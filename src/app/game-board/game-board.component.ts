import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

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

  players:Array<string>;

  constructor(private _gameService:GameService) {
     this.players = new Array<string>();
  }

  ngOnInit(): void {

    let players = this._gameService.getPlayersInfo();
    players.forEach( p => this.players.push(p.name));
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

/**
 *
 * Main landing component when the app starts.
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  players:Array<string> = new Array<string>();

  constructor(private _router:Router,
              private _gameService:GameService) { }

  ngOnInit(): void {
  }

  playerAdd(player:string){
    this.players.push(player);
  }

  startGame(){
    this._gameService.loadGame(this.players);
    this._router.navigate(['/game-board']);
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit {

  players:Array<string> = new Array<string>();
  animateTitle:boolean;

  constructor(private _router:Router,
              private _gameService:GameService) {
                this.animateTitle = false;
              }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.animateTitle = true;
    }, 1000);
  }

  playerAdd(player:string){
    this.players.push(player);
  }

  startGame(){
    this._gameService.loadGame(this.players);
    this._router.navigate(['/game-board']);
  }
}

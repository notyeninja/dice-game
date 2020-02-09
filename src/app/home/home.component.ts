import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  players:Array<string> = new Array<string>();

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  playerAdd(player:string){
    debugger;
    this.players.push(player);
  }

  startGame(){
    debugger;
    this._router.navigate(['/game-board']);
  }
}

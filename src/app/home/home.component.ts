import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  players:Array<string> = new Array<string>();

  constructor() { }

  ngOnInit(): void {
  }

  playerAdd(player:string){
    debugger;
    this.players.push(player);
  }
}

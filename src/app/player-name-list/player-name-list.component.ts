import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-name-list',
  templateUrl: './player-name-list.component.html',
  styleUrls: ['./player-name-list.component.css']
})
export class PlayerNameListComponent implements OnInit {
  @Input('names')
  playerNames:Array<string>;

  constructor() {

  }

  ngOnInit(): void {
  }

}

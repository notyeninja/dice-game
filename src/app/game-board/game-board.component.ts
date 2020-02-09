import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-statistics',
  templateUrl: './player-statistics.component.html',
  styleUrls: ['./player-statistics.component.css']
})
export class PlayerStatisticsComponent implements OnInit {

  @Input()
  player:Player;

  constructor() { }

  ngOnInit(): void {
  }

}

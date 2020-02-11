import { Component, OnInit,Output,EventEmitter } from '@angular/core';


/**
 * Component to add new players to the game.
 *
 * @export
 * @class AddPlayerComponent
 */
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {

  @Output() onPlayerAdd:EventEmitter<string> = new EventEmitter<string>();
  player:string;

  constructor() { }

  addPlayer(evt){
    evt.stopPropagation();
    this.onPlayerAdd.emit(this.player);
    this.player = '';
  }
}

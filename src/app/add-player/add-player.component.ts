import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {

  @Output() onPlayerAdd:EventEmitter<string> = new EventEmitter();
  player:string;

  constructor() { }

  addPlayer(){
    this.onPlayerAdd.emit(this.player);
    this.player = '';
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dice } from '../models/dice';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  @Input()
  dice:Dice;

  @Output()
  onSelect:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selected(){
    this.onSelect.emit(this.dice.id);
  }

}

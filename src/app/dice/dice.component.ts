import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dice } from '../models/dice';
import { DiceAnimateService } from '../services/dice-animate.service';

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

  animateDice:boolean;

  constructor(private _diceAnimateService:DiceAnimateService) { }

  ngOnInit(): void {

    this._diceAnimateService.animateDiceRoll$.subscribe(v => {
       this.animateDice = v;
       setTimeout(() => {
         this.animateDice = false;
       }, 1000);
    });
  }

  selected(){
    this.onSelect.emit(this.dice.id);
  }

}

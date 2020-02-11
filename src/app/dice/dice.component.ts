import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dice } from '../models/dice';
import { DiceAnimateService } from '../services/dice-animate.service';

/**
 * Component that describes the UI for a dice.
 *
 * @export
 * @class DiceComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  @Input()
  dice: Dice;

  @Output()
  onSelect: EventEmitter<string> = new EventEmitter<string>();

  animateDice: boolean;

  constructor(private _diceAnimateService: DiceAnimateService) { }

  ngOnInit(): void {

    this._diceAnimateService.animateDiceRoll$.subscribe(v => {

      if (this.dice.isActive) {
        this.animateDice = v;
        setTimeout(() => {
          this.animateDice = false;
        }, 1000);
      }

    });

  }

  selected() {
    if (this.dice.isActive) {
      this.onSelect.emit(this.dice.id);
    }
  }

  shouldShow(val: number): boolean {
    switch (val) {
      case 1:
      case 9:
        return (this.dice.currentValue == 2 ||
          this.dice.currentValue == 3 ||
          this.dice.currentValue == 4 ||
          this.dice.currentValue == 5 ||
          this.dice.currentValue == 6);

      case 2:
      case 8:
        return this.dice.currentValue == 6;

      case 3:
        return (this.dice.currentValue == 4 ||
          this.dice.currentValue == 5 ||
          this.dice.currentValue == 6);

      case 5:
        return (this.dice.currentValue == 1 ||
          this.dice.currentValue == 3 ||
          this.dice.currentValue == 5);

      case 7:
        return (this.dice.currentValue == 4 ||
          this.dice.currentValue == 5 ||
          this.dice.currentValue == 6);

    }

  }

}

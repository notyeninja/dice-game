import uuid from 'uuid/v1';

/**
 * Model that describes state and behavior of a dice.
 *
 * @export
 * @class Dice
 */
export class Dice {
  isActive:boolean;
  currentValue:number;
  id:string;
  constructor(){
    this.isActive = true;
    this.id = uuid();
  }

  roll(){
    if(this.isActive){
      let nextValue = Math.floor((Math.random() * 6) + 1);
      this.currentValue = nextValue;
    }
  }
}

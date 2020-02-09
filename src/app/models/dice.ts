import uuid from 'uuid/v1';

export class Dice {
  isActive:boolean;
  currentValue:number;
  id:string;
  constructor(){
    this.id = uuid();
  }
}

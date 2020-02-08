const uuid = require('uuid/v1');

export class Player {

  id:string;
  currentScore:number;
  totalScore:number;
  constructor(public name){
    this.id = uuid();
  }
}

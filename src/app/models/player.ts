import uuid from 'uuid/v1';

/**
 * Class that holds the state of a player
 *
 * @export
 * @class Player
 */
export class Player {

  id:string;
  currentScore:number;
  totalScore:number;
  constructor(public name){
    this.id = uuid();
  }
}

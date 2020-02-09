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
  private _totalScore:number;

  get totalScore():number{
    return this._totalScore + this.currentScore;
  }
  constructor(public name){
    this.currentScore = 0;
    this._totalScore = 0;
    this.id = uuid();
  }
}

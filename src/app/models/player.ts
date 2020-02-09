import uuid from 'uuid/v1';

/**
 * Class that holds the state of a player
 *
 * @export
 * @class Player
 */
export class Player {

  id:string;
  _currentScore:number;
  private _totalScore:number;

  get totalScore():number{
    return this._totalScore + this.currentScore;
  }
  set currentScore(value){
      this._currentScore = value;
      this._totalScore += this._currentScore;
  }
  get currentScore():number{
    return this._currentScore;
  }
  constructor(public name){
    this._currentScore = 0;
    this._totalScore = 0;
    this.id = uuid();
  }
}

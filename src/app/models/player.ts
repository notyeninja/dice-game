import uuid from 'uuid/v1';

/**
 * Class that holds the state of a player
 *
 * @export
 * @class Player
 */
export class Player {

  id:string;
  avatar:string;
  _currentScore:number;
  private _totalScore:number;
  private _urlEndpoint:string  = "https://api.adorable.io/avatars/64/bot";
  private _availableAlphabet = "abcdetsfghimn"

  get totalScore():number{
    return this._totalScore;
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
    this.avatar = this.getAvatarUrl();
    this.id = uuid();
  }

  private getAvatarUrl():string{
     let char = this._availableAlphabet.charAt(Math.floor(Math.random() * this._availableAlphabet.length));
     return `${this._urlEndpoint}${char}@adorable.png`;
  }
}

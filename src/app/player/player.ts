const uuid = require('uuid/v1');

export class Player {

  id:string;
  constructor(private _name){
    this.id = uuid();
  }

  get name():string{
    return this._name;
  }

}

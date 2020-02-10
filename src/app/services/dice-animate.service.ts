import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiceAnimateService {

  private _dicerollBehaviour$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  animateDiceRoll$:Observable<boolean> = this._dicerollBehaviour$.asObservable();

  constructor() { }

  animateDiceRoll():void{
    this._dicerollBehaviour$.next(true);
  }
}

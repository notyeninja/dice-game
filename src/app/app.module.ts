import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerNameListComponent } from './player-name-list/player-name-list.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { DiceComponent } from './dice/dice.component';
import { PlayerStatisticsComponent } from './player-statistics/player-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPlayerComponent,
    PlayerNameListComponent,
    GameBoardComponent,
    DiceComponent,
    PlayerStatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'game-board', component:GameBoardComponent},
      { path:'', component:HomeComponent }
    ],{ enableTracing:false})
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

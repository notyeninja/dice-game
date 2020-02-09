import { Player } from './player';

describe('Player', () => {

  it('should create player with name', () => {

     let playersName = 'Mark';
     let mark = new Player(playersName);
     expect(mark.name).toBe(playersName,'Players name does not match.');
  });

  it('should generate unique id for each player', () => {

     let player1 = new Player('Mark');
     let player2 = new Player('Sophia');

     expect(player1.id).not.toEqual(player2.id, `Players ids are not unique. Player1 ${player1.id}, Player2: ${player2.id}`);
  });

});

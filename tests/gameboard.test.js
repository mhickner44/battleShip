
import shipFactory from '../src/ship';
import { gameBoard } from '../src/gameBoard.js';

test('board creation', () => {
  const board = gameBoard();

  expect(board.getSpot(0,0)).toBe(0);
  expect(board.getSpot(4,4)).toBe(0);
  expect(board.getSpot(9,9)).toBe(0);

});


test('recieve an attack that hits', () => {
  const board = gameBoard();
  const battleship = shipFactory("carrier");
  const battleship2 = shipFactory("cruiser");
  board.shipHorizontal(battleship, 2, 2);
  board.shipHorizontal(battleship2, 4, 4);
  board.recieveAttack(2, 2);//change board to a hit and update thatship 
  expect(board.getSpot(2, 2)).toBe(6);
  //test the see if the ship was hit by getting the hits
  expect(battleship.getHits()).toBe(1);
  expect(battleship2.getHits()).toBe(0);
});



test('recieving an attack that misses', () => {
  const board = gameBoard();
  const battleship=shipFactory("carrier");
  board.shipHorizontal(battleship,3,2);
  board.recieveAttack(2,2);//change board to a hit and update thatship 
  expect(board.getSpot(2,2)).toBe(7);
});



test('all ships sunk games over', () => {
  const board = gameBoard();
  const battleship=shipFactory("destroyer");
  const ship2=shipFactory("submarine");

  board.shipHorizontal(battleship,2,2);
  board.shipVertical(ship2,1,2);

  board.recieveAttack(2,2);
  board.recieveAttack(3,2);
 

  board.recieveAttack(1,2);
  board.recieveAttack(1,3);
  board.recieveAttack(1,4);
 
  expect(board.gameOver()).toBe(true);
 
 
});

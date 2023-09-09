
import shipFactory from '../src/ship.js';
import { gameBoard } from '../src/gameBoard.js';


//ships

test('what is ships length', () => {
  const battleship = shipFactory("cruiser");//argument is ship type
  expect(battleship.getLength()).toBe(3);
});


test('ship hit', () => {
  const battleship = shipFactory("cruiser");
  battleship.hit();
  battleship.hit();
  expect(battleship.getHits()).toBe(2);
});

test('is ship sunk ?', () => {
  const battleship = shipFactory("cruiser");
  battleship.hit();
  battleship.hit();
  expect(battleship.isSunk()).toBe(false);
});

test('is ship sunk?', () => {
  const battleship = shipFactory("cruiser");
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.isSunk()).toBe(true);
});

test('is it sunk from the saved ships in gameboard?', () => {
  const board = gameBoard();
  const battleship = shipFactory("destroyer");
  const ship2 = shipFactory("carrier");
  board.shipHorizontal(battleship, 2, 2);
  board.shipVertical(ship2, 1, 2);
  board.recieveAttack(2, 2);
  board.recieveAttack(3, 2);
  let hitShip = board.getShips();
  expect(hitShip[0].isSunk()).toBe(true);

});



test('ship placement horizontal', () => {
  const board = gameBoard();
  const battleship = shipFactory("destroyer");
  board.shipHorizontal(battleship, 2, 2);
  expect(board.getSpot(1, 2)).toBe(0);
  expect(board.getSpot(2, 2)).toBe(5);
  expect(board.getSpot(3, 2)).toBe(5);
  expect(board.getSpot(4, 3)).toBe(0);

});


test('ship placement vertical', () => {

  // arrayName[rowIndex][columnIndex]

  const board = gameBoard();


  const battleship = shipFactory("battleship");
  board.shipVertical(battleship, 2, 1);



  expect(board.getSpot(1, 1)).toBe(0);
  expect(board.getSpot(2, 1)).toBe(2);
  expect(board.getSpot(3, 1)).toBe(2);
  expect(board.getSpot(4, 1)).toBe(2);
  expect(board.getSpot(5, 1)).toBe(2);
  expect(board.getSpot(6, 1)).toBe(0);

});



test('ship placement horizontally over the edge', () => {
  const board = gameBoard();
  const battleship = shipFactory("cruiser");
  board.shipHorizontal(battleship, 9, 2);
  expect(board.getSpot(6, 2)).toBe(0);
  expect(board.getSpot(7, 2)).toBe(3);
  expect(board.getSpot(8, 2)).toBe(3);
  expect(board.getSpot(9, 2)).toBe(3);
});



test('ship placement vertically with the edges', () => {
  const board = gameBoard();
  const battleship = shipFactory("cruiser");
  board.shipVertical(battleship, 0, 9);
  expect(board.getSpot(0, 6)).toBe(0);
  expect(board.getSpot(0, 7)).toBe(3);
  expect(board.getSpot(0, 8)).toBe(3);
  expect(board.getSpot(0, 9)).toBe(3);
});











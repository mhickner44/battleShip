
const shipFactory = require('./ship');
const gameBoard = require('./gameBoard.js');
const playerFactory = require('./player.js')
const newGame = require('./newGame.js')


//prePopulated boards
const p1Board = gameBoard();
const botBoard = gameBoard();

//players
let player1 = playerFactory("player1",);
let bot = playerFactory("comp",);


//fill the board
const p1carrier = shipFactory("carrier",);
const p1battleship = shipFactory("battleship");
const p1cruiser = shipFactory("cruiser");
const p1submarine = shipFactory("submarine");
const p1destroyer = shipFactory("destroyer");

p1Board.shipHorizontal(p1carrier, 0, 1);
p1Board.shipVertical(p1battleship, 2, 1);
p1Board.shipHorizontal(p1cruiser, 2, 4);
p1Board.shipHorizontal(p1submarine, 5, 4);
p1Board.shipHorizontal(p1destroyer, 4, 6);



const botCarrier = shipFactory("carrier",);
const botBattleship = shipFactory("battleship");
const botCruiser = shipFactory("cruiser");
const botSubmarine = shipFactory("submarine");
const botDestroyer = shipFactory("destroyer");

botBoard.shipHorizontal(botCarrier, 0, 6);
botBoard.shipVertical(botBattleship, 0, 1);
botBoard.shipHorizontal(botCruiser, 7, 1);
botBoard.shipHorizontal(botSubmarine, 3, 1);
botBoard.shipHorizontal(botDestroyer, 8, 7);

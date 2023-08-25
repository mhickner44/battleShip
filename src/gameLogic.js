import exports from 'webpack';


const shipFactory = require('./ship');
const gameBoard = require('./gameBoard.js');
const playerFactory = require('./player.js')
const newGame = require('./dom.js')


//player boards
const p1Board = gameBoard();
const botBoard = gameBoard();

const p1carrier = shipFactory("carrier",);

// export{p1Board,p1carrier}
module.exports=function (gameBoard){

}

//players
let player1 = playerFactory("player1",);
let bot = playerFactory("comp",);


///ships

const p1battleship = shipFactory("battleship");
const p1cruiser = shipFactory("cruiser");
const p1submarine = shipFactory("submarine");
const p1destroyer = shipFactory("destroyer");


const botCarrier = shipFactory("carrier",);
const botBattleship = shipFactory("battleship");
const botCruiser = shipFactory("cruiser");
const botSubmarine = shipFactory("submarine");
const botDestroyer = shipFactory("destroyer");



//premade board
// botBoard.shipHorizontal(botCarrier, 0, 6);
// botBoard.shipVertical(botBattleship, 0, 1);
// botBoard.shipHorizontal(botCruiser, 7, 1);
// botBoard.shipHorizontal(botSubmarine, 3, 1);
// botBoard.shipHorizontal(botDestroyer, 8, 7);
// p1Board.shipHorizontal(p1carrier, 0, 1);
// p1Board.shipVertical(p1battleship, 2, 1);
// p1Board.shipHorizontal(p1cruiser, 2, 4);
// p1Board.shipHorizontal(p1submarine, 5, 4);
// p1Board.shipHorizontal(p1destroyer, 4, 6);
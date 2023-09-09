// 1	Carrier		5
// 2	Battleship	4
// 3	Cruiser		3
// 4	Submarine	3
// 5	Destroyer	2
// 6	   hit	    2
// 7	   miss	    2


const shipFactory = require('./ship');





const gameBoard = () => {

    let shipTypes = {
        carrier: 1,
        battleship: 2,
        cruiser: 3,
        submarine: 4,
        destroyer: 5
    }


    let board = new Array(10);

    let ships = [

    ]
    let getShips = () => {
        return ships;
    }

    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(10);
        for (let ii = 0; ii < board[0].length; ii++) {
            board[i][ii] = 0;
        }
    }


    let getSpot = (x, y) => {
        return board[x][y];
    }


    let shipHorizontal = (ship, row, column) => {
        // arrayName[rowIndex][columnIndex]


        ships.push(ship);

        let shipSize = ship.getLength();

        if (shipSize + column > 9) {
            column = 10 - shipSize;

        }

        for (let i = column; i < shipSize + column; i++) {
            board[row][i] = ship.getType();
        }
    }


    let shipVertical = (ship, row, column) => {
        ships.push(ship);
        let shipSize = ship.getLength();

        if (shipSize + row > 9) {
            row = 10 - shipSize;
        }

        for (let i = row; i < shipSize + row; i++) {
            board[i][column] = ship.getType();
        }
    }
    //receive attack

    let recieveAttack = (row, column) => {
        if (board[row][column] == 0) {
            //miss
            board[row][column] = 7;
        } else if (board[row][column] >= 1 || board[row][column] <= 5) {
            for (const ship in ships) {
                if (ships[ship].getType() == board[row][column]) {
                    ships[ship].hit();
                }
            }
            //update board 
            board[row][column] = 6;
        }
    }

    let gameOver = () => {
        let endGame = true;

        for (const ship in ships) {
            if (ships[ship].isSunk() == false) {
                return false;
            }
        }
        return endGame

    }

    let renderBoard = () => {

        let row = 0;
        let column = 0;


        let container = document.createElement('div');
        container.classList = "gridContainer";
        container.setAttribute("draggable", false)


        for (let i = 0; i < 10; i++) {

            for (let ii = 0; ii < 10; ii++) {
                let block = document.createElement("div");
                block.classList = "block";
                block.dataset.rows = row;
                block.dataset.column = column;
                container.appendChild(block);
                column++;
            }
            row++;
            column = 0;
        }
        return container;
    }


    return { board, getSpot, shipHorizontal, shipVertical, recieveAttack, gameOver, getShips, renderBoard };
}


//check a valid ship placement
function dropCheck(row, column, orientation, shipLength, tempBoard) {
    //tempBoard = tempBoard;
 let   unchangedBoard = tempBoard;

    if (orientation == "vertical") {
        //check for edges 
        if (row + shipLength > 10) {
         
           return [unchangedBoard, false]
        }

        for (let i = 0; i < shipLength; i++) {
            if (tempBoard.board[row + i][column] >= 1) {
                //cannot place
                
                return [unchangedBoard, false]
            } else {
                tempBoard.board[row + i][column] = 1;

            }

        }
        return [tempBoard, true];
    } else {
        if (column + shipLength > 10) {
       
            return [unchangedBoard, false]
        }
        for (let i = 0; i < shipLength; i++) {
            //need to start at the column it was placed on 
            if (tempBoard.board[row][column + i] >= 1) {
             
                return [unchangedBoard, false]
            } else {
                //its fine 
                tempBoard.board[row][column + i] = 1;
            }

        }

        return [tempBoard, true];
    }
}



export { gameBoard, dropCheck };
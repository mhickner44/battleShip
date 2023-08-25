
// 1	Carrier		5
// 2	Battleship	4
// 3	Cruiser		3
// 4	Submarine	3
// 5	Destroyer	2
// 6	   hit	    2

const shipFactory = (shipName) => {



    //how to get the lenght using the data structure below from one another
    let shipTypes = {
        carrier: 1,
        battleship: 2,
        cruiser: 3,
        submarine: 4,
        destroyer: 5
    }

    let shipLength = {
        carrier: 5,
        battleship: 4,
        cruiser: 3,
        submarine: 3,
        destroyer: 2
    }
    const shipType=shipTypes[shipName];

    let hits=0;

    const hit=()=>{
        hits++;
    }

    const getHits= ()=>hits;
 
    const getLength=()=>shipLength[shipName];

    const isSunk=()=>{
        if(hits>=shipLength[shipName]){
            return true;
        }
        return false;
    }

    const getType=()=>shipType;

    return { getLength ,getHits,hit,isSunk,getType};
}



export default  shipFactory;
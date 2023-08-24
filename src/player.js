

const player = (name, AIorNAH) => {

    const getName = () => name;

    const AIShipOrientation= () => {
        let x, y;

        x=Math.floor(Math.random() * 2)
        y=Math.floor(Math.random() * 2)
        return [x, y]
    }

    const AISpotPlacement =()=>{
        let x, y;

        x=Math.floor(Math.random() * 10)
        y=Math.floor(Math.random() * 10)
        return [x, y]
    }

    // Returns a random integer from 0 to 9:
// Math.floor(Math.random() * 10);
    return { getName,AIShipOrientation,AISpotPlacement}
}


module.exports = player;
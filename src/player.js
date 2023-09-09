

const player = () => {



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



   
    return { AIShipOrientation,AISpotPlacement}
}

export {player}

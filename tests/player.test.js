
import { player } from '../src/player.js';




//ai selection 

test('get AI selection for ship orientation', () => {
    
    const player1=player("player1",true);
    
    
    let shipValue=player1.AIShipOrientation();
    expect(shipValue[0]).toBeGreaterThanOrEqual(0);
    expect(shipValue[1]).toBeLessThanOrEqual(1);


  });




test('get AI selection for ship placement', () => {
    
    const player1=player("player1",true);
    
    //this returns an x and y value within 0-9
    let shipValue=player1.AISpotPlacement();
    //x
    expect(shipValue[0]).toBeGreaterThanOrEqual(0);
    expect(shipValue[0]).toBeLessThanOrEqual(9);
    //y
    expect(shipValue[1]).toBeGreaterThanOrEqual(0);
    expect(shipValue[1]).toBeLessThanOrEqual(9);

  });



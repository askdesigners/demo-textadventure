import {buildMap} from '../places/index';
import {buildActors} from '../actors/index';
import {buildThings} from '../things/index';
import {buildActions} from '../actions/index';
import Game from './Game';

var Gameinit = function(gameData){
  
  var {placesData, actorsData, thingsData, startPosition, playerName} = gameData;
  
  return new Game({
    playerName: playerName,
    currentPosition: startPosition,
    map: buildMap(placesData),
    things: buildThings(thingsData),
    actors: buildActors(actorsData)
  });
}

export default Gameinit;
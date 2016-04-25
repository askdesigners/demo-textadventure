import {buildMap} from '../places/index';
import {buildActors} from '../actors/index';
import {buildThings} from '../things/index';
import {buildActions} from '../actions/index';
import Game from './Game';

var G = new Game({
  map: buildMap(),
  playerName: "Mike",
  things: buildThings(),
  actors: buildActors()
});

export default G;
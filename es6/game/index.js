import {buildMap} from '../places/index';
import {buildActors} from '../actors/index';
import {buildThings} from '../things/index';
import {buildActions} from '../actions/index';
import Game from './Game';

var G = new Game({
  map: buildMap(),
  playerName: "Mike",
  things: buildThings(),
  actors: buildActors(),
  currentPosition: 'a1'
});

export default G;
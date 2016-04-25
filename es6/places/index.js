import Place from './Place';
import {places, dimensions} from './places';
import descriptions from './placeDescriptions';

function toNum(sn){
  let nn = Number(sn);
  if (isNaN(nn)) {
    throw "NaN in making E-W Map";
  }
  return nn;
}

function scaleUnicode(ll){
  return ll.charCodeAt() - 96;
}

function deriveNeighbors(p){
  const blockedTo = p.blockedTo;
  const pos = p.position;
  let dirs = {};
  // grids larger than z will break this...
  
  
  if(blockedTo.indexOf('s') !=-1  || scaleUnicode(pos[0]) >= dimensions[1]){
    dirs.toS = false;
  } else {
    dirs.toS = String.fromCharCode(pos[0].charCodeAt() + 1) + pos[1];
  }
  
  if(blockedTo.indexOf('n') !=-1  || scaleUnicode(pos[0]) == 1){
    dirs.toN = false;
  } else {
    dirs.toN = String.fromCharCode(pos[0].charCodeAt() - 1) + pos[1];
  }
  
  if(blockedTo.indexOf('e') !=-1 || pos[1] >= dimensions[0]){
    dirs.toE = false;
  } else {
    dirs.toE = pos[0] + (toNum(pos[1])+1);
  }
  
  if(blockedTo.indexOf('w') !=-1  || pos[1] == 1){
    dirs.toW = false;
  } else {
    dirs.toW = pos[0] + (toNum(pos[1])-1);
  }
  return dirs;
}

export const buildMap = function(){
  let map = {};
  for(var p of places){
    let {toN,toE,toS,toW} = deriveNeighbors(p);
    map[p.position] = new Place(p);
    map[p.position].toN = toN;
    map[p.position].toE = toE;
    map[p.position].toS = toS;
    map[p.position].toW = toW;
  }
  return map;
};
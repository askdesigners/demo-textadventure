import Thing from './Thing';
import {things} from './things';

export const buildThings = function () {
    let collection = {};
    let map = {}; // square : thingName
    
    for (var t of things) {
        let nT = new Thing(t);
        collection[nT.id] = nT;
        if(map[t.position] === undefined) map[t.position] = [];
        map[t.position].push(nT.id);
    }
    return { map, collection };
};
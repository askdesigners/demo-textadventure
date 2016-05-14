import commands from '../gameData/commands';
import validators from '../gameData/validators';
import parser from '../utils/parser';
import removeFromArray from '../utils/removeFromArray';
import listize from '../utils/listize';
 
class Game {

    constructor({map, currentPosition, playerName, actors, things}) {
        var self = this;
        this.turn = 0;
        this.map = map;
        this.currentPosition = currentPosition;
        this.playerName = playerName;
        this.actors = actors;
        this.things = things;
        this.setupParsing();
        this.moveHistory = ['a1'];
        this.commandHistory = [];
    }
    
    setupParsing(){
        commands(this);
        validators(this);
    }

    parseText(text){
        parser.parse(text);
        this.commandHistory.push(text);
    }
    
    moveTo(dir){
        let next = this.map[this.currentPosition].getNeighbor(dir);
        let result = this._handleMove(this.currentPosition, next);
        this.responseHandler(result);
    }
    
    moveBack(){
        let next = this.moveHistory[this.moveHistory.length - 2];
        let result = this._handleMove(this.currentPosition, next);
        this.responseHandler(result);
    }
    
    pickupThing(thing){
        var result = {};
        if(this.things.collection[thing].heldBy === null){
            if(this._thingIsNearby(thing)){
                if(this.things.collection[thing].canHold != false){
                    result = this.things.collection[thing].onPickUp();
                    if(result.success === true){
                        console.log('taking: ', thing, 'from', this.currentPosition);
                        // flag thing obj as held
                        this.things.collection[thing].heldBy = 'player';
                        // add thing to game (or sync with mobx?)
                        this.things.map[this.currentPosition] = removeFromArray(this.things.map[this.currentPosition], thing);
                    }
                } else {
                    result.success = false;
                    result.message = 'You can\'t take that.';
                }
            } else {
                result.success = false;
                result.message = "There is no " + thing + " here.";
            }
        } else if(this._isHeldByplayer(thing)){
            result.success = false;
            result.message = "You are already holding that.";
        } else {
            result.success = false;
            result.message = "Someone is already holding that";
        }
        
        result.valid = true;

        this.responseHandler(result);
    }
    
    putDownThing(thing){
        var result = {};
        if(this._isHeldByplayer(thing)){
            this.things.collection[thing].onDrop();
            this.things.collection[thing].heldBy = null;
            this.things.collection[thing].position = this.currentPosition;
            result.success = true;
            result.message = "You put down the " + thing;
            if(this.things.map[this.currentPosition] === undefined){
                this.things.map[this.currentPosition] = [];
                this.things.map[this.currentPosition].push(thing);
            } else {
                this.things.map[this.currentPosition].push(thing);
            }
        } else {
            result.success = false;
            result.message = "You\'re not holding that.";
        }
        
        result.valid = true;
        this.responseHandler(result);
    }
    
    noCommandFound(result){
        this.responseHandler({success: false, valid: false, message: "I don't follow you..."});
    }
    
    addResponseHandler(fn){
        var result = {};
        this.responseHandler = fn;
        fn({success: true, message:this.map[this.currentPosition].description});
    }
    
    lookAt(thing){
        var result = {};
        if(this._thingIsNearby(thing)){
            result.success = true;
            result.message = this.things.collection[thing].inspect();
        } else {
            result.success = false;
            result.message = "There is no " + thing + " here.";
        }
        this.responseHandler(result);
    }
    
    lookAround(){
        var result = {};
        result.message = this.map[this.currentPosition].describe();
        
        var thingsHere = this.things.map[this.currentPosition];
        if(thingsHere !== undefined){
            var str = "<br/> In this room there's " + listize(thingsHere) + '.';
            result.message += str;
        } else {
            result.message = "There's nothing here to see really...";
        }
        result.success = true;
        this.responseHandler(result);
    }
    
    openThing(){}
    
    activateThing(){}

    save(){

    }
    
    _thingIsNearby(thing){
        return this.things.collection[thing].position === this.currentPosition;
    }
    
    _isHeldByplayer(thing){
        return this.things.collection[thing].heldBy === 'player';
    }
    
    _handleMove(curPos, nextPos){
        var result = {};
        if(nextPos != false){
            result = this.map[nextPos].onEnter();
            if(result.success === true){
                console.log('moving to ' + nextPos + ' from', curPos);
                this.map[curPos].onLeave();
                this.currentPosition = nextPos;
                this.moveHistory.push(this.currentPosition);
            } 
        } else {
            result.success = false;
            result.message = 'That way is blocked';
        }
        result.valid = true;
        return result;
    }

}

export default Game;
import parser from '../utils/parser';
import commands from './commands';
import validators from './validators';
 
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
        var result = {};
        let next = this.map[this.currentPosition].getNeighbor(dir);
        if(next != false){
            result = this.map[next].onEnter();
            if(result.success === true){
                console.log('moving ', dir, ' to ' + next + ' from', this.currentPosition);
                this.currentPosition = next;
                this.moveHistory.push(this.currentPosition);
                this.map[this.currentPosition].onLeave();
            }
        } else {
            result.success = false;
            result.message = 'That way is blocked';
        }
        
        result.valid = true;
        this.responseHandler(result);
    }
    
    moveBack(){
        this.currentPosition = this.moveHistory[this.moveHistory.length - 2];
        this.moveHistory.push(this.currentPosition);
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
        var thingsHere = this.things.map[this.currentPosition];
        if(thingsHere !== undefined){
            var str = "Things in this room: ";
            
            for(let thing of thingsHere){
                str = str + this.things.collection[thing].name + ", "
            }
            result.success = true;
            result.message = str;
        } else {
            result.success = false;
            result.message = "There's nothing here to see really...";
        }
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

}

export default Game;
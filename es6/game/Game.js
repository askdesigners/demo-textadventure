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
    }
    
    setupParsing(){
        commands(this);
        validators(this);
    }

    parseText(text){
        parser.parse(text);
    }
    
    moveTo(dir){
        var result = {};
        let next = this.map[this.currentPosition].getNeighbor(dir);
        
        if(next != false){
            result = this.map[next].onEnter();
            if(result.success === true){
                console.log('moving to: ', dir, 'from', this.currentPosition);
                this.currentPosition = next;
                this.map[this.currentPosition].onLeave();
            }
        } else {
            result.success = false;
            result.message = 'That way is blocked';
        }
        
        result.valid = true;
        this.responseHandler(result);
    }
    
    pickupThing(thing){
        var result = {};
        if(this.things.collection[thing].heldBy === null){
            if(this.things.collection[thing].position === this.currentPosition){

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
        } else if(this.things.collection[thing].heldBy === 'player'){
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
        if(this.things.collection[thing].heldBy === 'player'){
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
    
    rejectInput(result){
        // if(result.success){
        //     console.log('partially valid', result);
        // } else {
        //     console.log(' completely invalid', result);
        // }
        result.valid = false;
        this.responseHandler(result);
    }
    
    addResponseHandler(fn){
        this.responseHandler = fn;
        fn({success: true, message:this.map[this.currentPosition].description});
    }
    
    inspectThing(){}
    
    openThing(){}
    
    activateThing(){}

    save(){

    }

}

export default Game;
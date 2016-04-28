import parser from '../utils/parser';

class Game {

    constructor({map, currentPosition, playerName, actors, things}) {
        var self = this;
        this.turn = 0;
        this.map = map;
        this.currentPosition = currentPosition;
        this.playerName = playerName;
        this.actors = actors;
        this.things = things;
        
        parser.addCommand('go')
            .set('syntax', ['go <validDirection:direction>'])
            .set('logic', function(args, valid, result) {
                if(valid){
                    self.moveTo(args.direction);
                } else {
                    self.rejectInput(result);
                }
            });
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
        this.responseHandler(result);
    }
    
    rejectInput(result){
        // if(result.success){
        //     console.log('partially valid', result);
        // } else {
        //     console.log(' completely invalid', result);
        // }
        this.responseHandler(result);
    }
    
    addResponseHandler(fn){
        this.responseHandler = fn;
        fn({success: true, message:this.map[this.currentPosition].description});
    }
    
    inspectThing(){}

    pickupThing(){}
    
    putDownThing(){}
    
    openThing(){}
    
    activateThing(){}

    save(){

    }

}

export default Game;
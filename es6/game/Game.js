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
        console.log('moving to: ', dir);
    }
    
    rejectInput(result){
        if(result.success){
            console.log('partially valid', result);
        } else {
            console.log(' completely invalid', result);
        }
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
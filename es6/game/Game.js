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
                    console.log('valid', result);
                    self.moveTo(args.direction);
                } else {
                    if(result.success){
                        console.log('partially valid', result);
                    } else {
                        console.log(' completely invalid', result);
                    }
                }
            });
    }

    moveTo(dir) {
        console.log('moving to: ', dir);
    }

    parseText(text){
        console.log('parsing: ', text);
        parser.parse(text);
    }

    save(){

    }

}

export default Game;
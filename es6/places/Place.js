import {observable} from "mobx";

class Place {

    constructor({name, descriptiveName, position, description, level=0, blockedTo}) {
        
        // name :               short but readable name
        // descriptiveName :    longer more descriptive name
        // position :           coordinate, like 'a4'
        // level :              like the floor in a building
        // description :        is read on enter
        // blockedTo :          directions not possible to travel in from here like, ['w','s']
        
        this.name = name; 
        this.description = description;
        this.descriptiveName = descriptiveName; 
        this.position = position; 
        this.level = level;
        this.blockedTo = blockedTo; 
    }
    
    describe() {
        return this.description + this.position +' is a scary place.';
    }
    
    canEnter(){
        return true;
    }
    
    onEnter(){
        if(this.canEnter()){
            // things can happen!
            return console.log(this.describe());
        } else {
            return console.log("You can't go that way.");
        }
    }
    
    onLeave(){
        
    }
    
    getNeighbor(dir){
        if(dir == 'west' || dir == 'w') return this.toW;
        if(dir == 'north' || dir == 'n') return this.toN;
        if(dir == 'south' || dir == 's') return this.toS;
        if(dir == 'east' || dir == 'e') return this.toE;
    }
}

export default Place;
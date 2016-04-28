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
        return this.description;
    }
    
    canEnter(){
        // can check state for things here
        return true;
    }
    
    onEnter(){
        var response = {};
        if(this.canEnter()){
            // return false or true
            // things can happen!
            response.message = this.describe();
            response.success = true;
        } else {
            response.message = "You can't go that way.";
            response.success = false;
        }
        return response;
    }
    
    onLeave(){
        // things can happen!
    }
    
    getNeighbor(dir){
        if(dir == 'west' || dir == 'w') return this.toW;
        if(dir == 'north' || dir == 'n') return this.toN;
        if(dir == 'south' || dir == 's') return this.toS;
        if(dir == 'east' || dir == 'e') return this.toE;
    }
}

export default Place;
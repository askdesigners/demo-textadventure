class Thing {

    constructor({name, canHold, heldBy, canUse, description, location, situation = 'on',  isLocked = false, useCount = 0, useLimit, consumable = false, hasRequirement = false, requirement}) {
        this.name = name;
        this.canHold = canHold;
        this.heldBy = heldBy;
        this.canUse = canUse;
        this.description = description; 
        this.location = location;
        this.situation = situation;
        this.isLocked = isLocked;
        this.useCount = useCount;
        this.useLimit = useLimit;
        this.consumable = consumable;
        this.hasRequirement = hasRequirement;
        this.requirement = requirement;
    }

    use(quantity = 1) {

    }

    drop(){

    }

    pickUp(){

    }

    inspect(){

    }

}
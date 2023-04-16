// Problem 1. 

function Character(name) {
    this.name="unnamed";
}

Character.prototype.setName=function(x){
    this.name=x;
}
function Warrior(name,strength) {
    // Object.setPrototypeOf(this,Character);
    Character.call(this,name);
    this.strength=0;
}
Object.setPrototypeOf(Warrior.prototype,Character.prototype);
Warrior.prototype.increaseStrength=function(x){
    this.strength=this.strength+100;
}
Warrior.prototype.decreaseStrength=function(x){
    this.strength=this.strength-100;
}
function Knight(name,strength,weapon) {
    Warrior.call(this,name,strength);
    this.weapon= 'no weapon';
}
Object.setPrototypeOf(Knight.prototype,Warrior.prototype);
Knight.prototype.setWeapon=function(x){
    this.weapon=x;
}
// Problem 2.

class Vehicle {
    constructor(make){
        this.make=make;
    }
    setMake(make){
        this.make=make;
    }
}

class Car extends Vehicle {
    constructor(make,model){
        super(make)
        this.model=model;
    }
}

class Truck extends Vehicle  {
    constructor(make,model,bedSize){
        super(make,model)
        this.bedSize=bedSize
    }

}

class Motorcycle extends Vehicle  {
    constructor(make,model,bedSize,engineSize){
        super(make,model,bedSize)
        this.engineSize=engineSize
    }
}

export { Character, Warrior, Knight, Vehicle, Car, Truck, Motorcycle}
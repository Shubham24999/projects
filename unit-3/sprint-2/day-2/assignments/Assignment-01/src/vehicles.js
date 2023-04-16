// Function constructor
function FourWheeler(wheels,model, color, speed, fuel) {
    // let obj={};
    this.wheels=wheels;
    this.model=model;
    this.color=color;
    this.speed=speed;
    this.fuel=fuel;
    // FourWheelerObject=Object.create(this);
    Object.setPrototypeOf(FourWheelerObject,this);
    // return obj;
}
FourWheeler.prototype.setSpeed=function(newSpeed){
    this.speed=newSpeed;
}
FourWheeler.prototype.updateColor=function(newcolor){
    this.color=newcolor;
}
FourWheeler.prototype.updateFuel=function(newfuel){
    this.fuel=newfuel;
}
// Parent object for Object.create
let FourWheelerObject = {};


// Store function contructor object here
var car1 = new FourWheeler(4,"Hyndai","white",200,"petrol") ;
// FourWheeler=Object.create(FourWheelerObject);
// car1.setFuel("diesel");
// Store Object.create here
var car2=Object.create(FourWheelerObject);

export { car1, car2 };

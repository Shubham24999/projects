function Artist(name, skill, profession){
    this.name=name
    this.skill=skill
    this.profession=profession;

    Object.setPrototypeOf(artistsObject,this)

}
Artist.prototype.getProfession=function(x){
    return this.profession;
}
Artist.prototype.print=function(){
    return `I am ${this.name}`;
}
// var person= new Artist("Rahul Dravid","Cricket","Cricketer");
var artistsObject = {}
// Do not change this
export {Artist, artistsObject};

function Person(name, age){
    this.name = name
    this.age = age
}

function Car(make, model){
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "Camry")
let myNewCar = new Car("TaTa", "Tiago")
// console.log(myCar);
// console.log(myNewCar);

function Tea(type){
    this.type = type
    this.describe = function() {
        return `This is a cup of ${this.type}`
    }
}

let myTea = new Tea("earl grey tea")
// console.log(myTea.describe());

function Animal(species, sound){
    this.species = species
    this.sound = sound
    Animal.prototype.sound = function(){
        return `${this.species} makes a ${this.sound} sound`
    }

}


let dog = new Animal("Dog", "woof")
// console.log(dog);
let cat = new Animal("Cat", "meow")
// console.log(cat);


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with the `new` keyword");
    }
    this.name = name
}

let tea = new Drink("Tea");
let coffee = new Drink("Coffee")

console.log(tea);
console.log(coffee);

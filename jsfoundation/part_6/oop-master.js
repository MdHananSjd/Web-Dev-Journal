let car = {
    make: "Toyota",
    mode: "Camry",
    year: 2020,
    start: function(){
        return `${this.make} car got produced in ${this.year}`
    }
}

// console.log(car.start());

Array.prototype.hanan = function(){
    return `Custom funciton ${this}`
}

let myArray = [1, 2, 3];
// console.log(myArray.hanan());
let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.hanan());


class Vehicle{
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car made by ${this.make}`
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make}: This is an inheritance example by the ${this.make} ${this.model}`
    }
}

let myCar = new Car("Toyota", "Camry")
console.log(myCar.start());
console.log(myCar.drive());


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
// console.log(myCar.start());
// console.log(myCar.drive());

//Encapsulation (Restricting certain data access)

class BankAccount{
    #balance = 0;
    
    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$${this.#balance}`
    }
}

let account = new BankAccount();
account.deposit(5000);
// console.log(account.getBalance());

//Abstraction (Hides the complex implementation details)

class CoffeeMachine{
    start(){
        //call DB
        //filter value
        return `Starting the machine...`
    }

    brewCoffee(){
        //Complex calculation
        return `Brewing coffee...`
    }

    pressStartButton(){
        let msgOne = this.start()
        let msgTwo = this.brewCoffee()
        return `${msgOne} \n${msgTwo}`
    }
}

let myMachine = new CoffeeMachine()
// console.log(myMachine.pressStartButton());


//Polymomrphism (The ability of something to have, or to be displayed in, more than one form)
class Bird{
    fly(){
        return `Hey I'm flying!`
    }
}

class Penguin extends Bird{
    fly(){
        return `Yo I can't fly dawg!`
    }
}

let bird = new Bird()
let penguin = new Penguin()

// console.log(bird.fly());
// console.log(penguin.fly());


//Static

class Calculator{
     static add(a, b){
        return a+b;
    }
}

// let miniCalc = new Calculator() (YOU DONT CALL A STATIC METHOD FROM A CLASS OBJECT)
// console.log(Calculator.add(1, 2));

//Getters and Setters

class Employee{
    constructor(name, salary){
        if (salary<0){
            throw new Error("Salary cannot be negative")
        }
        this.name =  name
        this._salary = salary
    }

    get salary(){
        return `You are not allowed to see this salary`
    }

    set salary(value){
        if (value<0){
            console.error("Invalid salary");
        }else{
            this._salary = value
        }
    }
}

let emp  = new Employee("jim", -50000)
console.log(emp.salary);

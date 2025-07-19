class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise!`);
        
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }

    speak(){
        super.speak();
        console.log(`${this.name} barks!`);
    }
}

class Cat extends Animal{
    constructor (name){
        super(name);
    }

    speak(){
        super.speak();
        console.log(`${this.name} meows!`);
        
    }
}


const myDog = new Dog("Richie");
console.log(myDog.speak());

const myCat = new Cat("Snowy");
console.log(myCat.speak());



//Number
let balance = 120;
let anotherBalance = new Number(120)
// console.log(anotherBalance.valueOf());
// console.log(typeof(balance));
// console.log(typeof(anotherBalance));


//Boolean
let isActive = true
let isReallyActive = new Boolean(true) //not recommended
// console.log(typeof(isActive));
// console.log(typeof(isReallyActive));

//Null and undefined
let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);

//String

let myString = "hello"
let username = 'Hanan'
let oldGreet = myString + 'Hanan'

const a = 5;
const b = 7;

let greetMessage = `Hello ${username}!` //string interpolation
// console.log(greetMessage);

let sum = `The value of the addition is ${a + b}.`
// console.log(sum);

//Symbols -> guarantees the uniqueness of something

let sm1 = Symbol()
let sm2 = Symbol()

console.log(sm1 );


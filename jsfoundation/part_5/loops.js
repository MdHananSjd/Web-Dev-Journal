let sum = 0;
for (let i=1 ; i < 6 ; i++) {
    sum += i
}

// console.log(sum);

let countdown = []
let x = 5
while(x){
    // console.log(x);
    countdown.push(x)
    x --
}

// console.log(countdown);

// let teaCollection = []
// let tea = ''
// do{
//     tea = prompt(`Enter your favorite tea! (type "stop" to finish)`)
//     if (tea !== 'stop'){
//         teaCollection.push(tea)
//     }
//     // console.log(teaCollection);
    
// }while (tea !== "stop")


let multipliedNumbers = []
let num = [2, 4, 6, 8, 10]
let pdt = 0
let mult = 2

for (let i=0 ; i<num.length ; i++){
    pdt = num[i] * mult
    multipliedNumbers.push(pdt)
}
// console.log(multipliedNumbers);

let anotherArray = []
for (let i=0 ; i<multipliedNumbers.length ; i++){
    console.log(multipliedNumbers[i]);

    anotherArray.push(multipliedNumbers[i])
}
console.log(anotherArray);

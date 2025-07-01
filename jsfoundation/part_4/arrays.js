let teaFlavours = ['green', 'black', 'oolong']
const firstTea = teaFlavours[0]


let softTea = teaFlavours; //soft copy

// let hardTea = [...teaFlavours] // hard copy
let hardTea = teaFlavours.slice() // hard copy

// teaFlavours.pop()
// console.log(softTea);
// console.log(hardTea);

let coffeeFlavours = ['espresso', 'black', 'latte']

let merged = teaFlavours.concat(coffeeFlavours)
// console.log(merged);

let menuLength = merged.length
// console.log(menuLength);

let inList = merged.includes('latte')
console.log(inList);

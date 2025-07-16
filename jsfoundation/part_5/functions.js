function makeTea(typeOfTea){
    let result = `Making ${typeOfTea}!`
    console.log(result);
    
}

// makeTea('orange tea')

// function orderTea(teaType){
//     let tea = teaType
//     function confirmOrder(){
//         console.log(`Order confirmed for ${tea}`);
//     }

//     return confirmOrder()
// }

// orderTea("earl grey")


function createTeaMaker (teaType){
    return function(teaType){
        return `Making ${teaType}!`
    }
}

let teaMaker = createTeaMaker()
console.log(teaMaker('earl grey'));



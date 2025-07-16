let computer = {cpu:12}
let lenovo = {
    screen: "HD",
    __proto__: computer
}

let tomHardware = {}
console.log(`computer`, computer.__proto__);
console.log(`lenovo`, lenovo.__proto__, lenovo.screen);


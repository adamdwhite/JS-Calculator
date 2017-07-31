console.log("let's do some math!");

// get element for buttons and fields:

let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButtoh");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");

var numOne = document.getElementById("numOne");
var numTwo = document.getElementById("numTwo");
var outPut = document.getElementById("outPut");

// add event listeners to each operator button:


addButton.addEventListener("click", addNumbers);

function addNumbers() {
    for (i = 0; i < numOne.value; i++) {
        let currentNum = i + 1;
        let calcAdd = currentNum.value + numTwo.value;
        console.log(calcAdd);
        // let outPut = calcAdd;
    }
};

// function subtractNumbers() {
//     for (i = 0; i < numOne.value; i++) {
//         let currentNum = i + 1;
//         let calcAdd = currentNum.value + numTwo.value;
//         console.log(calcAdd);
//         // let outPut = calcAdd;
//     }
// };

// function multiplyNumbers() {
//     for (i = 0; i < numOne.value; i++) {
//         let currentNum = i + 1;
//         let calcAdd = currentNum.value + numTwo.value;
//         console.log(calcAdd);
//         // let outPut = calcAdd;
//     }
// };

// function divideNumbers() {
//     for (i = 0; i < numOne.value; i++) {
//         let currentNum = i + 1;
//         let calcAdd = currentNum.value + numTwo.value;
//         console.log(calcAdd);
//         // let outPut = calcAdd;
//     }
// };
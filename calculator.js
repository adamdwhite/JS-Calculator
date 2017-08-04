console.log("let's do some math!");


// get element for buttons and fields:
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");

//input fields 
let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");

//output/answer field 
let solUtion = document.getElementById("outPut");

///////////////////////////////////////////////////////////////////

//Event listener for the ADD button:
addButton.addEventListener("click", addNumbers);

//Function to ADD:
function addNumbers() {
    var addAnswer = parseInt(numOne.value) + parseInt(numTwo.value);
    console.log(addAnswer);
    solUtion.innerHTML = addAnswer;
};

//Event listener for the SUBTRACT button:
subtractButton.addEventListener("click", subtractNumbers);

//Function to SUBTRACT:
function subtractNumbers() {
    var subtractAnswer = parseInt(numOne.value) - parseInt(numTwo.value);
    console.log(subtractAnswer);
    solUtion.innerHTML = subtractAnswer;
};

//Event listener for the MULTIPLY button:
multiplyButton.addEventListener("click", multiplyNumbers);

//Function to MULTIPLY:
function multiplyNumbers() {
    var multiplyAnswer = parseInt(numOne.value) * parseInt(numTwo.value);
    console.log(multiplyAnswer);
    solUtion.innerHTML = subtAnswer;
};

//Event listener for the DIVIDE button:
divideButton.addEventListener("click", divideNumbers);

//Function to MULTIPLY:
function divideNumbers() {
    var divideAnswer = parseInt(numOne.value) / parseInt(numTwo.value);
    console.log(divideAnswer);
    solUtion.innerHTML = divideAnswer;
};
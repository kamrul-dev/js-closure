// Closure Understanding

/* // add two numbers in regular way
var sum = function(num1, num2){
    return num1 + num2
};
console.log(sum(2, 4)); */


// Basic closure
/* let num1 = 2;
let num2 = 3;
let sum = function () {
    return num1 + num2;  // can access gloabal variable form inside the function
};
console.log(sum()); */


/* 
// use closure concept
let num1 = 2;

let sum = function () {
    let num2 = 3;  // closure
    return function () {
        return num1 + num2;
    }
};
let myFunc = sum();
console.log(myFunc); */

/* 
//use closure concept
function bankAccount(initialBalance){
    const balance = initialBalance;
    return function(){
        return balance;  // private property
    }
}

const account = bankAccount(1000);
// console.log(account());  // result 1000; access possible by reference
// console.log(balance);  // we can not access balance outside of function
 */

/* 
let num1 = 2;

let sum = function () {
    let num2 = 3;  
    return function () {
        return num1; // outer variable; closure not found.
    }
};
let myFunc = sum();
console.log(myFunc); */


let num1 = 2;

let sum = function () {
    let num2 = 3; 
    let num = 6; 
    return function () {
        return num; // inside the closure 6 found with num variable
    }
};
let myFunc = sum();
console.log(myFunc);
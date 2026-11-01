"use strict";
let name1 = "John Doe";
let numb = 42;
let isActive = false;
let mySymbol = Symbol();
let myBigInt = 9007199254740991n;
const addTwo = (a, b) => {
    return a + b;
};
// console.log(addTwo("5",10)); typeerror: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(addTwo(50, 10));

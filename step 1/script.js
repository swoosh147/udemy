'use strict'

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

var number = 5;
var string = "hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

var showType = typeof(null);

//alert('hello')

// let answer = confirm('why?');

// console.log(answer);

// let isChecked = true,
//     isPr = true;

// console.log(isChecked & isPr);

// alert
// prompt
// confirm

let testMessage = alert("alert");
console.log(testMessage);
console.log(typeof(testMessage))

let testMessage1 = prompt("prompt", "123");
console.log(testMessage1);
console.log(typeof(testMessage1))

let testMessage2 = confirm("confirm");
console.log(testMessage2);
console.log(typeof(testMessage2))
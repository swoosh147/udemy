' use strict ';

// function first() {
//     setTimeout(function() {
//             console.log(1);
//         },
//         500);
// }

// function second() {
//     console.log(2)
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log("Я учу " + lang);
//     callback();
// }

// function done() {
//     console.log("Я прошёл 3-й урок");
// }

// learnJS("JavaScript", done);

let arr = [1, 15, 4, 7, 22]

arr.sort(sortFunc);

console.log(arr);

function sortFunc(a, b) {
    return b - a;
}



let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;
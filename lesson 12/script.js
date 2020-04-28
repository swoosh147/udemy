' use strict ';

// let name = 'Ivan',
//     age = 30,
//     mail = 'dsf@wk.ru';

// document.write("User " + name + " age " + age + " his mail " + mail + "<br \/>");

// document.write(`User ${name} age ${age} his mail ${mail} \n`);


// function makeArray() {
//     var items = [];
//     for (let i = 0; i <= 10; i++) {
//         var item = function() {
//             console.log(i);
//         }
//         items.push(item);
//     }
//     return items;
// }

// var Arr = makeArray();

// Arr[1]();
// Arr[3]();
// Arr[9]();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let func = () => {
        console.log(this);
    };
    func();
});

function calcOrDouble(first, second = 2) {
    // second = second || 2; ES5 format
    console.log(first * second);
}

calcOrDouble(5, 3);
calcOrDouble(6);

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(5, 4);

console.log(typeof(square));
console.log(square);
console.log(square.calcArea());

let blog = ['you', 'vim', 'metyut'],
    video = ['werw', 'nbhgfry', 'dslqpqw'],
    internet = [...blog, ...video, 'qwerfdsa', 'zaqxsw'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

let numbers = [10, 5, 4];

log(...numbers);

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
    }

}

const item = new Options(300, 350, "red", 14, "center");

item.createDiv();
' use strict ';

//ES5 format

// function user(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// user.prototype.exit = function() {
//     console.log('Пользователь ' + this.name + ' ушёл');
// };

// let ivan = new user('Ivan', 10);
// let alex = new user('Alex', 25);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

//ES6 format

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello! ${this.name}`);
    }
    exit() {
        console.log(`User ${this.name} exit`);
    }
}

let ivan = new User('Ivan', 10);
let alex = new User('Alex', 25);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.exit();
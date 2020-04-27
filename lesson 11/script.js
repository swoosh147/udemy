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

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`);
//     }
//     exit() {
//         console.log(`User ${this.name} exit`);
//     }
// }

// let ivan = new User('Ivan', 10);
// let alex = new User('Alex', 25);
// console.log(ivan);
// console.log(alex);
// ivan.hello();
// alex.exit();


// let user = {
//     name: 'John'
// };

// function sayName() {
//     console.log(this);
//     console.log(this.name);
// }

// console.log(sayName.call(user));
// console.log(sayName.apply(user));


// function count(num) {
//     return this * num;
// }

// let double = count.bind(2);

// console.log(double(3));
// console.log(double(10));


let bytton = document.querySelector('button');
console.log(bytton);

bytton.addEventListener('click', function() {
    alert(this);
    console.log(this);
    this.style.backgroundColor = 'red';
});
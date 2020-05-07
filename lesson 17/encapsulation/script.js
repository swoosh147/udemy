function User(name, age) {
    this.name = name;
    // this.age = age;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст: ${this.age}`);
    }

    this.getAge = function() {
        return userAge;
    }
    this.setAge = function(age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            consol.log('Недопустимое значение');
        }
    }
}

let ivan = new User('Ivan', 25);

console.log(ivan.name);
console.log(ivan.userAge);
console.log(ivan.getAge());

ivan.setAge(30);


// ivan.name = "Alex";
// ivan.age = 30;
console.log('ivan.getAge()');
console.log(ivan.getAge());

ivan.say();
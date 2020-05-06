localStorage.setItem('number', 1);

console.log(localStorage.getItem('number'));

localStorage.removeItem('number');

localStorage.clear();

let person = {
    name: "Alex",
    age: 20,
    tech: ['mobile', 'notebook']
};

let serializedPerson = JSON.stringify(person);
localStorage.setItem("Alex", serializedPerson);

console.log(JSON.parse(localStorage.getItem('Alex')));
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

let json = '{"id":2}';

try {
    // console.log('Normal');
    // console.log(a);
    // console.log('continue');
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error("В этих данных нет имени");
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log('error');

    console.log(`Мы получили ошибку: ${error.name}`);
} finally {
    console.log('Я выполнюсь всегда');
}

console.log('continue again');
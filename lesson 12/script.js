' use strict ';

let name = 'Ivan',
    age = 30,
    mail = 'dsf@wk.ru';

document.write("User " + name + " age " + age + " his mail " + mail + "<br \/>");

document.write(`User ${name} age ${age} his mail ${mail} \n`);


function makeArray() {
    var items = [];
    for (let i = 0; i <= 10; i++) {
        var item = function() {
            console.log(i);
        }
        items.push(item);
    }
    return items;
}

var Arr = makeArray();

Arr[1]();
Arr[3]();
Arr[9]();
' use strict ';

// if (8 / 2 == 4) {
//     console.log("url");
// }
// let num = 50;
// switch (num) {
//     case num < 49:
//         console.log("Ошибка!");
//         break;
//     case num > 100:
//         console.log("Много!");
//         break;
//     case num > 80:
//         console.log("Всё еще много!");
//         break;
//     case 50:
//         console.log("Попал!");
//         break;
//     default:
//         console.log("Что-то пошло не так");
//         break;
// }

let money = +prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце");
let a2 = prompt("Во сколько обойдётся?");

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдётся?");
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
        a != '' && b != '' && a.length < 30) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
}

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay + " Руб.");

if (appData.moneyPerDay < 100) {
    console.log("Низкий уровень");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень");
} else {
    console.log("Ошибка!");
}
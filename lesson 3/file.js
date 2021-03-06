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
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 1; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдётся?");
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
            a != '' && b != '' && a.length < 30) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay + " Руб.");
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Низкий уровень");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень");
    } else {
        console.log("Ошибка!");
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let answer = prompt("Впишите статью необязательных расходов");
        appData.optionalExpenses[i] = answer;
        console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses()
' use strict ';

let money = prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    money,
    time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
let secondQuestion = prompt("Во сколько обойдётся?");
let a1 = prompt("Введите обязательную статью расходов в этом месяце");
let a2 = prompt("Во сколько обойдётся?");

appData.expenses = { firstQuestion: secondQuestion };
appData.expenses[a1] = a2;

alert(appData.money / 30);
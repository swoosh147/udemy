' use strict ';
console.log("hi");

// -----lesson 5 / 6

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemli = document.createElement("li"),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    column = document.getElementsByClassName('column'),
    promptforApple = document.querySelector("#prompt");


menu.insertBefore(menuItem[2], menuItem[1]);


menuItemli.classList.add('menu-item');
menuItemli.textContent = 'Пятый пукт';
menu.appendChild(menuItemli);

title.textContent = 'Мы продаем только подлинную технику Apple';

console.log(column);
console.log(adv);

adv.remove();

let yourOpinion = prompt("Ваше мнение о технике?");
promptforApple.textContent = yourOpinion;

document.body.style.backgroundImage = "url('img/apple_true.jpg')";
let drink = 0;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
        }, 3000);

    });
    return promise;
};

function win() {
    console.log('You win');
    (drink == 1) ? buyBeer(): giveMoney();
}

function loose() {
    console.log('You loose');
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам дали деньги');
}

shoot({})
    .then(mark => console.log('Вы попали в цель'))
    .then(win)
    .catch(loose)
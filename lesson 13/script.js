// let options = {
//     width: 1600,
//     height: 500,
//     background: "red",
//     font: {
//         size: '16px',
//         color: '#fff'
//     }

// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputRUB = document.getElementById('rub'),
    inputUSD = document.getElementById('usd');

inputRUB.addEventListener('input', function() {
    let request = new XMLHttpRequest();
    // request.open(method, url, async, login, password);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 & request.status == 200) {
            let data = JSON.parse(request.response);

            inputUSD.value = inputRUB.value / data.usd;
        } else {
            inputUSD.value = "Что-то пошло не так!";
        }
    });
});

inputUSD.addEventListener('input', function() {
    let request = new XMLHttpRequest();
});
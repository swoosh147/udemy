' use strict ';
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
    function catchData() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'current.json');
            request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
            request.send();

            request.onload = function() {
                (request.readyState === 4 && request.status == 200) ? resolve(this.response): reject();
            }
        });
    };
    catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUSD.value = inputRUB.value / data.usd;
        })
        .then(() => console.log(5000))
        .catch(() => inputUSD.value = "Что-то пошло не так!")
});


//     request.addEventListener('readystatechange', function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUSD.value = inputRUB.value / data.usd;
//         } else {
//             inputUSD.value = "Что-то пошло не так!";
//         }
//     });
// });

// inputUSD.addEventListener('input', function() {
//     let request = new XMLHttpRequest();
//     request.open('GET', 'current.json');
//     request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);
//             inputRUB.value = inputUSD.value / data.rub;
//         } else {
//             inputRUB.value = "Что-то пошло не так!";
//         }
//     });
// });
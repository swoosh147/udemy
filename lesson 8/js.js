' use-strict ';

let btn = document.querySelectorAll('button');

console.log(btn);

// btn[0].addEventListener('click', function() {
//     console.log('Нажал');
// });

btn.forEach(function(element) {
    element.addEventListener('click', function() {
        alert('Нажал ' + element.textContent);
    })
});
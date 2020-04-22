let box = document.querySelector('.box'),
    btn = document.querySelector('button');

console.log(box);

let width = box.scrollWidth,
    height = box.scrollHeight;

btn.addEventListener('click', function() {
    box.style.height = box.scrollHeight + 'px';
    console.log('box.style.height ' + box.style.height);
    console.log('box.scrollHeight ' + box.scrollHeight);

    // console.log(box.scrollTop);

    console.log(box.getBoundingClientRect());

    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.clientHeight);
});
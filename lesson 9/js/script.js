window.addEventListener('load', function() {
    console.log('Всё загрузилось. Тестирование load');
});

window.addEventListener('DOMContentLoaded', function() {
    console.log('Всё загрузилось. Тестирование DOMContentLoaded');
    let tab = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    console.log(tab);
    console.log(infoHeader);
    console.log(tabContent);

    function hideTabContent(a) {
        for (let index = a; index < tabContent.length; index++) {
            tabContent[index].classList.remove('show');
            tabContent[index].classList.add('hide');

        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    infoHeader.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let index = 0; index < tab.length; index++) {
                if (target == tab[index]) {
                    hideTabContent(0);
                    showTabContent(index);
                    break;
                }

            }
        }
    });

});
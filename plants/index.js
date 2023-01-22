(function () {
    const burgerItem = document.querySelector('.mobileBtn');
    const menu = document.querySelector('.navigation');
    const burgerClose = document.querySelector('.header__mobileBtn');
    burgerItem.addEventListener('click', () => { 
        menu.classList.toggle('nav_active');
        burgerClose.classList.toggle('mobileBtn_active');
    });
}());
    
console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +24. \n2.Вёрстка соответствует макету. Ширина экрана 380px +24. \n3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15.\n4.На ширине экрана 380px и меньше реализовано адаптивное меню +14.(не виполнены требования: плавность меню, закрытие меню при переходе по ссылке и клике мимо меню))\n6.Сумма баллов за задание Plants1 = 77 баллов')

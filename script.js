let obj = {
    span: document.querySelector('.burger-menu__span'),
    burgerMenu: document.querySelector('.burger-menu'),
    burgerMenuAction: document.querySelector('.action'),
    nav: document.querySelector('.nav')
};

let funBurgerMenu = obj.burgerMenu.addEventListener('click', function () {
    obj.span.style.display = 'none';
    if (obj.burgerMenu.className == "burger-menu action") {
        obj.burgerMenu.classList.remove('action');
        obj.span.style.display = 'flex';
        obj.nav.style.display = 'none';
    } else {
        obj.burgerMenu.classList.add('action');
        obj.nav.style.display = 'flex';
    }
});


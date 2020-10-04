let obj = {
    span: document.querySelector('.burger-menu__span'),
    burgerMenu: document.querySelector('.burger-menu'),
    burgerMenuAction: document.querySelector('.action'),
    nav: document.querySelector('.nav'),
    close: document.querySelector('.close'),
    feedback: document.querySelector('.feedback'),
    title: document.querySelector('.header-title'),
    logo: document.querySelector('.header-logo')
};

let funBurgerMenu = obj.burgerMenu.addEventListener('click', function () {
    obj.span.style.display = 'none';
    if (obj.burgerMenu.className == "burger-menu action") {
        obj.burgerMenu.classList.remove('action');
        obj.title.classList.remove('marginOff');
        obj.logo.classList.remove('displayOff');
        obj.title.style.margin = 'auto';
        obj.span.style.display = 'flex';
        obj.nav.style.display = 'none';
    } else {
        obj.title.classList.add('marginOff');
        obj.logo.classList.add('displayOff');
        obj.burgerMenu.classList.add('action');
        obj.nav.style.display = 'flex';
        obj.title.style.margin = '100px auto 0';
    }
});
obj.close.addEventListener('click', function () {
    obj.feedback.style.display = 'none';
});


window.addEventListener('load', (event) => {
    

    const burger = document.querySelector('.menu-burger');
    const list = document.querySelector('.menu__list');

    burger.addEventListener('click', () => {
        list.classList.toggle('active');
    })

});
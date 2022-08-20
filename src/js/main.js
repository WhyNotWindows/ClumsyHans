'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.upper__menu');
    const logo = document.querySelector('.upper__logo');

    if (window.pageYOffset == 0) {
        menu.style.background = 'rgba(217, 193, 145, .2)';
        logo.style.height = '100px';
    }
    window.addEventListener('scroll', () => {
        if (window.pageYOffset == 0) {
            menu.style.background = 'rgba(217, 193, 145, .2)';
            logo.style.height = '100px';
        } else {
            logo.style.height = '60px';
            menu.style.background = 'rgba(255, 255, 255, 1)';
        }
    });
});
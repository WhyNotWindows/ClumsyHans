'use strict';

const { over } = require("lodash");

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

    const faqButtons = document.querySelectorAll('.faq__plus');

    function changeFaq(id) {
        const blocks = document.querySelectorAll('.faq__block');
        const questions = document.querySelectorAll('.faq__question');
        const answers = document.querySelectorAll('.faq__answer');

        if (faqButtons[id].classList.contains('faq__plus_active')) {
            let height = parseInt(questions[id].clientHeight) + parseInt(answers[id].clientHeight) + 55;
            blocks[id].style.height = `${height}px`;
        } else {
            let height = parseInt(questions[id].clientHeight) + 30;
            blocks[id].style.height = `${height}px`;
        }
    }

    faqButtons.forEach((button, id) => {
        button.addEventListener('click', (e) => {
            button.classList.toggle('faq__plus_active');
            changeFaq(id);
        });
    });

    document.querySelectorAll('.faq__block').forEach((item, id) => {
        changeFaq(id);
    });

    // Hamburger

    const upper = document.querySelector('.upper__wrapper'),
          menuItem = document.querySelectorAll('.upper__link'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        upper.classList.toggle('upper__wrapper_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            upper.classList.toggle('upper__wrapper_active');
        });
    });

    // Sending letters

    const overlay = document.querySelector('.overlay');

    function openModal() {
        overlay.style.display = 'block';
    }

    function closeModal() {
        if (overlay) {
            overlay.style.display = 'none';
        }
    }

    closeModal();

    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
    
            fetch('php/smart.php', {
                method: 'POST',
                body: formData
            }).then(() => {
                openModal();
            }).catch(() => {
                console.log('Error: Message was not send');
            }).finally(() => {
                form.reset();
            });
        });
    }

    // language

    const lang = document.querySelector('#change-lang');

    lang.addEventListener('click', () => {
        lang.classList.toggle('upper__lang_active');
    });
    
    // slider

    
    const slider = tns({
        container: '.slider',
        items: 1,
        controls: false,
        slideBy: 1,
        //autoplay: true,
        mouseDrag: true,
        nav: false,
        prevButton: '.controls__prev',
        nextButton: '.controls__next',
        responsive: {
            1280: {
                controls: true
            },
            1024: {
                items: 3
            }
        }
    });

});
'use strict';

const { over } = require("lodash");

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.upper__menu');
    const wrapper = document.querySelector('.upper__wrapper');
    const logo = document.querySelector('.upper__logo');
    const menuMobile = document.querySelector('.upper__mobile');
    const offers = document.querySelector('.upper__offers');
    const hamburgerMobile = document.querySelector('.hamburger');

    if (window.pageYOffset == 0) {
        menu.style.background = 'rgba(217, 193, 145, .4)';
        //offers.style.background = 'rgba(217, 193, 145, .4)';
        logo.style.height = '100px';
        menu.style.height = '114px';
        wrapper.style.height = '100%';
        menuMobile.style.height = "114px";
        hamburgerMobile.style.top = "55%";
    }
    window.addEventListener('scroll', () => {
        if (window.pageYOffset == 0) {
            menu.style.background = 'rgba(217, 193, 145, .4)';
            //offers.style.background = 'rgba(217, 193, 145, .4)';
            menu.style.height = '114px';
            wrapper.style.height = '100%';
            logo.style.height = '100px';
            menuMobile.style.height = "114px";
            //hamburgerMobile.style.top = "50%";
        } else {
            logo.style.height = '60px';
            menu.style.height = '74px';
            wrapper.style.height = '100%';
            menu.style.background = 'rgba(255, 255, 255, 1)';
            //offers.style.background = 'rgba(255, 255, 255, 1)';
            menuMobile.style.height = "74px";
            //hamburgerMobile.style.top = "7px";
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
        //const btn = document.getElementById('btn');
        form.addEventListener('submit', (e) => {
            //e.preventDefault;
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            var body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> Message: ' + message;

/*             Email.send({
                //SecureToken : "96817efc-c022-4d9a-a2a6-a9ecd4d69c1f",
                SecureToken : "4383e51c-5eeb-425e-bdfa-1dcca49d8adf",
                To : 'hotel@clumsyhans.dk',
                From : "yaroslavgajdash@gmail.com",
                Subject : "New Message From ClumsyHans.dk!",
                Body : body
            }).then(
                alert("Message sent")
            );
            openModal(); */
            
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "hotel@clumsyhans.dk",
                Password : "1A0A3B0EB1B018DC5A2E3CDB9DB2F04913AE",
                To : 'hotel@clumsyhans.dk',
                From : "hotel@clumsyhans.dk",
                Subject : "New Message From ClumsyHans.dk!",
                Body : body
            }).then(
                alert('message sent')
            )/* .then(
                message => alert(message)
            ) */;
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "hotel@clumsyhans.dk",
                Password : "1A0A3B0EB1B018DC5A2E3CDB9DB2F04913AE",
                To : 'tlh@lund-gruppen.dk',
                From : "hotel@clumsyhans.dk",
                Subject : "New Message From ClumsyHans.dk!",
                Body : body
            })
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "hotel@clumsyhans.dk",
                Password : "1A0A3B0EB1B018DC5A2E3CDB9DB2F04913AE",
                To : 'ilh@lund-gruppen.dk',
                From : "hotel@clumsyhans.dk",
                Subject : "New Message From ClumsyHans.dk!",
                Body : body
            })
            openModal();
        });
    }

    // language

    const lang = document.querySelector('#change-lang');

    lang.addEventListener('click', () => {
        lang.classList.toggle('upper__lang_active');
    });
    
    // slider
    const inspiration = document.getElementById('insp');
    if(inspiration) {
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
    }

});
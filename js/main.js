"use strict";

// Navigation fixed
const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', function(){
    if(this.scrollY > 0) {
        navigation.classList.add('fixed');
    } else {
        navigation.classList.remove('fixed');
    }

    // window scroll - close navigation bar
    navButton.classList.remove('uil-multiply');
    navLinks.classList.remove('active');
});

// Open-close menu-bar
const navLinks = document.querySelector('.nav__links'),
      navButton = document.querySelector('#open__menu');

navButton.addEventListener('click', function(){
    this.classList.toggle('uil-multiply');
    navLinks.classList.toggle('active');
});
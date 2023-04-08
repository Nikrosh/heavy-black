
let scrollButton = document.querySelector('.scroll-to-top');

let mainMenu = document.querySelector('.header__main-menu');

window.onscroll = function () {
    if (window.scrollY > 100) {
        mainMenu.classList.add('header__main-menu-scroll');
    } else if (window.scrollY < 100) {
        mainMenu.classList.remove('header__main-menu-scroll');
    }
    
    if (window.scrollY > 700) {
        scrollButton.classList.add('scroll-to-top-visible');
    } else if (window.scrollY < 700) {
        scrollButton.classList.remove('scroll-to-top-visible');
    }
}

scrollButton.addEventListener('click', function () {
    window.scrollTo(0, 0);
}) 


// burger

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header__main-menu-mobile").classList.add("open-mobile-menu")
        document.querySelector("body").classList.add("body-fixed")
    })
    document.getElementById("close-menu").addEventListener("click", function() {
        document.querySelector(".header__main-menu-mobile").classList.remove("open-mobile-menu")
        document.querySelector("body").classList.remove("body-fixed")
    })
    document.querySelector(".header__menu-item-mobile--inner-list").addEventListener("click", function() {
        document.querySelector(".header__menu-inner-list-mobile").classList.toggle("header__menu-inner-list-mobile--open")
    })
})
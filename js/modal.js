// modal

let modalBlock = document.querySelector('.modal__block');
let body = document.querySelector('body');
let closeModalButton = document.querySelector('.modal__header-cross-btn');
let openModalButton = document.querySelector('.open-modal');
let modalBox = document.querySelector('.modal__box');

openModalButton.addEventListener('click', function () {
    body.classList.add('body-fixed');
    modalBlock.classList.add('visible');
    modalBlock.classList.remove('invisible');
    modalBox.classList.add('modal_visible');
})

closeModalButton.addEventListener('click', function () {
    body.classList.remove('body-fixed');
    modalBlock.classList.remove('visible');
    modalBlock.classList.add('invisible');
    modalBox.classList.remove('modal_visible');
})



const htmlElement = document.querySelector('html');
const buttonDark = document.querySelector('.button-dark');
const buttonDarkMobile = document.querySelector('.button-dark-mobile');

buttonDark.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
})

buttonDarkMobile.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
})
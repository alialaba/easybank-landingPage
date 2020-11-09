const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
let body = document.getElementById('body');
let ul = document.getElementById('list')

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');

    // ul.style.background = "#fff";

})
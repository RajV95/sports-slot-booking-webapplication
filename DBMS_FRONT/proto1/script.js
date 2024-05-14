<<<<<<< HEAD
let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin: 'top'});
sr.reveal('.hero-img', {delay: 450, origin: 'top'});
sr.reveal('.icons', {delay: 500, origin: 'bottom'});
sr.reveal('.scroll-down', {delay: 500, origin: 'bottom'});



=======
let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin: 'top'});
sr.reveal('.hero-img', {delay: 450, origin: 'top'});
sr.reveal('.icons', {delay: 500, origin: 'bottom'});
sr.reveal('.scroll-down', {delay: 500, origin: 'bottom'});



>>>>>>> 4ec76147f5b6b7c427930e69d20b60582e5430e6

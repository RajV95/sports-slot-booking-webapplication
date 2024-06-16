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

sr.reveal('.icons', {delay: 500, origin: 'bottom'});

const monthButtons = document.querySelectorAll('.monthButs button');

monthButtons.forEach(button => {
    button.addEventListener('click', () => {
        monthButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        document.querySelectorAll('.book button').forEach(button => {
            button.classList.remove('active');
            button.setAttribute('disabled', 'disabled');
        });
    });
});

const timeButtons = document.querySelectorAll('.timeButs button');

timeButtons.forEach(button => {
    button.addEventListener('click', () => {
        timeButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        document.querySelectorAll('.book button').forEach(button => {
            button.classList.add('active');
            button.removeAttribute('disabled');
        });
    });
});

const slotButtons = document.querySelectorAll('.slotTypes button');

slotButtons.forEach(button => {
    button.addEventListener('click', () => {
        slotButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        document.querySelectorAll('.book button').forEach(button => {
            button.classList.remove('active');
            button.setAttribute('disabled', 'disabled');
        });
    });
});

function showPayDetails1() {
    var st = document.querySelectorAll('.slotTypes .active')[0].textContent;
    if(st == "Semester Slot"){
        var m = "May to August";
    } else {
        var m = document.querySelectorAll('.monthButs .active')[0].textContent;
    }
    var t = document.querySelectorAll('.timeButs .active')[0].textContent;
    var f = "$6969";

    document.getElementById('bst').textContent = st;
    document.getElementById('bm').textContent = m;
    document.getElementById('bt').textContent = t;
    document.getElementById('bp').textContent = f;

    var modal = document.getElementById('bookModal');
    modal.style.display = 'block';
}


window.onclick = function(event) {
    var modal = document.getElementById('bookModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

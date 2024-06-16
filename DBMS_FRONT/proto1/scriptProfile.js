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

function changePhNo(){
    var newPhoneNumber = prompt("Enter new phone number:");
    if (/^\d{10}$/.test(newPhoneNumber)) {
        document.getElementById("phone").innerText = newPhoneNumber;
    } else {
        alert("Phone number should contain exactly 10 numeric characters.");
    }
}


const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list')
const countryHeader = document.querySelectorAll('.header--country')



navToggle.addEventListener('click', () => {
    navList.classList.toggle('nav__list--show');
  document.body.classList.toggle('nav-open');
});






const nav = document.querySelector('#main')
const topOfNav = nav.offsetTop;


function fixNav() {
    if (window.scrollY >=topOfNav) {
        // adds padding so that flow of document resembles before fizxed nav
        document.body.style.paddingTop = nav.offsetHeight + 'px' - '2em' + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav')
    }
}

window.addEventListener('scroll', fixNav)


// Styling Buttons
function plus() {
    txt = document.body;
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 5) + 'px';
}
function minus() {
    txt = document.body;
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    if (currentSize > 15) {
        txt.style.fontSize = (currentSize - 5) + 'px';
    }
}
function mode() {
    document.body.classList.toggle("dark");
}

// SCROLLER
function scroller(scroll_pos) {
    document.getElementById(scroll_pos).scrollIntoView();
}

// COUNTER
const countEl = document.getElementById('counter');
updateVisitCount();
function updateVisitCount() {
    fetch('https://api.countapi.xyz/hit/sdmusicappreciation/test')
    // https://api.countapi.xyz/hit/sdmusicappreciation/electronic
    .then(res => res.json())
    .then(res => {
        countEl.innerHTML = res.value;
    })
}

// MOBILE MENU
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function mobile_btn_func() {
document.getElementById("btn_group_mobile_id").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.menu_button_mobile')) {
    var dropdowns = document.getElementsByClassName("btn_group_mobile");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}
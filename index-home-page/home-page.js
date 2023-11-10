let prevScrollPos = window.scrollY;;
const navbar = document.querySelector('header');

window.onscroll = function () {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0'; // Show the navbar
    } else {
        navbar.style.top = '-50px'; // Hide the navbar
    }

    prevScrollPos = currentScrollPos;
};
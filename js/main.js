const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
}
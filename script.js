// =========================================
// AGRAWAL OVERSEAS
// Main JavaScript
// =========================================


// Current year in footer

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================================
// MOBILE MENU
// =========================================

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", function () {

    nav.classList.toggle("mobile-active");

});


// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you. Your enquiry has been received.";

    contactForm.reset();

});
"use strict";
const btnHamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

btnHamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  console.log("menu clicked");
});

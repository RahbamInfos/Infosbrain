'use strict';

// add event on multiple elements

const addEventOnElement = function (elements, evetType, callback){
  for (let i=0, len= elements.length; i<len; i++){
    elements[i].addEventListener(evetType, callback);
  }
}
// Navbar toggle for mobile

const navbar= document.querySelector("[data-navbar]");
const navToggleBtn=document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar =function() {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);

// Parallex effect

const parallaxElement = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event =>{
  for (let i = 0, len= parallaxElement.length; i<len; i++){

    const  movementX=(event.clientX / window.innerWidth) * Number(parallaxElement[i].dataset.parallaxSpeed);
    const movementY=(event.clientX / window.innerHeight) * Number(parallaxElement[i].dataset.parallaxSpeed);

    parallaxElement[i].animate({
      transform: `translate(${movementX}px, ${movementY}px)`}, {duration:500, fill: "forwards"});
  }
})
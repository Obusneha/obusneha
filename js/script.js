// show menu

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav_toggle", "nav_menu");

// Active and remove active

const navLink = document.querySelectorAll(".nav_link");
navLink.forEach((n) => n.classList.remove("active"));
function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Remove active class while scrolling
window.addEventListener("scroll", () => {
  navLink.forEach((n) => n.classList.remove("active"));
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

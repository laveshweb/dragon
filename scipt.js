const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const total = images.length;

  let current = 0;

  setInterval(() => {
    current = (current + 1) % total;
    slides.style.transform = `translateX(-${current * 100}%)`;
  }, 3000); // slide every 3 sec
});
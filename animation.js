gsap.from(".bottommain" , {
  scale : 0,
  durartion : 2,
})
gsap.from(".topmain" , {
  scale : 0,
  durartion : 2,
})
gsap.from(".full-rounded i" , {
  scale : 0,
  duration: 0.8, // fixed spelling
Color: "#ef3c18e0",
  repeat : -1,
  yoyo : true,
})

const items = document.querySelectorAll(".food-item");
let index = 0;

function showNextItem() {
  if (window.innerWidth >= 1024) return; // No animation on desktop

  items[index].classList.remove("active");
  index = (index + 1) % items.length;
  items[index].classList.add("active");
}

setInterval(showNextItem, 3000); // change every 3 sec

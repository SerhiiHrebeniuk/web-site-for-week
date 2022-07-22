// User Info
const items = document.querySelectorAll('.userInfo__item');
;

items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
}) 



// Carousel

const slides = document.querySelectorAll(".carousel__slider_item");


slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});


// Carousel Buttons

const nextSlide = document.querySelector(".carousel__button_right");


let curSlide = 0;

let maxSlide = slides.length - 1;



nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    // curSlide = 0;
    nextSlide.disabled = true;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


const prevSlide = document.querySelector(".carousel__button_left");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    // curSlide = maxSlide;
    prevSlide.disabled = true;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


const menu = document.querySelector(".menu__burger_list");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".header__burgerMenu");


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

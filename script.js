/* Begin declarations...*/
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

/*
let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;
*/


let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

/* End declarations...*/

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});


var swiper = new Swiper(".reviews-slider", {
   grabCursor: true,
   loop: true,
   autoHeight: true,
   spaceBetween: 20,
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});

/*

loadMoreBtn.onclick = () => {
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++) {
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = 'none';
   }
};
*/


closeBtn.addEventListener("click", () => {
   sidebar.classList.toggle("open");
   menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
   sidebar.classList.toggle("open");
   menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
   if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
   }
}
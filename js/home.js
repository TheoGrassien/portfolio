// Headline text switcher effect

let words = document.querySelectorAll(".headline-switcher span");
let index = 0;
const textInDuration = 2500;
const textOutDuration = 2300;

function switchWord() {
  for (let i = 0; i < words.length; i++) {
    words[i].classList.remove("text-in", "text-out");
  }
  words[index].classList.add("text-in");
  setTimeout(function () {
    words[index].classList.add("text-out");
  }, textOutDuration);

  setTimeout(function () {
    if (index == words.length - 1) {
      index = 0;
    } else {
      index++;
    }
    switchWord();
  }, textInDuration);
}

switchWord();

// Responsive position of the abstract object

let abstractImg = document.querySelector(".abstract-img");
let landing = document.querySelector(".landing");
let page = document.querySelector(".page");

function setPosition() {
  // Récupérer la taille de la partie haute
  let topHeight = 88 + 62 + landing.offsetHeight + 48;

  // Ajuster la position de l'image et de la suite du contenu (page)
  abstractImg.style.top = topHeight + "px";

  let pageTop = topHeight + abstractImg.offsetHeight;
  page.style.top = pageTop + "px";
  return pageTop;
}

window.addEventListener("load", setPosition);
window.addEventListener("resize", setPosition);

// Sticky gallery horizontal scroll effects

window.addEventListener("load", () => {
  let gallery = document.querySelector(".gallery");
  let galleryContainer = document.querySelector(".gallery-container");
  let gallerySticky = document.querySelector(".gallery-sticky");
  let lastImage = document.querySelector(".gallery img:last-of-type");

  // let galleryTopDist = galleryContainer.getBoundingClientRect().top;

  let initialGalleryTopDist;
  let scrollDistance;
  let galleryWidth = gallery.scrollWidth;
  let windowWidth = window.innerWidth;
  // let lastImageRightDist =
  //   galleryWidth - lastImage.getBoundingClientRect().right;
  // galleryWidth = galleryWidth - lastImageRightDist;

  initialGalleryTopDist = galleryContainer.getBoundingClientRect().top;
  scrollDistance = initialGalleryTopDist + galleryWidth - windowWidth;
  galleryContainer.style.height = galleryWidth + "px";

  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY;

    if (scrollTop >= initialGalleryTopDist && scrollTop <= scrollDistance) {
      gallery.style.transform =
        "translateX(-" + (scrollTop - initialGalleryTopDist) + "px)";
    }
  });
});

// window.addEventListener("scroll", () => {
//   galleryTopDist = galleryContainer.getBoundingClientRect().top;
//   if (galleryTopDist <= 0) {
//     // console.log("ok");
//     gallery.style.transform = `translateX(-${
//       window.scrollY - initialGalleryTopDist
//     }px)`;
//   }
// });

// let mail = document.querySelector(".mail");
// fitty(".mail");

// Color header
let pageTopDist = setPosition();

window.addEventListener("scroll", () => {
  if (window.scrollY >= pageTopDist) {
    console.log("ok");
    header.classList.remove("dark-header");
  } else {
    header.classList.add("dark-header");
  }
});

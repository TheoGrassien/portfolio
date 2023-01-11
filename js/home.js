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
  ScrollTrigger.refresh();
  return pageTop;
}

window.addEventListener("load", setPosition);
window.addEventListener("resize", setPosition);

// Color header
let pageTopDist = setPosition();

window.addEventListener("scroll", () => {
  if (window.scrollY >= pageTopDist) {
    header.classList.remove("dark-header");
  } else {
    header.classList.add("dark-header");
  }
});

// Sticky gallery horizontal scroll effects
let gallery = document.querySelector(".gallery");
let galleryContainer = document.querySelector(".gallery-container");
let gallerySticky = document.querySelector(".gallery-sticky");
let lastImage = document.querySelector(".gallery img:last-of-type");

// function stickyGallery() {
//   window.addEventListener("load", () => {
//     let initialGalleryTopDist;
//     let scrollDistance;
//     let galleryWidth = gallery.scrollWidth;
//     let windowWidth = window.innerWidth;

//     initialGalleryTopDist = galleryContainer.getBoundingClientRect().top;
//     scrollDistance = initialGalleryTopDist + galleryWidth - windowWidth;
//     galleryContainer.style.height = galleryWidth + "px";

//     window.addEventListener("scroll", function () {
//       var scrollTop = window.scrollY;

//       if (scrollTop >= initialGalleryTopDist && scrollTop <= scrollDistance) {
//         gallery.style.transform =
//           "translateX(-" + (scrollTop - initialGalleryTopDist) + "px)";
//       }
//     });
//   });
// }

/**
 * By Alvaro Trigo
 * Follow me on Twitter: https://twitter.com/imac2
 */
// (function () {
//   init();

//   var g_containerInViewport;
//   function init() {
//     setStickyContainersSize();
//     bindEvents();
//   }

//   function bindEvents() {
//     window.addEventListener("wheel", wheelHandler);
//   }

//   function setStickyContainersSize() {
//     document
//       .querySelectorAll(".gallery-container")
//       .forEach(function (container) {
//         const stikyContainerHeight =
//           container.querySelector(".gallery-sticky").scrollWidth;
//         container.setAttribute(
//           "style",
//           "height: " + stikyContainerHeight + "px"
//         );
//       });
//   }

//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
//   }

//   function wheelHandler(evt) {
//     const containerInViewPort = Array.from(
//       document.querySelectorAll(".gallery-container")
//     ).filter(function (container) {
//       return isElementInViewport(container);
//     })[0];

//     if (!containerInViewPort) {
//       return;
//     }

//     var isPlaceHolderBelowTop =
//       containerInViewPort.offsetTop < document.documentElement.scrollTop;
//     var isPlaceHolderBelowBottom =
//       containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
//       document.documentElement.scrollTop;
//     let g_canScrollHorizontally =
//       isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

//     if (g_canScrollHorizontally) {
//       containerInViewPort.querySelector(".gallery-sticky").scrollLeft +=
//         evt.deltaY;
//     }
//   }
// })();

// const scrollContainer = document.querySelector(".gallery-sticky");

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   // console.log(evt.deltaY);
//   scrollContainer.scrollLeft += evt.deltaY;
// });

// Switch gallery to horizontal scroll when is touch device
// if (touchDevice()) {
//   gallerySticky.classList.add("touch");
// } else {
//   stickyGallery();
// }

// gsap.to(".gallery-sticky", {
//   xPercent: -100,
//   x: () => innerWidth,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".gallery-sticky",
//     start: "top top",
//     end: () => innerWidth * 3,
//     scrub: true,
//     pin: true,
//     invalidateOnRefresh: true,
//     anticipatePin: 1,
//   },
// });
// console.log(gallerySticky.offsetWidth);

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".gallery img");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    start: "top 104px",
    trigger: ".gallery",

    pin: true,
    scrub: true,
    markers: true,

    // snap: directionalSnap(1 / (sections.length - 1)),
    end: `+=${gallery.scrollWidth}`,
  },
});

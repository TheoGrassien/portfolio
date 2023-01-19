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
gsap.registerPlugin(ScrollTrigger);
let images = gsap.utils.toArray(".gallery img");
let gallery = document.querySelector(".gallery");

function getMaxWidth() {
  maxWidth = 0;
  images.forEach((image) => {
    maxWidth += image.offsetWidth;
  });
  maxWidth += 48 * (images.length - 1);
  return maxWidth;
}
getMaxWidth();

// Activate the effect only when is not touche device
if (touchDevice()) {
  gallery.classList.add("touch");
} else {
  gsap.to(images, {
    x: () => `-${getMaxWidth() - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      start: "top 104px",
      trigger: ".gallery",

      pin: true,
      scrub: true,
      // markers: true,
      invalidateOnRefresh: true,

      end: () => `+=${getMaxWidth()}`,
    },
  });
}

// Parrallax effect
if (touchDevice()) {
  landing.style.position = "fixed";
} else {
  window.addEventListener("scroll", () => {
    landing.style.top = window.scrollY * 0.7 + "px";
  });
}

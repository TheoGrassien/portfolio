let work = document.querySelector(".work");
let workTopDist = work.offsetTop;
console.log(workTopDist);

window.addEventListener("scroll", () => {
  if (window.scrollY >= workTopDist) {
    header.classList.remove("hide");
    header.classList.remove("dark-header");
  }
  if (window.scrollY <= workTopDist - 400) {
    header.classList.add("dark-header");
    header.classList.add("hide");
  }
});

// // Add scroll animation class on screenshots

// let screenshots = document.querySelectorAll(".screenshots img");
// screenshots.forEach((screenshot) => {
//   screenshot.classList.add("animation-hidden");
// });

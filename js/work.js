// Color header
let work = document.querySelector(".work");
let workTopDist = work.offsetTop;

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

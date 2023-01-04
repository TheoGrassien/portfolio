// Cursor and buttons

let cursor = document.querySelector("#cursor");
let btnHover = false;
let scrolling = false;

function placeCursor(e) {
  if (btnHover) {
    cursor.style.top = e.pageY - 4 + "px";
    cursor.style.left = e.pageX - 4 + "px";
    cursor.style.opacity = 0;
    cursor.style.zIndex = 0;
  } else {
    cursor.style.top = e.clientY + 24 + "px";
    cursor.style.left = e.clientX + 24 + "px";
    cursor.style.opacity = 1;
    cursor.style.zIndex = 100;
  }
}

if (touchDevice()) {
  cursor.style.display = "none";
}

let userAgentString = navigator.userAgent;
let safariAgent = userAgentString.indexOf("Safari") > -1;

if (safariAgent) {
  cursor.style.transition = "revert";
}

document.addEventListener("mousemove", (e) => placeCursor(e));
// document.addEventListener("scroll", () => (scrolling = true));

let btns = document.querySelectorAll(".btn, .work-card, .social");
btns.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    // console.log(btn.getBoundingClientRect().top.);
    let x = e.clientX - btn.getBoundingClientRect().left;
    let y = e.clientY - btn.getBoundingClientRect().top;
    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  });
  btn.addEventListener("mouseover", (e) => {
    btnHover = true;
  });
  btn.addEventListener("mouseout", (e) => {
    btnHover = false;
  });
});

// Hide cursor when is touch device
function touchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

// Responsive NavBar

let burgerButton = document.querySelector("header button");
let burgerIcon = document.querySelector("header .burger-icon");
let navBar = document.querySelector("header nav");
let header = document.querySelector("header");
let main = document.querySelector("main");
let navBarLinks = document.querySelectorAll("nav li");

function switchNavBar() {
  burgerIcon.classList.toggle("active");
  navBar.classList.toggle("active");
  header.classList.toggle("active");
  main.classList.toggle("active");
  body.classList.toggle("hidden");
}

navBarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navBar.classList.contains("active")) {
      console.log("click");
      switchNavBar();
    }
  });
});

burgerButton.addEventListener("click", switchNavBar);

// NavBar animation

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation-show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".animation-hidden");
hiddenElements.forEach((el) => observer.observe(el));

/////////////// scrolling
const links = document.querySelectorAll(".nav-link");
const navLinks = document.querySelector(".navbar-nav");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
navLinks.addEventListener("click", function (e) {
  links.forEach((link) => {
    link.classList.remove("clicked");
  });
  const clicked = e.target.closest(".nav-link");
  if (!clicked) return;
  clicked.classList.add("clicked");
});

//////////////
const scrollBtn = document.querySelector(".ScrollUp");
const header = document.querySelector(".header");
scrollBtn.addEventListener("click", function (e) {
  e.preventDefault();
  header.scrollIntoView({ behavior: "smooth" });
});
const landingPage = document.querySelector(".landing-page");
const stikyScrollbtn = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    scrollBtn.classList.remove("hide");
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
    scrollBtn.classList.add("hide");
  }
};
const aboutUsObserver = new IntersectionObserver(stikyScrollbtn, {
  threshold: 0.2,
  root: null,
  rootMargin: "50px",
  // rootMargin: `${landingPage.getBoundingClientRect().height}px`,
});
aboutUsObserver.observe(landingPage);
//////////////// sections revealing on scroll
const allSections = document.querySelectorAll(".section");
const sectionOnScroll = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionOnScroll, {
  root: null,
  threshold: 0.2,
});
allSections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});
/////////////// Modal
const getStartedBtn = document.querySelectorAll(".get-started");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".getStartedPopUp");
const btnCloseModal = document.querySelector(".btn--close-modal");
const openMoadl = (element) => {
  element.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeMoadl = (element) => {
  element.classList.add("hidden");
  overlay.classList.add("hidden");
};
getStartedBtn.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    openMoadl(modal);
  });
});
btnCloseModal.addEventListener("click", function (e) {
  e.preventDefault();
  closeMoadl(modal);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden"))
    closeMoadl(modal);
});
overlay.addEventListener("click", function (e) {
  e.preventDefault();
  closeMoadl(modal);
});
///////////
const portfolioLinks = document.querySelector(".portfolio__links");
const portfolioLink = document.querySelectorAll(".btn-light");

portfolioLinks.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn-light");
  if (!clicked) return;
  portfolioLink.forEach((link) => {
    link.classList.remove("portfolio__btn__clicked");
  });
  clicked.classList.add("portfolio__btn__clicked");
  portfolioHandler(clicked, clicked.textContent);
});

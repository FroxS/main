let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

navLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let href = document.querySelector(this.getAttribute("href"));
    if (href != null) {
      href.scrollIntoView({
        behavior: "smooth",
      });
    }
    document
      .querySelectorAll(".navbar a")
      .forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

window.onscroll = () => {
  let scrollPos = window.scrollY + window.innerHeight / 2;
  sections.forEach((sec) => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollPos >= offset && scrollPos < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        let currentheader = document.querySelector(
          "header nav a[href*=" + id + " ]"
        );
        currentheader.classList.add("active");
      });
    }
  });
};
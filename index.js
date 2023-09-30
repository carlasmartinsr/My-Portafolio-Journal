const siteNavigation = document.querySelector(".site-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const menuIcon = navToggle.querySelector("i[name='menu']");
const menuClose = navToggle.querySelector("i[name='close']");
const galleryMore = document.querySelector(".gallery-more");
let dateHTML = document.querySelector(".year");

navToggle.addEventListener("click", () => {
  const visibility = siteNavigation.getAttribute("data-visible");

  if (visibility === "false") {
    siteNavigation.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", true);
    menuClose.style.display = "block";
    menuIcon.style.display = "none";
  } else if (visibility === "true") {
    siteNavigation.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", false);
    menuClose.style.display = "none";
    menuIcon.style.display = "block";
  }
});

let today = new Date();
today = today.getFullYear();
document.querySelector(".year").innerHTML = today;

document.addEventListener("DOMContentLoaded", () => {
  const galleryMore = document.getElementById("galleryMore");
  const moreProjects = document.querySelector(".more");

  if (galleryMore && moreProjects) {
    galleryMore.addEventListener("click", () => {
      if (
        moreProjects.style.display === "none" ||
        moreProjects.style.display === ""
      ) {
        galleryMore.style.display = "none";
        moreProjects.style.display = "flex";
      } else {
        galleryMore.style.display = "block";
        moreProjects.style.display = "none";
      }
    });
  }
});

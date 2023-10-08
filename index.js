const siteNavigation = document.querySelector(".site-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const menuIcon = navToggle.querySelector("i[name='menu']");
const menuClose = navToggle.querySelector("i[name='close']");
const projectsLink = document.querySelector(".projects-link");
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

if (projectsLink !== null) {
  projectsLink.addEventListener("click", () => {
    const projectsMore = document.querySelector(".projects-more ");
    if (
      projectsMore.style.display === "none" ||
      projectsMore.style.display === ""
    ) {
      projectsLink.style.display = "none";
      projectsMore.style.display = "flex";
    } else {
      projectsLink.style.display = "block";
      projectsMore.style.display = "none";
    }
  });
}

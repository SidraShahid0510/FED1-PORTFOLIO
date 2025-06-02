/*hamburger menu*/
const menuIcon = document.querySelector(".menu-icon");
const openMenu = menuIcon.querySelector(".open-menu");
const closeMenu = menuIcon.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-links");

closeMenu.style.display = "none";
// Open mobile menu
openMenu.addEventListener("click", () => {
  navLinks.classList.add("active");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});
// Close mobile menu

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("active");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

revealOnScroll();

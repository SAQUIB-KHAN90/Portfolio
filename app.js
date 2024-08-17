// var typed = new typed(".text", {
//   Strings: ["Frontend Developer", "Web Developer"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 1000,
//   loop: true,
// });
function userScroll() {
  const navbar = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);

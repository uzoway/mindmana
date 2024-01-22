window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 5) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
})


const nav = document.querySelector(".mobile__navigation");
const hamburger = document.querySelector(".navigation__hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})
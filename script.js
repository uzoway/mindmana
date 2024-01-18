window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 5) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
})
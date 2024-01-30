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


// Card Toggle Functionality

const cardsParent = document.querySelector(".cards__container");
const shuffleButton = document.querySelector("#shuffle__card");

[...cardsParent.children].reverse().forEach(i => cardsParent.append(i));

shuffleButton.addEventListener("click", shuffleCard);

function shuffleCard(e) {
    let currentCard = document.querySelector(".cards__container--item:last-child");

    currentCard.style.animation = "shuffle 700ms forwards";

    setTimeout(() => {
        currentCard.style.animation = "";
        cardsParent.prepend(currentCard);
    }, 700);
}
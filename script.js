let typed = new Typed(".text", {
    strings:["Фронтенд-разработчик", "Веб-разработчик", "Ютубер"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const progressBar = document.querySelectorAll(".progress-bar")
const progressLine = document.querySelectorAll(".progress-line")
const readialCards = document.querySelector(".readial__cards")
const skills = document.querySelector(".skills")
const navMenu = document.querySelector(".nav__menu")
const navListItem = document.querySelectorAll(".nav__list-item")
const navBurger = document.querySelector(".nav__burger")

function entries(entries) {
    console.log(entries[0]);
    for (let i = 0; i < progressBar.length; i++) {
        if (entries[0].isIntersecting) {
            progressBar[i].classList.add("active")
            progressLine[i].classList.add("active")
        } else {
            progressBar[i].classList.remove("active")
            progressLine[i].classList.remove("active")
        }
    }
}

const observer = new IntersectionObserver(entries)
observer.observe(skills) 

navBurger.addEventListener("click", () => {
    navBurger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

for (let i = 0; i < navListItem.length; i++) {
    navListItem[i].addEventListener("click", () => {
        navBurger.classList.remove("active")
        navMenu.classList.remove("active")
    })
}
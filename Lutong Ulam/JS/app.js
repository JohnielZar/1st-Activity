// ======================
// NAVBAR SCROLL EFFECT
// ======================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// ======================
// SCROLL REVEAL ANIMATION
// ======================

const revealElements = document.querySelectorAll(
    ".story, .ingredients, .journey, .nutrition, .chef, .showcase"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ======================
// NUTRITION COUNTER
// ======================

const counters = document.querySelectorAll(".nutrition-grid h1");

function animateCounter(counter) {

    const original = counter.innerText;

    let target;

    if (original.includes("g")) {

        target = parseInt(original);

        counter.innerText = "0g";

    }

    else {

        target = parseInt(original);

        counter.innerText = "0";

    }

    let current = 0;

    const increment = Math.ceil(target / 50);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        if (original.includes("g")) {

            counter.innerText = current + "g";

        }

        else {

            counter.innerText = current;

        }

    }, 20);

}

let counterStarted = false;

window.addEventListener("scroll", () => {

    const nutrition = document.querySelector(".nutrition");

    const top = nutrition.getBoundingClientRect().top;

    const trigger = window.innerHeight - 150;

    if (top < trigger && !counterStarted) {

        counters.forEach(counter => animateCounter(counter));

        counterStarted = true;

    }

});

// ======================
// HERO IMAGE FLOATING
// ======================

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 80;

    const y = (window.innerHeight / 2 - e.pageY) / 80;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;

});

// ======================
// BUTTON RIPPLE EFFECT
// ======================

const button = document.querySelector(".btn");

button.addEventListener("click", function (e) {

    let ripple = document.createElement("span");

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    let x = e.clientX - e.target.offsetLeft;

    let y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;

    ripple.style.top = `${y}px`;

    setTimeout(() => {

        ripple.remove();

    }, 600);

});
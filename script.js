const toggle = document.getElementById('menu-toggle');

if(toggle) {
    toggle.addEventListener('change' , () => {
        document.body.classList.toggle
        ("no-scroll" , toggle.checked);
    });
}

const words = [
    "Programmer" , "Web Developer" , "Computer Engineer" , "DSA Enthusiast"
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if(!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type , typingDelay);
        }
    } else {
        typingText.textContent = currentWord.substring(0 , charIndex - 1);
        charIndex--;

        if(charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type , 500);
        } else {
            setTimeout(type , erasingDelay);
        }
    }
};

document.addEventListener("DOMContentLoaded" , () => {
    if(words?.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener('click' , (e) => {
        // e.preventDefault();

        navlinks.forEach((l) => {
            if(l === link) {
                l.classList.add("active");
            } else {
                l.classList.remove("active");
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if(tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        })

    })
})

navlinks.forEach((link) => {
    link.addEventListener('click', () => {

        const tabName = link.dataset.tab;
        document.getElementById(tabName).scrollIntoView({
            behavior: "smooth"
        });

        if (toggle) {
            toggle.checked = false;
            document.body.classList.remove("no-scroll");
        }

    });
});

// ---------------------------------------------------

const cards = document.querySelectorAll(".card");
const prev = document.querySelector(".arrow.left");
const next = document.querySelector(".arrow.right");

let centerIndex = 0;

function updateCarousel() {
    cards.forEach(card => {
        card.className = "card";
    });

    const total = cards.length;

    cards[centerIndex].classList.add("center");

    cards[(centerIndex - 1 + total) % total].classList.add("left1");
    cards[(centerIndex - 2 + total) % total].classList.add("left2");

    cards[(centerIndex + 1) % total].classList.add("right1");
    cards[(centerIndex + 2) % total].classList.add("right2");
}

next.onclick = () => {
    centerIndex = (centerIndex + 1) % cards.length;
    updateCarousel();
};

prev.onclick = () => {
    centerIndex = (centerIndex - 1 + cards.length) % cards.length;
    updateCarousel();
};

updateCarousel();

const current = document.getElementById("current");
const total = document.getElementById("total");

let index = 0;

total.textContent = cards.length;

function updateUI(){

    current.textContent = index + 1;

    // disable previous button on first card
    prev.disabled = index === 0;

    // disable next button on last card
    next.disabled = index === cards.length - 1;
}

next.addEventListener("click", () => {
    if(index < cards.length - 1){
        index++;
        updateUI();
    }
});

prev.addEventListener("click", () => {
    if(index > 0){
        index--;
        updateUI();
    }
});

updateUI();




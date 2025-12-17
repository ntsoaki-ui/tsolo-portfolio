const texts = [
    "IT Student",
    "Web Developer",
    "UI / UX Designer",
    "Problem Solver"
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (charIndex < texts[index].length) {
        typingElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

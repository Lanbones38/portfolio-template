const factDiv = document.getElementById('fact');
const newFactBtn = document.getElementById('newFactBtn');

// Fade-in helper
function fadeInFact() {
    factDiv.classList.remove("show");
    void factDiv.offsetWidth; // Forces a reflow, restarting animation
    factDiv.classList.add("show");
}

async function getFact() {
    factDiv.innerText = "Loading...";
    fadeInFact();

    try {
        const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
        const data = await res.json();

        factDiv.innerText = data.text;
        fadeInFact();
    } catch (error) {
        factDiv.innerText = "Oops! Couldn't load a fact. Try again.";
        console.error(error);
        fadeInFact();
    }
}

newFactBtn.addEventListener('click', getFact);

// Start with fade-in
setTimeout(() => factDiv.classList.add("show"), 100);
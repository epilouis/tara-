document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('noButton');

    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});

function playMusic() {
    const audio = document.getElementById('bg-music');
    audio.play();
}

function startPlanning() {
    playMusic();
    showNextQuestion("startQuestion", "placeQuestion");
}

function choosePlace(place) {
    alert(`Yum! ${place} sounds delicious! 🍽️`);
    showNextQuestion("placeQuestion", "movieQuestion");
}

function chooseMovie(movie) {
    if (movie === 'yes') {
        document.getElementById('finalMessage').innerHTML = "<h2>💖 Perfect! Now all that's left is... 💖</h2><h3>I look forward on the date! 😘</h3>";
    } else {
        alert(`Great choice! Let's meet at ${movie}!`);
        showNextQuestion("movieQuestion", "activityQuestion");
    }
}

function chooseActivity(activity) {
    alert(`Aww, ${activity} sounds perfect! 😍`);
    showNextQuestion("activityQuestion", "finalMessage");
}

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

function showNextQuestion(currentQuestionId, nextQuestionId) {
    document.getElementById(currentQuestionId).classList.add('hidden');
    document.getElementById(nextQuestionId).classList.remove('hidden');
}

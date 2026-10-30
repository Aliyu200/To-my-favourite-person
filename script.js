
/* =========================
   MY LOVE'S BIRTHDAY WEBSITE
   ========================= */


/* Surprise button */

const surpriseButton = document.getElementById("surprise-button");
const surpriseMessage = document.getElementById("surprise-message");

if (surpriseButton && surpriseMessage) {
    surpriseButton.addEventListener("click", function () {
        surpriseMessage.classList.toggle("hidden");

        if (surpriseMessage.classList.contains("hidden")) {
            surpriseButton.textContent = "Open Me💌";
        } else {
            surpriseButton.textContent = "Close Me💗";

            surpriseMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
}


/* Birthday year */

const birthdayYear = document.getElementById("birthday-year");

if (birthdayYear) {
    birthdayYear.textContent = new Date().getFullYear();
}


/* TOP BUTTON: Background piano + rain */

const musicButton = document.getElementById("music-button");
const pianoAudio = document.getElementById("piano-audio");
const rainAudio = document.getElementById("rain-audio");

let ambiencePlaying = false;

if (musicButton && pianoAudio && rainAudio) {
    pianoAudio.volume = 0.25;
    rainAudio.volume = 0.18;

    musicButton.addEventListener("click", async function () {
        if (!ambiencePlaying) {
            musicButton.disabled = true;
            musicButton.textContent = "Loading sounds... 💗";

            try {
                await Promise.all([
                    pianoAudio.play(),
                    rainAudio.play()
                ]);

                ambiencePlaying = true;
                musicButton.textContent = "⏸ Pause Background Sounds";

            } catch (error) {
                pianoAudio.pause();
                rainAudio.pause();

                musicButton.textContent = "Try Background Sounds Again ♡";
                console.error("Background audio error:", error);

            } finally {
                musicButton.disabled = false;
            }

        } else {
            pianoAudio.pause();
            rainAudio.pause();

            ambiencePlaying = false;
            musicButton.textContent = "♫ Play Background Sounds";
        }
    });
}


/* BOTTOM BUTTON: Our Song */

const songButton = document.getElementById("music-toggle");
const songAudio = document.getElementById("birthday-audio");
const vinylRecord = document.getElementById("vinyl-record");

let songPlaying = false;

if (songButton && songAudio) {
    songAudio.volume = 0.7;

    songButton.addEventListener("click", async function () {
        if (!songPlaying) {
            songButton.disabled = true;
            songButton.textContent = "Loading Our Song... 💗";

            try {
                await songAudio.play();

                songPlaying = true;
                songButton.textContent = "⏸ Pause Our Song ♡";

                if (vinylRecord) {
                    vinylRecord.classList.add("playing");
                }

            } catch (error) {
                songButton.textContent = "Try Our Song Again ♡";
                console.error("Our song could not play:", error);

            } finally {
                songButton.disabled = false;
            }

        } else {
            songAudio.pause();

            songPlaying = false;
            songButton.textContent = "▶ Play Our Song ♡";

            if (vinylRecord) {
                vinylRecord.classList.remove("playing");
            }
        }
    });
}


/* Animated falling rain */

const rainCanvas = document.getElementById("rain-canvas");

if (rainCanvas) {
    const ctx = rainCanvas.getContext("2d");

    let drops = [];
    let width = 0;
    let height = 0;

    function resizeRain() {
        const pixelRatio = Math.min(
            window.devicePixelRatio || 1,
            2
        );

        width = window.innerWidth;
        height = window.innerHeight;

        rainCanvas.width = width * pixelRatio;
        rainCanvas.height = height * pixelRatio;

        rainCanvas.style.width = width + "px";
        rainCanvas.style.height = height + "px";

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        const amount = Math.min(
            180,
            Math.floor((width * height) / 4500)
        );

        drops = Array.from({ length: amount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            length: 18 + Math.random() * 25,
            speed: 7 + Math.random() * 9,
            opacity: 0.6 + Math.random() * 0.4
        }));
    }

    function drawRain() {
        ctx.clearRect(0, 0, width, height);

        drops.forEach(drop => {
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x - 2, drop.y + drop.length);

            ctx.strokeStyle =
                `rgba(235, 225, 255, ${drop.opacity})`;

            ctx.shadowBlur = 8;
            ctx.shadowColor = "#ff9ed8";
            ctx.lineWidth = 1.5;
            ctx.stroke();

            drop.y += drop.speed;
            drop.x -= 0.7;

            if (drop.y > height) {
                drop.y = -drop.length;
                drop.x = Math.random() * width;
            }

            if (drop.x < 0) {
                drop.x = width;
            }
        });

        ctx.shadowBlur = 0;
        requestAnimationFrame(drawRain);
    }

    window.addEventListener("resize", resizeRain);

    resizeRain();
    drawRain();
}


console.log("My love's birthday website is ready! 💗");


/* Scrapbook reveal button */
const scrapbookButton = document.getElementById("scrapbook-reveal-button");
const scrapbookGallery = document.getElementById("scrapbook-gallery");

if (scrapbookButton && scrapbookGallery) {
    scrapbookButton.addEventListener("click", function () {
        scrapbookGallery.classList.toggle("hidden");

        if (scrapbookGallery.classList.contains("hidden")) {
            scrapbookButton.textContent = "Reveal Our Memories ♡";
        } else {
            scrapbookButton.textContent = "Hide Our Memories ♡";
            scrapbookGallery.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
}

/* Opening welcome screen */
const welcomeScreen = document.getElementById("welcome-screen");
const enterButton = document.getElementById("enter-button");

if (welcomeScreen && enterButton) {
    enterButton.addEventListener("click", function () {
        welcomeScreen.classList.add("closing");

        setTimeout(() => {
            welcomeScreen.style.display = "none";
        }, 800);
    });
}

/* DREAMY FLOATING HEARTS */
const heartsContainer = document.getElementById("floating-hearts");

if (heartsContainer) {
    const heartSymbols = ["♡", "♥", "ღ", "💗", "💕"];
    const heartColors = ["#ff8fbd", "#e9a1d4", "#c6a4f5", "#ffd0e5"];

    function createFloatingHeart() {
        const heart = document.createElement("span");

        heart.classList.add("floating-heart");
        heart.textContent = heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

        heart.style.left = Math.random() * 100 + "%";
       heart.style.fontSize = (22 + Math.random() * 20) + "px";
        heart.style.color = heartColors[
            Math.floor(Math.random() * heartColors.length)
        ];
        heart.style.animationDuration = (8 + Math.random() * 5) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 14000);
    }

    setInterval(createFloatingHeart, 700);
}

/* LOVE LETTER REVEAL */
const loveLetter = document.querySelector(".letter-reveal");

if (loveLetter) {
    loveLetter.classList.remove("visible");

    setTimeout(() => {
        loveLetter.classList.add("visible");
    }, 500);
}

/* BIRTHDAY CELEBRATION */
const celebrateButton = document.getElementById("celebrate-button");
const birthdayMessage = document.getElementById("birthday-message");

if (celebrateButton && birthdayMessage) {
    celebrateButton.addEventListener("click", function () {
        birthdayMessage.classList.toggle("hidden");

        if (!birthdayMessage.classList.contains("hidden")) {
            celebrateButton.textContent = "Celebrate Again! 🎉";
            launchConfetti();
        } else {
            celebrateButton.textContent = "Make a Wish! ✨";
        }
    });
}

/* CONFETTI EFFECT */
function launchConfetti() {
    const colors = ["#ff8fbd", "#c6a4f5", "#ffd166", "#ffffff", "#e9a1d4"];

    for (let i = 0; i < 90; i++) {
        const piece = document.createElement("div");

        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = (2 + Math.random() * 3) + "s";
        piece.style.animationDelay = Math.random() * 0.8 + "s";

        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 6000);
    }
}

/* BIRTHDAY COUNTDOWN */
const countdownDisplay = document.getElementById("countdown");

function updateBirthdayCountdown() {
    if (!countdownDisplay) return;

    const now = new Date();
    let birthday = new Date(now.getFullYear(), 9, 31, 0, 0, 0);

    if (now >= birthday) {
    countdownDisplay.textContent = "IT'S YOUR DAY, MY LOVE! 🎉";
    return;
}

    const difference = birthday - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    countdownDisplay.textContent =
        `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}

updateBirthdayCountdown();
setInterval(updateBirthdayCountdown, 1000);
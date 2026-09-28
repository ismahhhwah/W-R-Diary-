// ========================================
// ANNIVERSARY WEBSITE SCRIPT
// ========================================


// ========================================
// GLOBAL
// ========================================

const anniversaryDate = "2025-09-30";

let storyUnlocked = false;
let anniversaryCounterTimer = null;


// ========================================
// SMOOTH SCROLLING
// ========================================

function scrollToSection(sectionId) {

    if (!storyUnlocked) {
        return;
    }

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ========================================
// CLICK THE STARS GAME ⭐
// DO NOT CHANGE
// ========================================

let score = 0;
const totalStars = 5;


function updateGameScore() {

    const scoreElement =
        document.getElementById("score");

    if (scoreElement) {

        scoreElement.textContent =
            `${score} / ${totalStars}`;

    }

}


function startGame() {

    const gameArea =
        document.getElementById("gameArea");

    const gameMessage =
        document.getElementById("gameMessage");

    if (!gameArea) return;

    score = 0;

    updateGameScore();


    gameArea
        .querySelectorAll(".game-star")
        .forEach(function (star) {

            star.remove();

        });


    const gameStart =
        document.getElementById("gameStart");

    if (gameStart) {

        gameStart.style.display = "none";

    }


    if (gameMessage) {

        gameMessage.classList.remove("show");

    }


    const positions = [

        {
            left: "12%",
            top: "25%"
        },

        {
            left: "72%",
            top: "18%"
        },

        {
            left: "42%",
            top: "45%"
        },

        {
            left: "82%",
            top: "68%"
        },

        {
            left: "20%",
            top: "72%"
        }

    ];


    positions.forEach(function (position, index) {

        const star =
            document.createElement("button");

        star.type = "button";

        star.className = "game-star";

        star.textContent = "★";

        star.style.left = position.left;

        star.style.top = position.top;

        star.setAttribute(
            "aria-label",
            `Star ${index + 1}`
        );


        star.addEventListener(
            "click",
            function () {

                collectStar(star);

            }
        );


        gameArea.appendChild(star);

    });

}


function collectStar(star) {

    if (!star) return;


    if (
        star.classList.contains("collected")
    ) {

        return;

    }


    star.classList.add("collected");

    score++;

    updateGameScore();


    setTimeout(function () {

        star.remove();

    }, 250);


    if (score >= totalStars) {

        finishGame();

    }

}


function finishGame() {

    const gameMessage =
        document.getElementById("gameMessage");

    score = totalStars;

    updateGameScore();


    if (!gameMessage) return;


    gameMessage.classList.add("show");


    gameMessage.innerHTML = `

        <div class="win-star">
            ✦
        </div>

        <h3>
            You caught all the stars... 💗
        </h3>

        <p>
            But somehow, you were the one
            who caught my heart first.
        </p>

        <button onclick="showFinalMessage()">
            Open your surprise ♡
        </button>

    `;

}


// ========================================
// WHY I LOVE YOU ⭐
// ========================================

const memoryReasons = {

    1: {

        icon: "🌙",

        title:
            "WUVV YOUU MUAH",

        text:
            "sedap mata memandang tula nama kau bintang HAHAH indahnya awan malam bila kau ada disisi sayangku , kau lah bintangku , bulan ku dan matahari ku sayangku 💞"

    },

    2: {

        icon: "💙",

        title:
            "I love the way you care.",

        text:
            "penyayang - selalu tidak pernah miss ckp ily setiap kali sayang pergi"

    },

    3: {

        icon: "🎮",

        title:
            "You became my favourite teammate.",

        text:
            "lemah lembut - cakap baik2 sama baby"

    },

    4: {

        icon: "✨",

        title:
            "You make me smile without trying.",

        text:
            "pendengar/penghibur - kadang2 lucu HAHA pastu baby rasa sayang yang rajin dengar cerita baby hehe"

    },

    5: {

        icon: "♡",

        title:
            "Because you're simply you.",

        text:
            "orang baik saya suka orang baik sayang selalu tolong orang"

    }

};


function showMemory(number) {

    const popup =
        document.getElementById("memoryPopup");

    const icon =
        document.getElementById("memoryIcon");

    const title =
        document.getElementById("memoryTitle");

    const text =
        document.getElementById("memoryText");


    if (!popup) return;


    const memory =
        memoryReasons[number];


    if (!memory) return;


    if (icon) {

        icon.textContent =
            memory.icon;

    }


    if (title) {

        title.textContent =
            `REASON ${number}`;

    }


    if (text) {

        text.innerHTML = `
            <strong>${memory.title}</strong>
            <br><br>
            ${memory.text}
        `;

    }


    popup.classList.add("active");

    document.body.classList.add(
        "popup-open"
    );

}


function closeMemory() {

    const popup =
        document.getElementById(
            "memoryPopup"
        );


    if (popup) {

        popup.classList.remove("active");

    }


    document.body.classList.remove(
        "popup-open"
    );

}


// ========================================
// LOVE LETTER 💌
// ========================================

function openEnvelope() {

    const envelope =
        document.querySelector(".envelope");


    if (!envelope) return;


    envelope.classList.add("open");

}


function closeEnvelope() {

    const envelope =
        document.querySelector(".envelope");


    if (!envelope) return;


    envelope.classList.remove("open");

}


// ========================================
// FINAL POPUP
// ========================================

function showFinalMessage() {

    const finalPopup =
        document.getElementById(
            "finalPopup"
        );


    if (finalPopup) {

        finalPopup.classList.add("active");

        document.body.classList.add(
            "popup-open"
        );

    }

}


function closeFinalMessage() {

    const finalPopup =
        document.getElementById(
            "finalPopup"
        );


    if (finalPopup) {

        finalPopup.classList.remove("active");

    }


    document.body.classList.remove(
        "popup-open"
    );

}


// ========================================
// BACKGROUND STARS
// ========================================

function createBackgroundStars() {

    const starsContainer =
        document.querySelector(".stars");


    if (!starsContainer) return;


    starsContainer
        .querySelectorAll(
            ".random-background-star"
        )
        .forEach(function (star) {

            star.remove();

        });


    for (let i = 0; i < 35; i++) {

        const star =
            document.createElement("span");


        star.className =
            "random-background-star";


        star.textContent = "✦";


        star.style.left =
            `${Math.random() * 100}%`;


        star.style.top =
            `${Math.random() * 100}%`;


        star.style.animationDelay =
            `${Math.random() * 3}s`;


        starsContainer.appendChild(star);

    }

}


// ========================================
// NAVBAR
// ========================================

function updateActiveNav() {

    if (!storyUnlocked) {
        return;
    }


    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            "nav a[href^='#']"
        );


    if (
        !sections.length ||
        !navLinks.length
    ) {

        return;

    }


    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;


        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.id;

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        const target =
            link.getAttribute("href");


        if (
            target ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


// ========================================
// MUSIC 🎵
// ========================================

let bgMusic = null;
let musicButton = null;
let musicStartedByInteraction = false;


function updateMusicButton() {

    if (!musicButton || !bgMusic) {
        return;
    }


    if (bgMusic.paused) {

        musicButton.classList.remove(
            "playing"
        );

        musicButton.textContent = "♪";

        musicButton.setAttribute(
            "aria-label",
            "Play music"
        );

    }

    else {

        musicButton.classList.add(
            "playing"
        );

        musicButton.textContent = "♫";

        musicButton.setAttribute(
            "aria-label",
            "Pause music"
        );

    }

}


function playMusic() {

    if (!bgMusic) return;


    bgMusic.volume = 0.45;


    const promise =
        bgMusic.play();


    if (promise !== undefined) {

        promise
            .then(function () {

                updateMusicButton();

            })
            .catch(function () {

                updateMusicButton();

            });

    }

}


function startMusicAfterInteraction() {

    if (
        musicStartedByInteraction ||
        !bgMusic
    ) {

        return;

    }


    musicStartedByInteraction = true;


    if (bgMusic.paused) {

        playMusic();

    }

}


// ========================================
// FIRST MEETING GAME 💗
// ========================================

function setupMeetingGame() {

    const meetingGame =
        document.querySelector(
            ".meeting-game"
        );


    if (!meetingGame) return;


    meetingGame.style.cursor = "pointer";


    meetingGame.addEventListener(
        "click",
        function () {

            if (
                meetingGame.classList.contains(
                    "game-started"
                )
            ) {

                return;

            }


            meetingGame.classList.add(
                "game-started"
            );


            setTimeout(function () {

                meetingGame.classList.add(
                    "meeting-complete"
                );

            }, 1500);

        }
    );

}


// ========================================
// DINO DISTANCE GAME 🦖
// ========================================

let dinoStarsCollected = 0;

const totalDinoStars = 3;


function updateDinoScore() {

    const scoreElement =
        document.getElementById(
            "dinoScore"
        );


    if (scoreElement) {

        scoreElement.textContent =
            `${dinoStarsCollected} / ${totalDinoStars} ⭐`;

    }

}


function moveDinoCharacters() {

    const girl =
        document.querySelector(
            "#dinoScreen .dino-girl"
        );


    const boy =
        document.querySelector(
            "#dinoScreen .dino-boy"
        );


    if (!girl || !boy) return;


    let position;


    if (window.innerWidth <= 430) {

        position = [

            "19%",
            "23%",
            "27%",
            "32%"

        ][
            Math.min(
                dinoStarsCollected,
                3
            )
        ];

    }

    else if (window.innerWidth <= 650) {

        position = [

            "22%",
            "26%",
            "30%",
            "37%"

        ][
            Math.min(
                dinoStarsCollected,
                3
            )
        ];

    }

    else {

        position = [

            "25%",
            "29%",
            "33%",
            "42%"

        ][
            Math.min(
                dinoStarsCollected,
                3
            )
        ];

    }


    girl.style.setProperty(
        "left",
        position,
        "important"
    );


    girl.style.setProperty(
        "right",
        "auto",
        "important"
    );


    boy.style.setProperty(
        "right",
        position,
        "important"
    );


    boy.style.setProperty(
        "left",
        "auto",
        "important"
    );

}


function collectDinoStar(star) {

    if (!star) return;


    if (
        star.classList.contains(
            "collected"
        )
    ) {

        return;

    }


    star.classList.add(
        "collected"
    );


    dinoStarsCollected++;


    updateDinoScore();


    moveDinoCharacters();


    setTimeout(function () {

        star.remove();

    }, 300);


    if (
        dinoStarsCollected >=
        totalDinoStars
    ) {

        const screen =
            document.querySelector(
                "#dinoScreen"
            );


        const instruction =
            document.querySelector(
                ".dino-instruction"
            );


        if (screen) {

            screen.classList.add(
                "completed"
            );

        }


        if (instruction) {

            instruction.textContent =
                "You found all the stars! Now we can meet in the middle 💗";

        }


        const girl =
            document.querySelector(
                "#dinoScreen .dino-girl"
            );


        const boy =
            document.querySelector(
                "#dinoScreen .dino-boy"
            );


        if (girl && boy) {

            if (window.innerWidth <= 430) {

                girl.style.setProperty(
                    "left",
                    "32%",
                    "important"
                );

                boy.style.setProperty(
                    "right",
                    "32%",
                    "important"
                );

            }

            else if (window.innerWidth <= 650) {

                girl.style.setProperty(
                    "left",
                    "37%",
                    "important"
                );

                boy.style.setProperty(
                    "right",
                    "37%",
                    "important"
                );

            }

            else {

                girl.style.setProperty(
                    "left",
                    "42%",
                    "important"
                );

                boy.style.setProperty(
                    "right",
                    "42%",
                    "important"
                );

            }

        }

    }

}


function resetDinoGame() {

    const screen =
        document.querySelector(
            "#dinoScreen"
        );


    if (!screen) return;


    dinoStarsCollected = 0;


    screen.classList.remove(
        "completed"
    );


    const instruction =
        document.querySelector(
            ".dino-instruction"
        );


    if (instruction) {

        instruction.textContent =
            "Click the stars and help us get closer. ⭐";

    }


    updateDinoScore();


    moveDinoCharacters();

}


// ========================================
// PAGE LOCK
// ========================================

function lockPage() {

    document.documentElement.style.overflow =
        "hidden";

    document.body.style.overflow =
        "hidden";

}


function unlockPage() {

    document.documentElement.style.overflow =
        "";

    document.body.style.overflow =
        "";

}


// ========================================
// INITIAL PAGE STATE
// ========================================

function setInitialAnniversaryState() {

    const anniversaryScreen =
        document.getElementById(
            "anniversaryScreen"
        );


    const chapterOne =
        document.getElementById(
            "chapterOneContent"
        );


    storyUnlocked = false;


    if (anniversaryScreen) {

        anniversaryScreen.classList.remove(
            "active"
        );

        anniversaryScreen.style.display =
            "none";

        anniversaryScreen.style.visibility =
            "hidden";

        anniversaryScreen.style.opacity =
            "0";

        anniversaryScreen.style.pointerEvents =
            "none";

    }


    if (chapterOne) {

        chapterOne.classList.remove(
            "chapter-visible"
        );

        chapterOne.style.display =
            "none";

        chapterOne.style.visibility =
            "hidden";

        chapterOne.style.opacity =
            "0";

        chapterOne.style.pointerEvents =
            "none";

    }


    lockPage();

    window.scrollTo(0, 0);

}


// ========================================
// OPEN DATE GATE
// ========================================

function openDateGate() {

    // IMPORTANT:
    // Once unlocked, NEVER ask for date again
    // until the page is refreshed.

    if (storyUnlocked) {
        return;
    }


    const dateGate =
        document.getElementById(
            "dateGate"
        );


    if (!dateGate) return;


    dateGate.classList.add(
        "active"
    );


    document.body.classList.add(
        "popup-open"
    );


    lockPage();


    const dateInput =
        document.getElementById(
            "storyDate"
        );


    const errorMessage =
        document.getElementById(
            "dateError"
        );


    if (dateInput) {

        dateInput.value = "";

        dateInput.classList.remove(
            "date-wrong"
        );

    }


    if (errorMessage) {

        errorMessage.classList.remove(
            "show"
        );

    }


    setTimeout(function () {

        if (dateInput) {

            dateInput.focus();

        }

    }, 150);

}


// ========================================
// CLOSE DATE GATE
// ========================================

function closeDateGate() {

    const dateGate =
        document.getElementById(
            "dateGate"
        );


    if (dateGate) {

        dateGate.classList.remove(
            "active"
        );

    }


    document.body.classList.remove(
        "popup-open"
    );


    if (!storyUnlocked) {

        lockPage();

        window.scrollTo(0, 0);

        return;

    }


    unlockPage();

}


// ========================================
// CHECK DATE ❤️
// ========================================

function checkStoryDate() {

    const dateInput =
        document.getElementById(
            "storyDate"
        );


    const errorMessage =
        document.getElementById(
            "dateError"
        );


    if (!dateInput) return;


    const selectedDate =
        dateInput.value;


    if (!selectedDate) {

        if (errorMessage) {

            errorMessage.textContent =
                "Choose our special date first ♡";

            errorMessage.classList.add(
                "show"
            );

        }

        lockPage();

        return;

    }


    if (
        selectedDate ===
        anniversaryDate
    ) {

        if (errorMessage) {

            errorMessage.classList.remove(
                "show"
            );

        }


        dateInput.classList.remove(
            "date-wrong"
        );


        // Unlock ONLY for this page session.
        // Refreshing the page resets this to false.

        storyUnlocked = true;


        const dateGate =
            document.getElementById(
                "dateGate"
            );


        if (dateGate) {

            dateGate.classList.remove(
                "active"
            );

        }


        document.body.classList.remove(
            "popup-open"
        );


        setTimeout(function () {

            showAnniversaryScreen();

        }, 200);


        return;

    }


    if (errorMessage) {

        errorMessage.textContent =
            "Hmm... that's not our date yet ♡";

        errorMessage.classList.add(
            "show"
        );

    }


    dateInput.classList.add(
        "date-wrong"
    );


    lockPage();


    setTimeout(function () {

        dateInput.classList.remove(
            "date-wrong"
        );

    }, 500);

}

// ========================================
// ANNIVERSARY COUNTER ⏳
// ========================================

function startAnniversaryCounter() {

    const startDate = new Date("2025-09-30T00:00:00");

    function updateCounter() {

        const now = new Date();

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();
        let hours = now.getHours() - startDate.getHours();
        let minutes = now.getMinutes() - startDate.getMinutes();
        let seconds = now.getSeconds() - startDate.getSeconds();


        // Fix seconds
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }


        // Fix minutes
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }


        // Fix hours
        if (hours < 0) {
            hours += 24;
            days--;
        }


        // Fix days
        if (days < 0) {

            const previousMonth = new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

            days += previousMonth.getDate();
            months--;
        }


        // Fix months
        if (months < 0) {
            months += 12;
            years--;
        }


        // Get counter elements
        const yearsElement =
            document.getElementById("annYears");

        const monthsElement =
            document.getElementById("annMonths");

        const daysElement =
            document.getElementById("annDays");

        const hoursElement =
            document.getElementById("annHours");

        const minutesElement =
            document.getElementById("annMinutes");

        const secondsElement =
            document.getElementById("annSeconds");


        // Update counter
        if (yearsElement)
            yearsElement.textContent = years;

        if (monthsElement)
            monthsElement.textContent = months;

        if (daysElement)
            daysElement.textContent = days;

        if (hoursElement)
            hoursElement.textContent = hours;

        if (minutesElement)
            minutesElement.textContent = minutes;

        if (secondsElement)
            secondsElement.textContent = seconds;
    }


    // Update immediately
    updateCounter();


    // Prevent duplicate timers
    if (anniversaryCounterTimer) {
        clearInterval(anniversaryCounterTimer);
    }


    // Keep counter running every second
    anniversaryCounterTimer =
        setInterval(updateCounter, 1000);
}



// ========================================
// LOVE FIREWORKS 🎆
// BIGGER + SLOWER
// ========================================

function createLoveFireworks() {

    // Remove old fireworks

    const old =
        document.getElementById(
            "loveFireworks"
        );


    if (old) {
        old.remove();
    }


    // Create container

    const fireworks =
        document.createElement("div");


    fireworks.id =
        "loveFireworks";


    fireworks.style.cssText = `
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 999999;
        overflow: hidden;
    `;


    document.body.appendChild(
        fireworks
    );


    // ====================================
    // FIREWORK CSS
    // ====================================

    if (
        !document.getElementById(
            "loveFireworksStyle"
        )
    ) {

        const style =
            document.createElement(
                "style"
            );


        style.id =
            "loveFireworksStyle";


        style.textContent = `

            #loveFireworks {
                position: fixed !important;
                inset: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                pointer-events: none !important;
                z-index: 999999 !important;
                overflow: hidden !important;
            }


            .love-firework {
                position: absolute;

                width: 12px;
                height: 12px;

                border-radius: 50%;

                background: #ffffff;

                box-shadow:
                    0 0 10px #ffffff,
                    0 0 22px #f7c8d8,
                    0 0 38px #98bdef;

                opacity: 0;

                will-change: transform, opacity;
            }


            @keyframes loveBurst {

                0% {
                    opacity: 0;

                    transform:
                        translate(0, 0)
                        scale(0.2);
                }


                12% {
                    opacity: 1;

                    transform:
                        translate(0, 0)
                        scale(1.2);
                }


                35% {
                    opacity: 1;
                }


                100% {
                    opacity: 0;

                    transform:
                        translate(
                            var(--moveX),
                            var(--moveY)
                        )
                        scale(0.25);
                }

            }

        `;


        document.head.appendChild(
            style
        );

    }


    // ====================================
    // FIREWORK POSITIONS
    // ====================================

    const positions = [

        {
            x: "23%",
            y: "27%",
            size: 150
        },

        {
            x: "77%",
            y: "25%",
            size: 140
        },

        {
            x: "50%",
            y: "20%",
            size: 165
        },

        {
            x: "31%",
            y: "62%",
            size: 125
        },

        {
            x: "70%",
            y: "61%",
            size: 130
        }

    ];


    positions.forEach(
        function (
            position,
            fireworkIndex
        ) {


            // More particles = fuller firework

            const particleCount = 22;


            for (
                let i = 0;
                i < particleCount;
                i++
            ) {

                const particle =
                    document.createElement(
                        "span"
                    );


                particle.className =
                    "love-firework";


                particle.style.left =
                    position.x;


                particle.style.top =
                    position.y;


                // Direction

                const angle =
                    (
                        Math.PI * 2 /
                        particleCount
                    ) * i;


                const distance =
                    position.size;


                const moveX =
                    Math.cos(angle) *
                    distance;


                const moveY =
                    Math.sin(angle) *
                    distance;


                particle.style.setProperty(
                    "--moveX",
                    moveX + "px"
                );


                particle.style.setProperty(
                    "--moveY",
                    moveY + "px"
                );


                // Slow animation

                particle.style.animation =
                    `loveBurst 5.5s ease-out forwards`;


                // Fireworks appear one after another

                particle.style.animationDelay =
                    (
                        fireworkIndex * 0.55
                    ) + "s";


                fireworks.appendChild(
                    particle
                );

            }

        }
    );


    // Start

    requestAnimationFrame(
        function () {

            fireworks.classList.add(
                "show"
            );

        }
    );


    // Remove after everything finishes

    setTimeout(
        function () {

            if (fireworks) {
                fireworks.remove();
            }

        },
        7000
    );

}


// ========================================
// SHOW HAPPY ANNIVERSARY
// → AUTOMATICALLY CHAPTER ONE
// ========================================

function showAnniversaryScreen() {

    const anniversaryScreen =
        document.getElementById(
            "anniversaryScreen"
        );


    const storySection =
        document.getElementById(
            "story"
        );


    const chapterOne =
        document.getElementById(
            "chapterOneContent"
        );


    if (!anniversaryScreen) {

        console.error(
            "❌ anniversaryScreen not found"
        );

        return;

    }


    if (!storySection) {

        console.error(
            "❌ story section not found"
        );

        return;

    }


    if (!chapterOne) {

        console.error(
            "❌ chapterOneContent not found"
        );

        return;

    }


    // ====================================
    // SHOW HAPPY ANNIVERSARY
    // ====================================

    anniversaryScreen.classList.add(
        "active"
    );


    anniversaryScreen.style.display =
        "flex";


    anniversaryScreen.style.visibility =
        "visible";


    anniversaryScreen.style.opacity =
        "1";


    anniversaryScreen.style.pointerEvents =
        "auto";


    anniversaryScreen.style.position =
        "fixed";


    anniversaryScreen.style.top =
        "0";


    anniversaryScreen.style.left =
        "0";


    anniversaryScreen.style.width =
        "100vw";


    anniversaryScreen.style.height =
        "100vh";


    anniversaryScreen.style.zIndex =
        "9999";


    document.body.classList.add(
        "anniversary-open"
    );


    lockPage();


    window.scrollTo(0, 0);


    // ====================================
    // START COUNTER
    // ====================================

    startAnniversaryCounter();


    // ====================================
    // START LOVE FIREWORKS 🎆
    // ====================================

    setTimeout(
        function () {

            createLoveFireworks();

        },
        300
    );


    // ====================================
    // AFTER 6 SECONDS
    // → CHAPTER ONE
    // ====================================

    setTimeout(
        function () {


            // Hide anniversary screen

            anniversaryScreen.classList.remove(
                "active"
            );


            anniversaryScreen.style.display =
                "none";


            anniversaryScreen.style.visibility =
                "hidden";


            anniversaryScreen.style.opacity =
                "0";


            anniversaryScreen.style.pointerEvents =
                "none";


            // ====================================
            // SHOW STORY
            // ====================================

            storySection.style.display =
                "block";


            storySection.style.visibility =
                "visible";


            storySection.style.opacity =
                "1";


            storySection.style.pointerEvents =
                "auto";


            // ====================================
            // SHOW CHAPTER ONE
            // ====================================

            chapterOne.classList.add(
                "chapter-visible"
            );


            chapterOne.style.display =
                "block";


            chapterOne.style.visibility =
                "visible";


            chapterOne.style.opacity =
                "1";


            chapterOne.style.pointerEvents =
                "auto";


            // ====================================
            // UNLOCK WEBSITE
            // ====================================

            storyUnlocked = true;


            unlockPage();


            document.body.classList.remove(
                "anniversary-open"
            );


            document.body.classList.remove(
                "popup-open"
            );


            console.log(
                "💗 CHAPTER ONE AUTOMATICALLY OPENED!"
            );


            // Smoothly move to Chapter One

            setTimeout(
                function () {

                    storySection.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                },
                300
            );


        },
        6000
    );

}


// ========================================
// ESCAPE KEY
// ========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMemory();

            closeFinalMessage();

            closeDateGate();

        }

    }
);


// ========================================
// DOM CONTENT LOADED
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // INITIAL STATE

        setInitialAnniversaryState();


        // BACKGROUND STARS

        createBackgroundStars();


        // DINO

        resetDinoGame();


        // MEETING GAME

        setupMeetingGame();


        // NAVBAR

        updateActiveNav();


        // =================================
        // ENVELOPE 💌
        // =================================

        const envelopeContainer =
            document.getElementById(
                "envelopeContainer"
            );


        if (envelopeContainer) {

            envelopeContainer.addEventListener(
                "click",
                function () {

                    const envelope =
                        envelopeContainer.querySelector(
                            ".envelope"
                        );


                    if (!envelope) return;


                    // Once open, NEVER close
                    // when clicking inside letter

                    if (
                        envelope.classList.contains(
                            "open"
                        )
                    ) {

                        return;

                    }


                    openEnvelope();

                }
            );

        }


        // =================================
        // DATE INPUT ENTER
        // =================================

        const dateInput =
            document.getElementById(
                "storyDate"
            );


        if (dateInput) {

            dateInput.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        event.preventDefault();

                        checkStoryDate();

                    }

                }
            );

        }


        // =================================
        // MEMORY POPUP
        // =================================

        const memoryPopup =
            document.getElementById(
                "memoryPopup"
            );


        if (memoryPopup) {

            memoryPopup.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        memoryPopup
                    ) {

                        closeMemory();

                    }

                }
            );

        }


        // =================================
        // FINAL POPUP
        // =================================

        const finalPopup =
            document.getElementById(
                "finalPopup"
            );


        if (finalPopup) {

            finalPopup.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        finalPopup
                    ) {

                        closeFinalMessage();

                    }

                }
            );

        }


        // =================================
        // DATE GATE BACKGROUND
        // =================================

        const dateGate =
            document.getElementById(
                "dateGate"
            );


        if (dateGate) {

            dateGate.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        dateGate
                    ) {

                        closeDateGate();

                    }

                }
            );

        }


        // =================================
        // MUSIC
        // =================================

        bgMusic =
            document.getElementById(
                "bgMusic"
            );


        musicButton =
            document.getElementById(
                "musicBtn"
            );


        if (
            bgMusic &&
            musicButton
        ) {

            musicButton.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    if (
                        bgMusic.paused
                    ) {

                        playMusic();

                    }

                    else {

                        bgMusic.pause();

                        updateMusicButton();

                    }

                }
            );


            bgMusic.addEventListener(
                "play",
                updateMusicButton
            );


            bgMusic.addEventListener(
                "pause",
                updateMusicButton
            );


            playMusic();

        }

    }
);


// ========================================
// MUSIC AFTER FIRST INTERACTION
// ========================================

document.addEventListener(
    "click",
    startMusicAfterInteraction,
    {
        once: true
    }
);


document.addEventListener(
    "touchstart",
    startMusicAfterInteraction,
    {
        once: true,
        passive: true
    }
);


// ========================================
// SCROLL PROTECTION
// ========================================

window.addEventListener(
    "scroll",
    function () {

        if (!storyUnlocked) {

            window.scrollTo(0, 0);

            return;

        }


        updateActiveNav();

    }
);


// ========================================
// LOAD
// ========================================

window.addEventListener(
    "load",
    function () {

        updateActiveNav();

    }
);


// ========================================
// RESIZE DINO
// ========================================

window.addEventListener(
    "resize",
    function () {

        moveDinoCharacters();

    }
);


// ========================================
// PRESS R TO RESET DINO
// ========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key.toLowerCase() !== "r"
        ) {

            return;

        }


        const dinoGame =
            document.querySelector(
                ".dino-game"
            );


        if (!dinoGame) return;


        const rect =
            dinoGame.getBoundingClientRect();


        const visible =
            rect.bottom > 0 &&
            rect.top < window.innerHeight;


        if (visible) {

            resetDinoGame();

        }

    }
);


// ========================================
// TOUCH SUPPORT DINO
// ========================================

document.addEventListener(
    "touchstart",
    function (event) {

        const target =
            event.target;


        if (
            target &&
            target.classList &&
            target.classList.contains(
                "dino-star-obstacle"
            )
        ) {

            collectDinoStar(target);

        }

    },
    {
        passive: true
    }
);


// ========================================
// PREVENT IMAGE DRAGGING
// ========================================

document.addEventListener(
    "dragstart",
    function (event) {

        if (
            event.target &&
            event.target.tagName === "IMG"
        ) {

            event.preventDefault();

        }

    }
);


console.log(
    "ANNIVERSARY WEBSITE SCRIPT IS WORKING 💗"
);

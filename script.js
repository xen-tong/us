const PASSWORD = "jaan";

/* 📸 SLIDES */
const PHOTOS = [
"IMG_001878.jpg",
"WhatsApp Image 2026-04-24 at 3.48.05 PM (1).jpeg",
"WhatsApp Image 2026-04-24 at 3.48.03 PM (1).jpeg",
"WhatsApp Image 2026-04-24 at 3.48.06 PM.jpeg",
"WhatsApp Image 2026-04-24 at 3.48.05 PM (2).jpeg"
];

/* 💖 CAPTIONS */
const CAPTIONS = [
"Every moment with you feels like magic 💖",
"You're my favorite place ❤️",
"With you everything feels right 🌙",
"Your smile = my happiness 😊",
"Our story is forever 💕"
];

/* 💌 MESSAGE */
const MESSAGE =
"You are the reason my world feels beautiful every day. " +
"You make my ordinary life feel magical. " +
"Every moment with you is my favorite memory. " +
"You are my sweetest addiction. " +
"And I want to choose you in every lifetime. " +
"You complete my soul, Trisha. " +
"I feel complete when I’m with you. " +
"I love you more than yesterday, less than tomorrow. " +
"You are my sweetest blessing, Trisha ❤️ " +
"You are my peace, my happiness, my everything — always and forever. " +
"I love you too much My jaan ❤️";

/* 🎯 ELEMENTS */
const story = document.getElementById("story");
const passInput = document.getElementById("passInput");
const scoreEl = document.getElementById("score");
const slide = document.getElementById("slide");
const caption = document.getElementById("caption");
const typedText = document.getElementById("typedText");

/* 🚀 START */
window.onload = () => {
    show("cinema");

    playMusic();

    setTimeout(() => {
        document.getElementById("cinema").style.display = "none";
        show("intro");
        typeIntro();
    }, 4500);
};

/* 🎵 MUSIC SYSTEM */
function playMusic(){
    const music = document.getElementById("bgMusic");
    const net = document.getElementById("netflixSound");

    if(music) music.play().catch(()=>{});
    if(net) net.play().catch(()=>{});

    // mobile unlock fallback
    document.body.addEventListener("click", () => {
        if(music) music.play();
    });
}

/* 📱 PAGE SWITCH */
function show(id){
    document.querySelectorAll("section").forEach(s=>{
        s.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

/* ✍️ INTRO TYPE */
let text = ["Hey Trisha 💖","Special Surprise","Lets Start 😏"];
let i = 0, j = 0;

function typeIntro(){
    if(i >= text.length){
        setTimeout(()=>show("password"),1000);
        return;
    }

    story.innerHTML += text[i][j];
    j++;

    if(j < text[i].length){
        setTimeout(typeIntro,50);
    }else{
        story.innerHTML += "<br>";
        i++;
        j = 0;
        setTimeout(typeIntro,800);
    }
}

/* 🔑 PASSWORD */
function checkPass(){
    if(passInput.value === PASSWORD){
        show("game");
        score = 0;
        spawnHeart();
    }else{
        alert("Wrong 😏");
    }
}

/* 💖 HEART GAME */
let score = 0;
let currentHeart = null;

function spawnHeart(){
    const game = document.getElementById("game");

    if(currentHeart){
        currentHeart.remove();
        currentHeart = null;
    }

    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💖";

    const rect = game.getBoundingClientRect();

    h.style.left = Math.random() * (rect.width - 50) + "px";
    h.style.top = Math.random() * (rect.height - 100) + "px";

    game.appendChild(h);
    currentHeart = h;

    h.onclick = () => {
        h.remove();
        currentHeart = null;

        score++;
        scoreEl.innerText = score + " / 5";

        if(score >= 5){
            show("slideshow");
            index = 0;
            showSlide();
        }else{
            spawnHeart();
        }
    };
}

/* 📸 SLIDESHOW */
let index = 0;

function showSlide(){
    slide.src = PHOTOS[index];
    caption.innerText = CAPTIONS[index];
}

function nextSlide(){
    index++;

    if(index >= PHOTOS.length){
        show("final");
        typeMessage();
    }else{
        showSlide();
    }
}

/* 💌 FINAL MESSAGE */
let k = 0;

function typeMessage(){
    if(k >= MESSAGE.length) return;

    typedText.innerHTML += MESSAGE[k];
    k++;

    setTimeout(typeMessage,40);
}
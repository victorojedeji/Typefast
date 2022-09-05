const displayContent = document.querySelector(".display-content");
const checkBtn = document.querySelector(".check-btn");
// const nextBtn = document.querySelector(".next-btn");
const quitBtn = document.querySelector(".quit-btn");
const startBtn = document.querySelector(".start-btn");
const inputField = document.querySelector("#input");
const time = document.querySelector(".time");
const level = document.querySelector(".level");
const subLevel = document.querySelector(".sublevel");


startBtn.addEventListener("click", startGame);
// nextBtn.addEventListener("click", next);
checkBtn.addEventListener("click", check);
quitBtn.addEventListener("click", quitGame);

subLevel.style.display = "none";
level.style.display = "none";
time.style.display = "none";

function startGame() {
    // nextBtn.removeAttribute("disabled");
    checkBtn.removeAttribute("disabled");
    quitBtn.removeAttribute("disabled");

    subLevel.style.display = "block";
    level.style.display = "block";
    time.style.display = "block";
    
    if(increment === 1) {
        displayContent.innerText = levelOne[0].content;
    }
    initTimer(10);

    startBtn.setAttribute('disabled', "");
};

let timer;
const initTimer = maxTime => {
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
           return time.innerText = `Time left: ${maxTime}`;
        }
        clearInterval(timer);
        alert(`Out of Time!`);
    }, 1000)
}


let increment = 1;
function next() {
    clearInterval(timer);
    initTimer(10);

    increment = increment + 1;
    if (increment > 5) {
        increment = 1;
    }
    
    let objInUse = null;
    levelOne.map(obj => {
        if(obj.id === increment){
            objInUse = obj;
            subLevel.textContent = `Sublevel: ${objInUse.id}`;
            return objInUse;
        }
    });
    displayContent.innerText = objInUse.content;

};

function check() {
    let userText = inputField.value;
    console.log(displayContent.textContent)
    if(userText === displayContent.textContent) {
        inputField.value = "";
        next();
    }
};

function quitGame() {
    console.log("end of the game")
}
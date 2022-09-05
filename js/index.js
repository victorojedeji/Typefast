const displayContent = document.querySelector(".display-content");
const checkBtn = document.querySelector(".check-btn");
const nextBtn = document.querySelector(".next-btn");
const quitBtn = document.querySelector(".quit-btn");
const startBtn = document.querySelector(".start-btn");
const inputField = document.querySelector("#input");
const time = document.querySelector(".time");
const level = document.querySelector(".level");
const subLevel = document.querySelector(".sublevel");


startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", next);
checkBtn.addEventListener("click", check);
quitBtn.addEventListener("click", quitGame);

subLevel.style.display = "none";
level.style.display = "none";

function check() {
    console.log("check activated")
};


function startGame() {
    nextBtn.removeAttribute("disabled");
    checkBtn.removeAttribute("disabled");
    quitBtn.removeAttribute("disabled");
    
    subLevel.style.display = "block";
    level.style.display = "block";

    if(increment === 1) {
        displayContent.textContent = levelOne[0].content;
    }
};


let increment = 1;
function next() {
    increment = increment + 1;
    if (increment > 5) {
        increment = 1;
    }
    
    let objInUse = null;
    levelOne.map(obj => {
        if(obj.id === increment){
            objInUse = obj;
            subLevel.textContent = `Sublevel: ${obj.id}`;
            return objInUse;
        }
    });
    displayContent.textContent = objInUse.content;
};

displayContent.setAttribute("title", "")


function quitGame() {
    console.log("end of the game")
}
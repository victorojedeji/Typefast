const displayContent = document.querySelector(".display-content");
const checkBtn = document.querySelector(".check-btn");
const nextBtn = document.querySelector(".next-btn");
const quitBtn = document.querySelector(".next-btn");
const inputField = document.querySelector("#input");
const time = document.querySelector(".time");
const startBtn = document.querySelector(".start-btn");




startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", next);
checkBtn.addEventListener("click", check);
quitBtn.addEventListener("click", quitGame);



function check() {
    console.log("check activated")
};


let increment = 0;
function startGame() {
    if(increment === 0) {
        displayContent.textContent = levelOne[0].content;
    }
    nextBtn.removeAttribute("disabled");
    checkBtn.removeAttribute("disabled");
    quitBtn.removeAttribute("disabled");
};

function next() {
    increment = increment + 1;
    if (increment >= 5) {
        increment = 0;
    }
    
    let objInUse = null;
    levelOne.map(obj => {
        if(obj.id === increment){
            objInUse = obj;
            console.log(obj)
            return objInUse;
        }
    });

    
    displayContent.textContent = objInUse.content;
    
};

displayContent.setAttribute("title", "")


function quitGame() {
    console.log("end of the game")
}
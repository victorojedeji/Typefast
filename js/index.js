const main = document.querySelector(".main");
const displayContent = document.querySelector(".display-content");

const checkBtn = document.querySelector(".check-btn");
const quitBtn = document.querySelector(".quit-btn");
const startBtn = document.querySelector(".start-btn");
const quitConfirmBtn = document.querySelector(".quit-confirm");
const continueBtn = document.querySelector(".continue");
const restartBtn = document.querySelector(".restart-btn");

const inputField = document.querySelector("#input");

const time = document.querySelector(".time");
const level = document.querySelector(".level");
const subLevel = document.querySelector(".sublevel");
const chance = document.querySelector(".chance");



startBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", check);
quitBtn.addEventListener("click", quitGame);
quitConfirmBtn.addEventListener("click", quitConfirm);
continueBtn.addEventListener("click", continueGame);
restartBtn.addEventListener("click", restartGame);

function startGame() {
    checkBtn.removeAttribute("disabled");
    quitBtn.removeAttribute("disabled");
    inputField.removeAttribute("disabled");
    main.classList.add("active")
    
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
           return time.textContent = maxTime;
        }
        clearInterval(timer);
        startGame();
        loseChance();
    }, 1000)
}


let increment = 1;
function next() {
    clearInterval(timer);
    initTimer(10);

    increment = increment + 1;
    if (increment > 5) {
        increment = 1;

        let nextLevel = Number(level.textContent);
        if(nextLevel <= 2) {
            nextLevel++;
            level.textContent = nextLevel;
        }

        if(nextLevel > 2) {
            clearInterval(timer);
            main.innerHTML = `<div class="finished">
                                <h2>Congratulations! You have completed the game.</h2>
                             </div>`;
        }
    }

    if((Number(level.textContent) > 1) && (Number(level.textContent) < 3)) {
    mappedData(levelTwo);
    }else mappedData(levelOne);
};

    
function mappedData(level) {
    let objInUse = null;
    level.map(obj => {
        if(obj.id === increment){
            objInUse = obj;
            return objInUse;
        }
    });

    subLevel.textContent = objInUse.id;
    displayContent.textContent = objInUse.content;
};

function loseChance() {
    inputField.value = "";
    clearInterval(timer);
    initTimer(10);
    let runDown = Number(chance.textContent);
    if(runDown >= 0) {
        runDown--;
        chance.textContent = runDown;
        if(runDown == 0) {
        clearInterval(timer);
        main.classList.add("go");
        }
    }
};

function check() {
    let userText = inputField.value;
    
    if(userText === displayContent.textContent) {
        inputField.value = "";
        next();
    } else {
        loseChance();
    }
};

function quitGame() {
    clearInterval(timer);
    main.classList.add("quit");
}

function continueGame() {
    main.classList.remove("quit");
    startGame();
}

function quitConfirm() {
    location.reload();
};

function restartGame() {
    location.reload();
    main.classList.remove("go");
}
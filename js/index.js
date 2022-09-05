const displayContent = document.querySelector(".display-content");
const checkBtn = document.querySelector(".check-btn");
const nextBtn = document.querySelector(".next-btn");
const inputField = document.querySelector("#input");
const time = document.querySelector(".time");
const startBtn = document.querySelector(".start-btn");






checkBtn.addEventListener("click", check);

function check() {
    console.log("check activated")
};

nextBtn.addEventListener("click", next);
let increment = 0;
if(increment === 0) {
    displayContent.textContent = levelOne[0].content;
}
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

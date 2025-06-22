//variables
let box = document.querySelector(".color-box");
let check = document.querySelector(".check-btn");
let gamebtn = document.querySelector(".msg-btn");
let msgBox = document.querySelector(".msg");
let msg = document.querySelector(".p-msg");
// start and restart game button
gamebtn.addEventListener("click", () => {
    genRandomColor();
    msgBox.classList.add("hide");
    msgBox.classList.remove("unhide");
})
//game engine
check.addEventListener("click", () => {
    var inputColor = document.getElementById("color").value;
    if(inputColor === "") {
        console.log("please input your guess");
    } else {
        console.log("you guess", inputColor);
        if(inputColor === box.style.backgroundColor) {
            console.log("you win")
            winner();
        } else {
            console.log("you lose");
            looser();
        }
    }
});
// if win
const winner = () => {
    msgBox.classList.add("unhide");
    msgBox.classList.remove("hide");
    msg.innerHTML = "You Are The Winner";
    gamebtn.innerText = "Restart";
};
// if win
const looser = () => {
    msgBox.classList.add("unhide");
    msgBox.classList.remove("hide");
    msg.innerHTML = "You Are The Looser";
    gamebtn.innerText = "Restart";
}

//generate ramdom color
let genRandomColor = () => {
    const colors = ["red", "blue", "aqua", "green", "yellow", "magenta", "cyan", "gray", "purple", "white", "black", "brown"]
    const ranidx = Math.floor(Math.random()*12);
    box.style.backgroundColor = colors[ranidx];
    return 
};

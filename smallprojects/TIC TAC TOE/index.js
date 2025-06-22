//variables
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newgame = document.querySelector(".newgame-btn");
let msgBox = document.querySelector(".msg-box");
let msg = document.querySelector(".msg");
const newGameBtn = document.querySelector(".newgame-btn");
let winPatten = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];
//game engine
let turn = "player1";
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn === "player1"){
            console.log(turn);
            box.innerHTML = "X";
            box.style.color = "red";
            turn = "player2";
        } else {
            console.log(turn)
            box.innerHTML = "O";
            box.style.color = "green";
            turn = "player1";
        }
        box.disabled = true;
        checkWinner(box);
    });
});
const checkWinner = () => {
    for(let p of winPatten) {
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;
        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                if(pos1 === "X") {
                    msgBox.style.zIndex = "5";
                    msgBox.style.visibility = "visible";
                    msg.innerText = "player 1 is the winner";
                } else {
                    msgBox.style.zIndex = "5";
                    msgBox.style.visibility = "visible";
                    msg.innerText = "player 2 is the winner";
                };
            };
        }

    }
};
const resetgame = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        turn = "player1";
    })
}
newGameBtn.addEventListener("click", () => {
    resetgame();
    msgBox.style.zIndex = "-5";
    msgBox.style.visibility = "hidden";
})
resetBtn.addEventListener("click",() => {
    resetgame();
});
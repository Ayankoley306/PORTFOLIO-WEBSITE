let choices = document.querySelectorAll(".move");
let msg = document.querySelector(".msg");
let playerScore = document.querySelector(".player-score");
let compScore = document.querySelector(".comp-score");
let x = 1;
let y = 1;
// computer choice
const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const ranidx = Math.floor(Math.random()*3);
    return option[ranidx];
}
// user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("user choice is", userChoice);
        playGame(userChoice);
    })
})
//draw game funtion
const drawGame = ()=> {
    console.log("game was draw");
    msg.innerHTML = "Gmae Was Draw";
    msg.style.backgroundColor = "gray";
}
// game engine
const playGame = (userChoice) => {
    const compchoice = genCompChoice();
    console.log("computer choice is", compchoice)
    if(userChoice === compchoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock") {//paper,scissor
            userWin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compchoice === "scissor" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
// game winner
const showWinner = (userWin) => {
    if(userWin){
        console.log("you Win");
        msg.innerHTML = "You Win";
        msg.style.backgroundColor = "green";
        playerScore.innerHTML = x++;
    } else {
        console.log("you lose");
        msg.innerHTML = "You Lose";
        msg.style.backgroundColor = "red";
        compScore.innerHTML = y++;
    }
}
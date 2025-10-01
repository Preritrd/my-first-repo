// Web_HCJ/Tic-Tac-Toe-JS.js
// This code snippet is part of a Tic Tac Toe game implementation in JavaScript.

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector(".btn-newgame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");
let playerTurn = "X";
let gameActive = true;

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (!gameActive || box.innerText !== "") return;

        box.classList.add("onclick");
        box.style.pointerEvents = "none";
        box.innerText = playerTurn;

        if (playerTurn === "X") {
            box.style.color = "#1e90ff";
        } else {
            box.style.color = "#0b1d2a";
        }
        if (checkwinner()) {
            showwinner(playerTurn);
            gameActive = false;
        } else if (isDraw()) {
            showDraw();
            gameActive = false;
        } else {
            playerTurn = playerTurn === "X" ? "O" : "X";
        }
    });
});

const showwinner = (winner) => {
    msg.innerText = `🎉 Congratulations!!! Winner is ${winner}`;
    msgcontainer.classList.remove("hidden");
};

const showDraw = () => {
    msg.innerText = "😮 It's a Draw!";
    msgcontainer.classList.remove("hidden");
};

const resetGame = () => {
    msgcontainer.classList.add("hidden");
    enableboxes();
    playerTurn = "X"; // always start with X
    gameActive = true;
};

const enableboxes = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.classList.remove("onclick");
        box.style.pointerEvents = "auto";
    }
};

resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);

const checkwinner = () => {
    for (let patterns of winpattern) {
        let posval1 = boxes[patterns[0]].innerText;
        let posval2 = boxes[patterns[1]].innerText;
        let posval3 = boxes[patterns[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                return true;
            }
        }
    }
    return false;
};

const isDraw = () => {
    return [...boxes].every(box => box.innerText !== "");
};


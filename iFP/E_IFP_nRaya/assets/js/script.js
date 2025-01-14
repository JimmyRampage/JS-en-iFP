import { TicTacToe } from "./TicTacToe.js";

// SELECTORES
const boardGame = document.getElementById("board-game");
const play = document.getElementById("play");
let boardSize = parseInt(document.getElementById("board-size").value);// 3
let cells = boardGame.getElementsByClassName("cell");

// INSTANCIANDO OBJETO
const board = new TicTacToe();

window.onload = function (){
    board.createBoard(boardGame, boardSizeValidation(boardSize));
    addClickCell();
};

play.addEventListener("click", () => {
    board.deleteBoard(boardGame);
    board.createBoard(boardGame, boardSizeValidation(boardSizeUpdate()));
    addClickCell();
})

// FUNCIONES
function boardSizeValidation(size) {
    const spanText = document.getElementById("span-text");
    if (size >= 3 && size <=10) {
        spanText.textContent = "Lets play!!";
        return size;
    } else {
        spanText.textContent = "Change the size to a valid option between 3 and 10";
        return;
    }
}

function boardSizeUpdate() {
    boardSize = parseInt(document.getElementById("board-size").value);
    return boardSize;
}

function addClickCell() {
    for (let cell of cells){
        cell.addEventListener("click", () =>{
            board.choicePlay(cell);
        })
    }
}

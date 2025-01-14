// Crear la clase n en raya

export class TicTacToe{

    constructor(){
    }

    createBoard(destino, n) { // 3*3
        this.n = n;
        const times = this.n * this.n
        for(let i = 0; i < times; i++){
            let space = document.createElement('div');
            space.setAttribute("id", `cell-${i}`);
            space.textContent = "-";
            space.classList.add("cell", "playable");
            destino.appendChild(space);
        }
        // destino.style.display = "grid";
        destino.style.gridTemplateColumns = `repeat(${this.n},1fr)`;
        destino.style.gridTemplateRows = `repeat(${this.n},1fr)`;
    }

    deleteBoard(destino){
        destino.innerHTML = '';
        // while (destino.firstChild) {
        //     destino.removeChild(destino.firstChild)
        // }
    }

    choicePlay(cell){
        if (cell.classList.contains("playable")){
            cell.classList.remove("playable");
            cell.classList.add("unplayable");
            cell.textContent = "X";
        }
    }

    showAlert(mensaje){
        alert(mensaje)
    }
}



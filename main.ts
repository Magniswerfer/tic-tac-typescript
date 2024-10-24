const  arrayRows: number = 3;
const  arrayCols: number = 3;

let board: string[][] = Array.from({ length: arrayRows}, () => Array(arrayCols).fill(" "));

export function setPlayer(): string {
    let player: string | null;
    do {
        player = prompt("Select X or O? By typing");
    }while(!player || player !== "X" && player !== "O");

    return player;
}

export function printArray(){
    board.forEach(function(row){
        console.log(row)
    });
}

export function playerMove(): [number, number] | null {
    const input = prompt("Enter a row and column number separated by a space, to play")
    
    if (input) {
        const [row, col] = input.split(" ").map(Number);

        if(row >= 0 && row <= 2 && col >= 0 && col <= 2){
            return [row, col];
        }
        else {
            console.log("Invalid input!")
        }
    }
    return null
}

function makeMove(player: string): void {
    let move: [number,number] | null;
    do {
        move = playerMove();
    }while(!move || !isValidMove(board, move));

    const [row,col] = move;

    board[row][col] = player;

    printArray();
}

function isValidMove(board: string[][], move: [number,number]): boolean{
    const [row,col] = move;
    return board[row][col] === " ";
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main){
    printArray();
    makeMove(setPlayer());
}
